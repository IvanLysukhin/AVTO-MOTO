import React from 'react';

function Slider() {
  return (
    <section className="main-nav-container__slider slider">
      <h2 className="visually-hidden">Слайдер</h2>
      <div className="slider__pics-box">
        <img className="slider__pic" src="img/black-1-min.jpg" width="600" height="375" alt="Марпех 11 Общий вид авто"/>
        <img className="slider__pic" src="img/desktop_slide_2.jpg" width="600" height="375" alt="Марпех 11 Салон"/>
        <img className="slider__pic" src="img/desktop_slide_3.jpg" width="600" height="375" alt="Марпех 11 Приборная панель"/>
      </div>
      <div className="slider__controls">
        <button className="slider__control-btn slider__control-btn--back">
          <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128" stroke="#48494D"/>
          </svg>
        </button>
        <ul className="slider__minis-list">
          <li className="slider__minis-list">
            <img className="slider__mini" src="img/black-1-min.jpg" width="128" height="80" alt="Миниатюра"/>
          </li>
          <li className="slider__minis-list">
            <img className="slider__mini" src="img/desktop_slide_2.jpg" width="128" height="80" alt=""/>
          </li>
          <li className="slider__minis-list">
            <img className="slider__mini" src="img/desktop_slide_3.jpg" width="128" height="80" alt=""/>
          </li>
        </ul>
        <button className="slider__control-btn slider__control-btn--next">
          <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128" stroke="#48494D"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Slider;
