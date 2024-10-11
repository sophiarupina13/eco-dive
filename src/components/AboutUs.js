import React from "react";

export default function AboutUs() {
  return (
    <section className="section-about" id="sectionAbout">
      <div className="about-gallery">
        <ul>
          <li>
            <img alt="drone" src="./src/drone_1.png"></img>
          </li>
          <li>
            <img alt="drone" src="./src/drone_2.png"></img>
          </li>
          <li>
            <img alt="drone" src="./src/drone_3.jpg"></img>
          </li>
        </ul>
      </div>
      <div className="about-text">
      <p className="about-description">
        Eco Dive – это компания, специализирующаяся на разработке и производстве
        подводных дронов для мониторинга уровня загрязнения воды. Мы стремимся
        предоставить доступные, надежные и эффективные инструменты для
        исследования и защиты водных ресурсов.
      </p>
      </div>
    </section>
  );
}
