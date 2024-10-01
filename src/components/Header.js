import React, { useState, useEffect } from "react";

export default function Header() {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleOpenDialog = () => {
    setFormVisible(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseDialog = () => {
    setFormVisible(false);
    document.body.style.overflow = "auto";
  };

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className={isTop ? "transparent" : ""}>
      <img className="logo" src="./src/logo.svg" alt="logo"></img>
      <ul className="menu">
        <li>
          <a href="#sectionAbout">О компании</a>
        </li>
        <li>
          <a href="#sectionFAQ">FAQ</a>
        </li>
        <li>
          <a href="#sectionDrone">О продукте</a>
        </li>
      </ul>
      <button className="button-buy" onClick={handleOpenDialog}>
        Купить
      </button>
      <div className={`form-bg ${isFormVisible ? "visible" : ""}`}>
        <div className="form-buy">
          <h2>Оставьте заявку на покупку</h2>
          <form>
            <input type="text" placeholder="Ваше имя" />
            <input type="phone" placeholder="Ваш телефон" />
            <input type="email" placeholder="Ваш email" />
            <button onClick={handleCloseDialog}>Отправить</button>
          </form>
        </div>
      </div>
    </header>
  );
}
