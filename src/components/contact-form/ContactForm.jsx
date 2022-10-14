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
    const result = window.confirm(
      `Предоставляя свои персональные данные Пользователь даёт согласие на обработку, хранение и использование своих персональных данных на основании ФЗ № 152-ФЗ «О персональных данных» от 27.07.2006 г. в следующих целях:
      Осуществление клиентской поддержки
      Получения Пользователем информации о маркетинговых событиях
      Проведения аудита и прочих внутренних исследований с целью повышения качества предоставляемых услуг.
      Под персональными данными подразумевается любая информация личного характера, позволяющая установить личность Пользователя/Покупателя такая как:
      Фамилия, Имя, Отчество, Контактный телефон
      Адрес электронной почты
      Персональные данные Пользователей хранятся исключительно на электронных носителях и обрабатываются с использованием автоматизированных систем, за исключением случаев, когда неавтоматизированная обработка персональных данных необходима в связи с исполнением требований законодательства.
      Компания обязуется не передавать полученные персональные данные третьим лицам, за исключением следующих случаев:
      По запросам уполномоченных органов государственной власти РФ только по основаниям и в порядке, установленным законодательством РФ
      Компания оставляет за собой право вносить изменения в одностороннем порядке в настоящие правила, при условии, что изменения не противоречат действующему законодательству РФ. Изменения условий настоящих правил вступают в силу после их публикации на Сайте.`
    );
    if (result) {
      axios.post("/api/help", {
        email: data.email,
        name: data.name,
        phone: data.phone
      }).catch((err) => console.warn(err));
  
      e.target[0].classList.add("invisible");
      Array.from(e.target).map((item) => item.classList.add("invisible"));
      e.target.classList.add("contact__form_submit");
    }
  }

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
                      /^((8|\+7)[ ]?)?(\(?\d{3}\)?[ ]?)?[\d ]{7,10}$/,
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
                    value: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
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
