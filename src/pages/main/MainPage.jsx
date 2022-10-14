import React from "react";

import ContactForm from "../../components/contact-form/ContactForm";

import "./styles/style.css";

import bulat from "./images/bulat.png";
import kasp from "./images/kaspersky.png";
import kyo from "./images/kyocera.png";
import oki from "./images/oki.png";
import xerox from "./images/xerox.png";

const MainPage = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about__inner">
            <h1 className="about__title">Приветствуем Вас!</h1>
            <p className="about__text about__text_right">
              ООО «Компмарк» было организовано в 2003 году и присутствует на
              рынке оргтехники и сервисных услуг более 19 лет. Нашими партнерами
              стали крупные государственные и коммерческие предприятия и
              организации, банки, учреждения здравоохранения и образования,
              правоохранительные структуры, расположенные не только в Омске, но
              и в других регионах нашей страны.
            </p>
            <p className="about__text about__text_left">
              За этот срок была сформирована отличная команда профессионалов в
              разных областях, и можно с гордостью сказать, что наша компания на
              сегодняшний день является надежной и стабильной структурой.
            </p>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h1 className="services__title">ООО «Компмарк » предлагает Вам:</h1>
          <div className="services__inner">
            <div className="services__item-column services__item-column_left">
              <div className="services__item">
                <h2 className="services__item-title">Расходные материалы</h2>
                <p className="services__item-text">
                  Расходные материалы для копировальной техники и принтеров. ООО
                  «Компмарк» является партнером группы компаний Булат в городе
                  Омске и предлагает большой ассортиментный перечень тонеров,
                  фотобарабанов и различных запасных частей производства Булат
                  для черно-белых и цветных лазерных печатающих устройств со
                  склада в Омске по отпускным ценам московского
                  представительства группы компаний Булат. Также всегда в
                  продаже оригинальные и совместимые расходные материалы для
                  техники любых производителей: Xerox, HP, Canon, Kyocera-Mita,
                  Minolta, Toshiba, Ricoh, Epson и т.д.
                </p>
              </div>
              <div className="services__item">
                <h2 className="services__item-title">
                  Компьютерную технику и периферию
                </h2>
                <p className="services__item-text">
                  Компьютерную технику и периферию: системные блоки любой
                  конфигурации, мониторы, лазерные, струйные и матричные
                  принтеры, (в том числе и профессиональные, банковские,
                  рулонные и т.д.), факсы, сканеры, акустические системы и
                  многое другое.
                </p>
              </div>
              <div className="services__item">
                <h2 className="services__item-title">
                  Активное и пассивное сетевое оборудование
                </h2>
                <p className="services__item-text">
                  Активное и пассивное сетевое оборудование, кабели и любые
                  другие комплектующие, связанные со слаботочными сетями.
                  Продажа, монтаж, обслуживание и восстановление
                  работоспособности структурированных кабельных систем.
                </p>
              </div>
            </div>
            <div className="services__item-column services__item-column_right">
              <div className="services__item">
                <h2 className="services__item-title">
                  Продукты программного обеспечения
                </h2>
                <p className="services__item-text">
                  Продукты программного обеспечения, в первую очередь
                  антивирусные продукты производства «Лаборатории Касперского»
                  для любых вариантов оргтехники - от домашнего ноутбука до
                  корпоративной лицензии на сотни компьютеров крупного
                  предприятия.
                </p>
              </div>
              <div className="services__item">
                <h2 className="services__item-title">
                  Копировально-множительную технику
                </h2>
                <p className="services__item-text">
                  Копировально-множительную технику фирм F+, Ricoh, Xerox,
                  Kyocera-Mita, Toshiba, Minolta и других производителей от
                  форматов А4 до А0+ аналоговую и цифровую с любыми
                  существующими опциями.
                </p>
              </div>
              <div className="services__item">
                <h2 className="services__item-title">
                  Услуги сервисного центра
                </h2>
                <p className="services__item-text">
                  - обслуживание копировально-множительной техники на договорной
                  основе и по разовым заявкам;
                  <br /> - ремонт копировальных аппаратов, принтеров, факсов и
                  другого печатного оборудования;
                  <br /> - заправка и восстановление картриджей копировальных
                  аппаратов, лазерных и струйных принтеров любого производителя,
                  в том числе защищенных чипами;
                  <br /> - ремонт ноутбуков, системных блоков, мониторов,
                  источников бесперебойного питания;
                  <br /> - электронный ремонт отдельных элементов оргтехники.
                </p>
              </div>
              <div className="services__item">
                <h2 className="services__item-title">
                  Климатическое оборудование
                </h2>
                <p className="services__item-text">
                  Климатическое оборудование: кондиционеры, тепловые завесы,
                  тепловые пушки и другое – профессиональный подбор, продажа,
                  монтаж, разовое и договорное сервисное и профилактическое
                  обслуживание.
                </p>
              </div>
            </div>
          </div>
          <p className="services__text">
            Наличие собственного сервисного центра и высокая квалификация
            инженерно-технического состава позволяет поддерживать полную
            гарантию на поставляемое оборудование и производить
            высококачественные ремонтные работы любого, самого сложного
            оборудования.
          </p>
          <p className="services__text">
            Официальный статус сервисного центра так же подтвержден
            сертификатом.
          </p>
          <div className="services__addition">
            <div className="services__item services__item_large">
              <h2 className="services__item-title">
                Обращаем ваше внимание, что стабильность, надежность и
                эффективное управление позволяют нашей компании:
              </h2>
              <p className="services__item-text">
                - иметь большой собственный склад комплектующих и расходных
                материалов; <br />- выдерживать оптимальные для клиента сроки
                поставки; <br /> - осуществлять доставку и монтаж оборудования;
                <br /> - производить при необходимости замену оборудования
                аналогичным на время ремонта в самые сжатые сроки;
                <br /> - предлагать широкий спектр взаимовыгодных форм и
                вариантов расчета ( наличный, безналичный,и т.д.)
              </p>
            </div>
          </div>
          <p className="services__text">
            Желаем вам успехов в бизнесе и надеемся увидеть вас в числе наших
            партнеров!
          </p>
          <p className="services__text">
            С уважением, <br /> Директор ООО «Компмарк» <br />  И.В. Шунько
          </p>
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
