import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";

import "./styles/styles.css";

import "easymde/dist/easymde.min.css";
import { useDispatch } from "react-redux";
import {
  fetchLoadImage,
  fetchPostByID,
  fetchPostNews,
  fetchUpdatePost,
} from "../../../../web/redux/slices/post/post";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const [setLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [subtitle, setSubtitle] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const inputFileRef = React.useRef(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const fetchData = async () => {
    if (isEditing) {
      const data = await dispatch(fetchPostByID(id));
      setTitle(data.payload.title);
      setValue(data.payload.text);
      setImageUrl(data.payload.imageUrl);
      setSubtitle(data.payload.subtitle);
    }
  };

  React.useEffect(() => {
    if (isEditing) {
      fetchData();
    }
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const fields = {
        title,
        subtitle,
        imageUrl,
        text: value,
      };

      const data = !isEditing
        ? await dispatch(fetchPostNews(fields))
        : await dispatch(fetchUpdatePost({ _id: id, ...fields }));


      const _id = isEditing ? id : data.payload._id;

      navigate(`/news/${_id}`);
    } catch (error) {
      console.warn(error);
    }
  };

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const result = await dispatch(fetchLoadImage(formData));
      setImageUrl(result.payload.url);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="create-post">
      <div className="container">
        <div className="create-post__inner">
          <button
            className="create-post__image-button"
            onClick={() => inputFileRef.current.click()}
          >
            Загрузить превью
          </button>
          <input
            ref={inputFileRef}
            type="file"
            onChange={handleChangeFile}
            hidden
          />
          {imageUrl && (
            <>
              <button
                className="create-post__image-button create-post__image-button_red"
                onClick={onClickRemoveImage}
              >
                Удалить
              </button>
              <img
                className="create-post__image"
                src={`${process.env.REACT_APP_BACKEND}${imageUrl}`}
                alt="Uploaded"
              />
            </>
          )}
          <input
            className="create-post__text-input"
            placeholder="Заголовок статьи..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
          <input
            className="create-post__text-input"
            placeholder="Подзаголовок статьи..."
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            fullWidth
          />
          <SimpleMDE
            className="create-post__text"
            value={value}
            onChange={onChange}
            options={options}
          />
          <button className="create-post__submit-button create-post__image-button" onClick={onSubmit}>
            {isEditing ? "Редактировать" : "Опубликовать"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
