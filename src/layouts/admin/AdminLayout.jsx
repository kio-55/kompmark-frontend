import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../web/redux/slices/auth/auth";

import "./styles/style.css";

const AdminLayout = () => {
  const isAuth = useSelector(selectIsAuth);
  if (!isAuth && !window.localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <header className="admin-header">
        <div className="container">
          <div className="admin-header__inner">
            <nav className="admin-header__navigation">
              <Link to="/admin/posts" className="admin-header__link">
                Новости
              </Link>
              <Link to="/admin/certificates" className="admin-header__link">
                Сертификаты
              </Link>
              <Link to="/admin/help" className="admin-header__link">
                Обратная связь
              </Link>
              <Link to="/admin/jobs" className="admin-header__link">
                Вакансии и комментарии
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
