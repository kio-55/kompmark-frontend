import React from "react";

import Slider from "../../components/slider/RewiewSlider";
import ContactForm from "../../components/contact-form/ContactForm";

import "./styles/style.css";

import photo from "./images/Foto.png";
import bulat from "./images/bulat.png";
import kasp from "./images/kaspersky.png";
import kyo from "./images/kyocera.png";
import oki from "./images/oki.png";
import xerox from "./images/xerox.png";

/* const rewiews = [
  {
    title: "Быстрый выбор. Качественная сборка sdffsdf sdf sdf sdfdsf sdf f ",
    text: "Долго не могла решится собрать компьютер. Благодаря знакомому познакомилась  с компанией Компмарк. Отличные ребята. Помогли всё выбрать. Ещё и самостоятельно собрали и доставили ПК домой. Молодцы!",
    stars: 5,
    author: "Александр. Н.",
  },
  {
    title: "Замечательные ребята",
    text: "Быстро, качественно, не дорого. Имеено так можно охарактеризовать эту команду. Большие молодцы! Обязательно вернусь ещё",
    stars: 5,
    author: "Вячеслав Анатольевич",
  },
  {
    title: "Хорошая техника",
    text: "“ Ребята большие молодцы. Всегда очень оперативно работают. всё подскажут, покажут. Спасибо! ”",
    stars: 5,
    author: "Александр. Н.",
  },
  {
    title: "Быстрый выбор. Качественная сборка",
    text: "Долго не могла решится собрать компьютер. Благодаря знакомому познакомилась  с компанией Компмарк. Отличные ребята. Помогли всё выбрать. Ещё и самостоятельно собрали и доставили ПК домой. Молодцы!",
    stars: 5,
    author: "Александр. Н.",
  },
  {
    title: "Быстрый выбор. Качественная сборка",
    text: "Долго не могла решится собрать компьютер. Благодаря знакомому познакомилась  с компанией Компмарк. Отличные ребята. Помогли всё выбрать. Ещё и самостоятельно собрали и доставили ПК домой. Молодцы!",
    stars: 5,
    author: "Александр. Н.",
  },
]; */

const MainPage = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about__inner">
            <h1 className="about__title">
              О <br className="about__title-br" /> нас
            </h1>
            <p className="about__text about__text_right">
              Мы компания, которая сделает вашу жизнь проще. Просто скажите чего
              вы хотите, а остальное доверьте нам. Всё будет на высшем уровне!
            </p>
            <p className="about__text about__text_left">
              “Компмарк” занимается поставками и установкой различной
              оргтехники, а также климатического и сетевого оборудования. Всего,
              что нужно для комфортной жизни в Мегаполисе!
            </p>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h1 className="services__title">Услуги</h1>
          <div className="services__inner">
            <div className="services__item-column services__item-column_left">
              <div className="services__item">
                <h2 className="services__item-title">Технологии для людей</h2>
                <p className="services__item-text">
                  Устанавливаем и поддерживаем сетевое и климатическое
                  оборудование, автоматизируем и обслуживаем оргтехнику,
                  выручаем из беды оборудование, которому не повезло. Штатная
                  команда из 250 специалистов способна позаботиться о вашем
                  проекте на всех этапах его развития: профессиональный подбор,
                  монтаж, сервисное обслуживание, востановление
                  работоспособности, тестирование и поддержка оборудования.
                  Агентство Компмарк является надёжным партнёром на долгие
                  времена.
                </p>
              </div>
              <div className="services__item">
                <h2 className="services__item-title">
                  Компьютерная техника и периферия
                </h2>
                <p className="services__item-text">
                  Компмарк поставляет системные блоки любых конфигураций,
                  мониторы, различные принтеры (банковские, рулонные и т.д.),
                  факсы, сканеры, акустические системы и многое другое. Также
                  копировально-множительную технику от А4 до А0+.
                </p>
              </div>
            </div>
            <div className="services__item-column services__item-column_right">
              <div className="services__item">
                <h2 className="services__item-title">Програмное обеспечение</h2>
                <p className="services__item-text">
                  Устанавливаем различные антивирусные продукты для любых
                  вариантов оргтехники - от домашнего ноутбука до корпоративной
                  лицензии на сотни компьютеров крупного предприятия.
                </p>
              </div>
              <div className="services__item">
                <h2 className="services__item-title">Расходные материалы</h2>
                <p className="services__item-text">
                  Компмарк предлагает широкий ассортиментный перечень тонеров,
                  фотобарабанов и различных запасных частей для черно-белых и
                  цветных лазерных печатающих устройств. Также всегда в продаже
                  оригинальные и совместимые расходные материалы для техники
                  любых производителей.
                </p>
              </div>
              <div className="services__item">
                <h2 className="services__item-title">
                  Слаботочные и компьютерные сети
                </h2>
                <p className="services__item-text">
                  Проектирование и монтаж сетей. Сетевое оборудование, кабели и
                  любые другие комплектующие, связанные со слаботочными сетями.
                  Продажа, монтаж, обслуживание и восстановление
                  работоспособности кабельных систем.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="comments">
        <div className="container">
          <div className="comments__inner">
            <h1 className="comments__title">Отзывы наших пользователей</h1>
            <h3 className="comments__subtitle">
              Наш успех определяется благодаря вам
            </h3>
          </div>
        </div>
        <div className="comments__slider">
          <Slider></Slider>
        </div>
      </section>
      <section className="statistic">
        <div className="container">
          <div className="statistic__inner">
            <h1 className="statistic__title">Мы в цифрах</h1>
            <h3 className="statistic__subtitle">
              Статистика прошлых лет говорит сама за себя
            </h3>
            <div className="statistic__items">
              <div className="statistic__item">
                <h3 className="statistic__item-title">10 000</h3>
                <h3 className="statistic__description">
                  проданых продуктов компьютерного обеспечения
                </h3>
              </div>
              <div className="statistic__item">
                <h3 className="statistic__item-title">250</h3>
                <h3 className="statistic__description">сотрудников</h3>
              </div>
              <div className="statistic__item">
                <h3 className="statistic__item-title">300+</h3>
                <h3 className="statistic__description">
                  довольных покупателей
                </h3>
              </div>
              <div className="statistic__item">
                <h3 className="statistic__item-title">20</h3>
                <h3 className="statistic__description">лет работы</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="director">
        <div className="container">
          <div className="director__inner">
            <div className="director__content">
              <h1 className="director__title">
                Каждый имеет права получить самое лучшее
              </h1>
              <div className="director__status">
                <h2 className="director__name">И. В. Шунько</h2>
                <h3 className="director__subtitle">
                  Генеральный директор ООО “Компмарк”
                </h3>
              </div>
              <p className="director__text">
                «Компмарк» — федеральная компания, работающая в сфере
                информационной технологий с 2003 года. Глубокие экспертные
                знания и многолетний опыт компании лежат в основе партнёрских
                взаимоотношений, обеспечивающих безопасность и надёжность работы
                коммерческих предприятий, государственных органов и рядовых
                пользователей.
              </p>
            </div>
            <img src={photo} alt="" className="director__image" />
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="container">
          <h1 className="partners__title">Наши партнеры</h1>
          <div className="partners__inner">
            <a href="https://bulatgroup.ru/" className="partners__link">
              <img className="partners__image" src={bulat} alt="" />
            </a>
            <a href="https://www.kaspersky.ru/" className="partners__link">
              <img className="partners__image" src={kasp} alt="" />
            </a>
            <a
              href="https://www.kyoceradocumentsolutions.ru/ru.html"
              className="partners__link"
            >
              <img className="partners__image" src={kyo} alt="" />
            </a>
            <a
              href="https://www.oki.com/ru/printing/index.html"
              className="partners__link"
            >
              <img className="partners__image" src={oki} alt="" />
            </a>
            <a href="https://www.xerox.ru/" className="partners__link">
              <img className="partners__image" src={xerox} alt="" />
            </a>
          </div>
        </div>
      </section>
      <section className="contact">
        <ContactForm></ContactForm>
      </section>
    </>
  );
};

export default MainPage;
