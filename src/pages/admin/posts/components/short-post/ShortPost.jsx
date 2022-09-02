import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRemovePosts } from "../../../../../web/redux/slices/post/post";

import "./styles/styles.css";

const ShortPost = ({ post }) => {
  const dispatch = useDispatch();

  const deleteHandle = () => {
    dispatch(fetchRemovePosts(post._id));
  };

  return (
    <div className="short-post">
      <h1 className="short-post__title">{post.title}</h1>
      <div className="short-post__buttons">
        <div
          className="short-post__delete-button"
          onClick={() => deleteHandle()}
        >
          Удалить
        </div>
        <Link
          className="short-post__update-button"
          to={`/admin/posts/update/${post._id}`}
        >
          Обновить
        </Link>
      </div>
    </div>
  );
};

export default ShortPost;
