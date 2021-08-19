import React from 'react';

function SpecList() {
  return (
    <ul className="tabs__spec-list spec-list">
      <li className="spec-list__item">
        <p className="spec-list__text spec-list__text--name">Трансмиссия</p>
        <p className="spec-list__text spec-list__text--data">Роботизированная</p>
      </li>
      <li className="spec-list__item">
        <p className="spec-list__text spec-list__text--name">Мощность двигателя, л.с.</p>
        <p className="spec-list__text spec-list__text--data">249</p>
      </li>
      <li className="spec-list__item">
        <p className="spec-list__text spec-list__text--name">Тип двигателя</p>
        <p className="spec-list__text spec-list__text--data">Бензиновый</p>
      </li>
      <li className="spec-list__item">
        <p className="spec-list__text spec-list__text--name">Привод</p>
        <p className="spec-list__text spec-list__text--data">Полный</p>
      </li>
      <li className="spec-list__item">
        <p className="spec-list__text spec-list__text--name">Объем двигателя, л</p>
        <p className="spec-list__text spec-list__text--data">2.4</p>
      </li>
      <li className="spec-list__item">
        <p className="spec-list__text spec-list__text--name">Макс. крутящий момент</p>
        <p className="spec-list__text spec-list__text--data">370/4500</p>
      </li>
      <li className="spec-list__item">
        <p className="spec-list__text spec-list__text--name">Количество цилиндров</p>
        <p className="spec-list__text spec-list__text--data">4</p>
      </li>
    </ul>
  );
}

export default SpecList;
