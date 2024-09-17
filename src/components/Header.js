import React from "react";

export default function Header() {
  return (
    <header>
      <img className="logo" src="./src/logo.svg" alt="logo"></img>
      <ul className="menu">
        <li>О продукте</li>
        <li>О компании</li>
        <li>FAQ</li>
      </ul>
      <button className="button-buy">Купить</button>
    </header>
  );
}
