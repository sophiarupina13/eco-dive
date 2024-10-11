import React, { useState } from "react";

export default function Drone() {
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
      const response = await fetch(
        "https://your-server-endpoint.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

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

  return (
    <section className="section-drone" id="sectionDrone">
      <div className="drone-container">
        <div className="drone-container1">
          <h2 className="drone-title">Подводный дрон</h2>
          <p className="drone-price">500 000 ₽</p>
          <button className="drone-button" onClick={handleOpenDialog}>
            Купить
          </button>
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
            <button onClick={handleCloseDialog} type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
