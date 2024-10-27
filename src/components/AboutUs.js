import React, { useState } from "react";

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "./src/drone_1.jpg",
    "./src/drone_2.png",
    "./src/drone_3.jpg",
    "./src/drone_4.jpg",
    "./src/drone_5.jpg",
    "./src/drone_6.png",
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : Math.max(0, prevIndex - 3)
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= images.length ? 0 : prevIndex + 3
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <section className="section-about" id="sectionAbout">
      <div className="about-gallery">
        <button onClick={prevSlide} className="slider-button">
          <img alt="left" src="./src/slider.svg" className="slider" />
        </button>

        <ul className="image-list">
          {visibleImages.map((image, index) => (
            <li key={index}>
              <img alt="drone" src={image} />
            </li>
          ))}
        </ul>

        <button onClick={nextSlide} className="slider-button">
          <img
            alt="right"
            src="./src/slider.svg"
            className="slider slider-right"
          />
        </button>
      </div>

      <div className="about-text">
        <p className="about-description">
          Eco Dive – это компания, специализирующаяся на разработке и
          производстве подводных дронов для мониторинга уровня загрязнения воды.
          Мы стремимся предоставить доступные, надежные и эффективные
          инструменты для исследования и защиты водных ресурсов.
        </p>
      </div>
    </section>
  );
}
