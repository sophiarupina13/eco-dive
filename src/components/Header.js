import React, { useState, useEffect } from "react";

export default function Header() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleOpenDialog = () => {
    setFormVisible(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseDialog = () => {
    setFormVisible(false);
    document.body.style.overflow = "auto";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://your-server-endpoint.com/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Заявка успешно отправлена!");
        setFormVisible(false);
        document.body.style.overflow = "auto";
      } else {
        alert("Произошла ошибка при отправке данных.");
      }
    } catch (error) {
      alert("Ошибка: " + error.message);
    }
  };

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
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
          <form onSubmit={handleSubmit}>
          <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Ваш телефон"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ваш email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button onClick={handleCloseDialog} type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </header>
  );
}
