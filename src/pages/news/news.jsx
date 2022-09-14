import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

import "./styles/style.css";
import axios from "../../web/axios";

const NewsPage = () => {
  const [news, setNews] = useState();
  const [isLoading, setLoading] = useState(true);

  React.useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => {
        setNews(res.data);
        setLoading(false);
      })
      .catch((err) => console.warn(err));
  }, []);

  const getNews = (even) => (
    <div className="news__list">
      {news.filter((elem, i) => even ? i % 2 == 0 : i % 2 !== 0).map((post) => {
        let image;
        if (post.imageUrl) {
          image = (
            <img
              src={`${process.env.REACT_APP_BACKEND}${post.imageUrl}`}
              alt=""
              className="news__post-image"
            />
          );
        } else {
          image = <></>;
        }
        return (
          <div className="news__post">
            {image}
            <h1 className="news__post-title">{post.title}</h1>
            <p className="news__post-subtitle">{post.subtitle}</p>
            <div className="news__post-footer">
              <p className="news__post-date">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <Link className="news__post-button" to={`/news/${post._id}`}>
                Подробнее
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );

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
  return (
    <section className="news">
      <div className="container">
        <div className="news__inner">
          <h1 className="news__title">Новости</h1>
          <h2 className="news__subtitle">
            Мы не стоим на месте и постоянно развиваемся. На этой странице вы
            можете узнать о наших новостях и мероприятиях, которые мы готовим
            для вас ;)
          </h2>
          <div className="news__content">
          {getNews(1)}
          {getNews(0)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
