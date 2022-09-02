import React from "react";
import { Link } from "react-router-dom";

import logo from "./images/logo.svg";
import './styles/styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link className="header__logo" to="/">
            <img src={logo} alt="Логотип" className="header__logo-image" />
            <h1 className="header__logo-text">Компмарк</h1>
          </Link>
        </div>
        <nav className="header__navigation">
            <Link to="/technical" className="header__link">Технический раздел</Link>
            <Link to="/certificates" className="header__link">Сертификаты</Link>
            <Link to="/news" className="header__link">Новости</Link>
            <Link to="/jobs" className="header__link">Вакансии</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
