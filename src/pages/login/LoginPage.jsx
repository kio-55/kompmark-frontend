import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import logo from "../../components/header/images/logo.svg";
import { fetchAuth, selectIsAuth } from "../../web/redux/slices/auth/auth";

import "./styles/styles.css";

const LoginPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const status = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      console.error("Не удалось авторизоватсья!");
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
      return <Navigate to="/admin/posts"></Navigate>
  }

  return (
    <div className="login">
      <div className="container">
        <div className="login__inner">
          <Link className="header__logo" to="/">
            <img src={logo} alt="Логотип" className="header__logo-image" />
            <h1 className="header__logo-text">Компмарк</h1>
          </Link>
          <h1 className="login__title">Вход в админ панель</h1>
          <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("username", {
                required: "Введите логин",
              })}
              type="text"
              placeholder="Логин"
              className="login__form-item-input"
            />

            <input
              {...register("password", {
                required: "Введите пароль",
              })}
              type="password"
              placeholder="Пароль"
              className="login__form-item-input"
            />
            {status === "error" ? (
              <h1 className="login__error">Логин или пароль неверны!</h1>
            ) : (
              <></>
            )}
            <button
              className="login__form-button"
              type="submit"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
