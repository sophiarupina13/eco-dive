import React from "react";

export default function Drone() {
  return (
    <section className="section-drone" id="sectionDrone">
      <div className="drone-container">
        <div className="drone-container1">
          <h2 className="drone-title">Подводный дрон</h2>
          <p className="drone-price">500 000 ₽</p>
          <button className="drone-button">Купить</button>
        </div>
        <img src="./src/drone.png" alt="drone" className="drone-pic"></img>
        <div className="drone-container2">
          <h3>Характеристики</h3>
          <ul>
            <li>
              <p>Длина: 250-350 мм</p>
            </li>
            <li>
              <p>Ширина: 200-250 мм</p>
            </li>
            <li>
              <p>Высота: 110-150 мм</p>
            </li>
            <li>
              <p>Диаметр пропеллеров: 60 мм</p>
            </li>
            <li>
              <p>Высота пропеллеров: 40-60 мм</p>
            </li>
            <li>
              <p>Емкость аккумулятора: 4200 мАч</p>
            </li>
            <li>
              <p>Материал корпуса: Пластик</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
