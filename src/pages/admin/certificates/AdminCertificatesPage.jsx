import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import "./styles/styles.css";

import {
  fetchCertificates,
  fetchDeleteCertificate,
} from "../../../web/redux/slices/certificates/certificates";

const AdminCertificatesPage = () => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const certificates = useSelector((store) => store.certificates.data);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(fetchCertificates());
      setLoading(false);
    }

    fetchData()
  }, [dispatch]);

  const onClick = (id) => {
    dispatch(fetchDeleteCertificate(id));
  };

  if (isLoading) {
    return <></>
  }

  return (
    <div className="admin-certificates">
      <div className="container">
        <div className="admin-certificates__inner">
          <h1 className="admin-certificates__title">Страница сертификатов</h1>
          <Link to="/admin/certificates/create" className="admin-certificates__create-button">Создать</Link>
          <div className="admin-certificates__list">
            {certificates?.map((item) => (
              <div className="admin-certificates__item">
                <h3 className="admin-certificates__item-title">{item.title}</h3>
                <div
                  className="admin-certificates__delete-button"
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

export default AdminCertificatesPage;
