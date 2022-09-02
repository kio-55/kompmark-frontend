import React, { useState } from "react";
import axios from "../../web/axios";
import { TailSpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";

import "./styles/style.css";
import { useDispatch } from "react-redux";
import { fetchPostByID } from "../../web/redux/slices/post/post";
import ReactMarkdown from 'react-markdown';

const FullPostPage = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState();
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchPost = async () => {
    const data = await dispatch(fetchPostByID(id));
    setPost(data.payload);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return (
      <TailSpin
        height="200px"
        width="100%"
        color="#0A72CD"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }

  const checkImg = (post) => {
    if (post.imageUrl) {
      return (
        <img
          src={`${process.env.REACT_APP_BACKEND}${post.imageUrl}`}
          alt=""
          className="post__image"
        />
      );
    } else {
      return <></>;
    }
  };

  return (
    <section className="post">
      <div className="container">
        <div className="post__inner">
          <h1 className="post__title">{post.title}</h1>
          <h2 className="post__subtitle">{post.subtitle}</h2>
          {checkImg(post)}
          <ReactMarkdown className="post__text" children={post.text}></ReactMarkdown>
          <p className="post__date">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FullPostPage;
