import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetcCreateJob } from "../../../../web/redux/slices/jobs/job";

import "./styles/style.css";

const JobsCreatePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [payment, setPayment] = React.useState("");
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      const fields = {
        title,
        description,
        payment,
      };

      await dispatch(fetcCreateJob(fields));

      navigate(`/admin/jobs`);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="create-job">
      <div className="container">
        <div className="create-job__inner">
          <form onSubmit={onSubmit} className="create-job__form">
            <input
              className="create-job__text-input"
              placeholder="Название вакансии..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="create-job__text-input"
              placeholder="Описание вакансии..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className="create-job__text-input"
              placeholder="Оплата вакансии..."
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            />
            <button className="create-job__button" type="submit">Создать</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobsCreatePage;
