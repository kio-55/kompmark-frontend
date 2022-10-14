import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { fetchJobs, fetchRemoveJob } from "../../../web/redux/slices/jobs/job";

import "./styles/style.css";

const AdminJobPage = () => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const jobs = useSelector((store) => store.jobs.jobs.items);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(fetchJobs());
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  const onClick = (id) => {
    dispatch(fetchRemoveJob(id));
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="admin-jobs">
      <div className="container">
        <div className="admin-jobs__inner">
          <h1 className="admin-jobs__title">Страница вакансий</h1>
          <Link to="/admin/jobs/create" className="admin-jobs__create-button">
            Создать
          </Link>
          <div className="admin-jobs__list">
            {jobs?.map((item) => (
              <div className="admin-jobs__item">
                <h3 className="admin-jobs__item-title">{item.title}</h3>
                <div
                  className="admin-jobs__delete-button"
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

export default AdminJobPage;
