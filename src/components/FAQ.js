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
      <ul className="faq-qa">
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
          <h3 className="faq-question">
            На какую глубину способен погружаться дрон?
          </h3>
          <div className="faq-border"></div>
          <p className="faq-answer">
            Дрон способен погружаться на глубину до 10 метров, сохранив
            возможность перемещаться в разных направлениях одной плоскости.
          </p>
        </li>
        <li>
          <h3 className="faq-question">Есть ли влагозащита?</h3>
          <div className="faq-border"></div>
          <p className="faq-answer">
            Подводный дрон имеет степень защиты IP68. Он полностью защищён от
            пыли и предназначен для длительного нахождения под водой.
          </p>
        </li>
        <li>
          <h3 className="faq-question">
            Можно ли использовать дрон в соленой воде?
          </h3>
          <div className="faq-border"></div>
          <p className="faq-answer">
            Наш дрон был создан преимуцественно для пресной и стоячей воды,
            поэтому не рекомендуется использовать его в солёной воде или в
            водоемах с сильным течением.
          </p>
        </li>
      </ul>
    </section>
  );
}
