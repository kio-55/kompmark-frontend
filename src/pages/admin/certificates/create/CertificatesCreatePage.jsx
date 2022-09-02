import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCreateCertificate } from "../../../../web/redux/slices/certificates/certificates";
import { fetchLoadImage } from "../../../../web/redux/slices/post/post";

import "./styles.css";
import "../../posts/create/styles/styles.css";

const CertificatesCreatePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const inputFileRef = React.useRef(null);
  const dispatch = useDispatch();

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  const onSubmit = async () => {
    try {
      const fields = {
        title,
        imageUrl,
      };

      await dispatch(fetchCreateCertificate(fields));

      navigate(`/admin/certificates`);
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
    <div className="create-certificate">
      <div className="container">
        <div className="create-certificate__inner">
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
            placeholder="Название сертификата..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
          <button className="create-post__submit-button create-post__image-button" onClick={onSubmit}>
            Создать
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificatesCreatePage;
