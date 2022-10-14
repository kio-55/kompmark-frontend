import React, { useEffect, useState } from "react";
import axios from "../../../web/axios.js";

import "./styles.css";

const FeedbackPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const onClick = async (id) => {
    await axios.delete(`/api/help/${id}`);
    setData(data.filter(obj => obj._id !== id));
  };

  const fetchFeedback = async () => {
    setLoading(true);
    const { data } = await axios.get("/api/help");
    console.log(data);
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchFeedback();
  }, []);

  if (isLoading) {
    return <></>;
  }
  return (
    <div className="feedback">
      <div className="container">
        <div className="feedback__inner">
            <h1 className="feedback__title">Последние обращения: </h1>
          <div className="feedback__list">
            {data?.map((item) => (
              <div className="feedback__item" key={item._id}>
                <h3 className="feedback__item-text">{item.name}</h3>
                <h3 className="feedback__item-text">{item.phone}</h3>
                <a
                  className="feedback__item-text"
                  href={`mailto: ${item.email}`}
                >
                  {item.email}
                </a>
                <div
                  className="feedback__delete-button"
                  onClick={() => onClick(item._id)}
                >
                  Удалить
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
