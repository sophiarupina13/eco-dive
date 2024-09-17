import React from "react";

export default function Drone() {
  return (
    <section className="section-drone">
      <div className="drone-container">
        <div className="drone-container1">
          <h2 className="drone-title">Подводный дрон</h2>
          <p className="drone-price">500 000 ₽</p>
          <button className="drone-button">Купить</button>
        </div>
        <img src="./src/drone.png" alt="drone" className="drone-pic"></img>
        <div className="drone-container2">
          <h3>Комплект поставки</h3>
          <ul>
            <li>
              <p>Адаптер питания</p>
            </li>
            <li>
              <p>Винты</p>
            </li>
            <li>
              <p>Руководство пользователя</p>
            </li>
            <li>
              <p>Буклет с информацией</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
