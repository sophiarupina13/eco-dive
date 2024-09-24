import React from "react";

export default function Header() {
  return (
    <header id="header">
      <img className="logo" src="./src/logo.svg" alt="logo"></img>
      <ul className="menu">
        <li>
          <a href="#sectionDrone">О продукте</a>
        </li>
        <li>
          <a href="#sectionAbout">О компании</a>
        </li>
        <li>
          <a href="#sectionFAQ">FAQ</a>
        </li>
      </ul>
      <button className="button-buy">Купить</button>
      <div className="form-bg">
        <div className="form-buy">
          <h2>Оставьте заявку на покупку</h2>
          <form>
            <input type="text" placeholder="Ваше имя" />
            <input type="phone" placeholder="Ваш телефон" />
            <input type="email" placeholder="Ваш email" />
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </header>
  );
}
