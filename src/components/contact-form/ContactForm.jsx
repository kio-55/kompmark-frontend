import React from "react";
import { useForm } from "react-hook-form";
import axios from "../../web/axios";

import "./styles/style.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmut = (data, e) => {
    axios.post("/api/help", {
      email: data.email,
      name: data.name,
      phone: data.phone
    }).catch((err) => console.warn(err));

    e.target[0].classList.add("invisible");
    Array.from(e.target).map((item) => item.classList.add("invisible"));
    e.target.classList.add("contact__form_submit");
  };

  return (
    <div className="contact contact__submit">
      <div className="container">
        <div className="contact__inner">
          <h1 className="contact__title">
            <span className="contact__title_blue">Остались вопросы,</span> мы
            поможем
          </h1>
          <h2 className="contact__subtitle">
            Оставьте свои контакты - мы перезвоним в течении нескольких часов
          </h2>
          <form onSubmit={handleSubmit(onSubmut)} className="contact__form">
            <div className="contact__form-item">
              <input
                {...register("name", {
                  required: "Введите имя",
                })}
                type="text"
                placeholder="Имя"
                className="contact__form-item-input"
              />
            </div>
            <div className="contact__form-item">
              <input
                {...register("phone", {
                  required: "Введите телефон",
                  pattern: {
                    value:
                      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                    message: "Введите валидный телефон!",
                  },
                })}
                type="text"
                placeholder="+7 (---) --- -- --"
                className="contact__form-item-input"
              />
              {errors.phone && errors.phone.type === "pattern" && (
                <p className="contact__error">{errors.phone.message}</p>
              )}
            </div>
            <div className="contact__form-item">
              <input
                {...register("email", {
                  required: "Введите email",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Введите валидный email!",
                  },
                })}
                type="text"
                placeholder="Эл. адрес"
                className="contact__form-item-input"
              />
              {errors.email && errors.email.type === "pattern" && (
                <p className="contact__error">{errors.email.message}</p>
              )}
            </div>
            <button className="contact__form-button" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
