import React from 'react';

function Specifications () {
  return (
    <section className="main-nav-container__specifications specifications">
      <h2 className="visually-hidden">Характеристики</h2>
      <p className="specifications__name">Марпех 11</p>
      <ul className="specifications__list">
        <li className="specifications__item">
          <p className="specifications__type specifications__type--fuel">бензин</p>
        </li>
        <li className="specifications__item">
          <p className="specifications__type specifications__type--gearbox">механика</p>
        </li>
        <li className="specifications__item">
          <p className="specifications__type specifications__type--power">100 л.с.</p>
        </li>
        <li className="specifications__item">
          <p className="specifications__type specifications__type--engine">1.4 л</p>
        </li>
      </ul>
      <p className="specifications__price">2 300 000 ₽ <span className="specifications__not-price">2 400 000 ₽</span></p>
      <button className="specifications__button specifications__button--request">оставить заявку</button>
      <button className="specifications__button specifications__button--credit">В КРЕДИТ ОТ 11 000 ₽</button>
    </section>
  );
}

export default Specifications;
