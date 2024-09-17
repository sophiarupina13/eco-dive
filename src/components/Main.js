import React from "react";

export default function Main() {
  return (
    <section className="section-main">
      <div className="main-text">
        <h1 className="main-title">Подводный дрон</h1>
        <p className="main-description">
          Улучшенная производительность
          <br /> для дальних путешествий.
          <br />
          Работает так же просто,
          <br />
          как и выглядит.
        </p>
      </div>
      <img src="./src/drone.png" alt="drone" className="main-drone"></img>
    </section>
  );
}
