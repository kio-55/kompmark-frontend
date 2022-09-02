import React from "react";
import { Link } from "react-router-dom";

import logo from "./images/logo.svg";
import "./styles/styles.css";

const ErrorPage = () => {
  return (
    <div className="error">
      <div className="container">
        <header className="header">
          <Link className="header__logo" to="/">
            <img src={logo} alt="Логотип" className="header__logo-image" />
            <h1 className="header__logo-text header__logo-text_white">
              Компмарк
            </h1>
          </Link>
        </header>
        <div className="error__content">
          <p className="error__text">
            УПС... <br /> Страница не найдена
          </p>
          <div className="error__footer">
            <p className="error__footer-text">
              К сожалению, запрашиваемая страница потерялась. Мы обязательно
              разберёмся с этим недорозумением.
            </p>
            <Link className="error__footer-button" to="/">Вернуться на главную</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
