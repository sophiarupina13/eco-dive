import React from "react";

export default function FAQ() {
  return (
    <section className="section-faq" id="sectionFAQ">
      <div className="faq-text">
        <h2 className="faq-title">
          Часто задаваемые
          <br />
          вопросы
        </h2>
        <p className="faq-description">
          Все ваши часто задаваемые вопросы
          <br /> о подводном дроне Bubble Patrol.
          <br />
          <br />
          Если у вас есть собственный вопрос - задайте
          <br />
          его через форму обратной связи.
        </p>
        <button className="faq-button">Задать вопрос</button>
      </div>
      <div className="faq-qa">
        <ul>
          <li>
            <h3 className="faq-question">
              Нужны ли специальные знания для использования подводного дрона?
            </h3>
            <div className="faq-border"></div>
            <p className="faq-answer">
              Нет, для использования нашего дрона не нужны знания
              программирования, с интерфейсом разберется каждый.{" "}
            </p>
          </li>
          <li>
            <h3 className="faq-question">Вопрос 2</h3>
            <div className="faq-border"></div>
            <p className="faq-answer">Ответ 2</p>
          </li>
          <li>
            <h3 className="faq-question">Вопрос 3</h3>
            <div className="faq-border"></div>
            <p className="faq-answer">Ответ 3</p>
          </li>
          <li>
            <h3 className="faq-question">Вопрос 4</h3>
            <div className="faq-border"></div>
            <p className="faq-answer">Ответ 4</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
