import React from 'react';
import SpecList from '../spec-list/spec-list';
import ReviewsList from '../reviews-list/reviews-list';
import Contacts from '../contacts/contacts';

function Tabs () {
  return (
    <section className="main-nav-container__tabs tabs">
      <h2 className="visually-hidden">Информация об объявлении</h2>
      <ul className="tabs__buttons-list">
        <li className="tabs__buttons-item">
          <button className="tabs__button tabs__button--current">Характеристики</button>
        </li>
        <li className="tabs__buttons-item">
          <button className="tabs__button">Отзывы</button>
        </li>
        <li className="tabs__buttons-item">
          <button className="tabs__button">Контакты</button>
        </li>
      </ul>
      <div className="tabs__container">
        {/*<SpecList/>*/}
        {/*<ReviewsList/>*/}
        <Contacts/>
      </div>
    </section>
  );
}

export default Tabs;
