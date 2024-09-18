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
    </header>
  );
}
