import React, {useState} from 'react';
import SpecList from '../spec-list/spec-list';
import ReviewsList from '../reviews-list/reviews-list';
import Contacts from '../contacts/contacts';
import {TabType} from '../../constants';
import PropTypes from 'prop-types';

function Tabs({popupHandler}) {
  const [tab, setTab] = useState(TabType.SPEC);

  const onTabBtnClickHandler = ({target}) => {
    setTab(target.getAttribute('data-tab'));
  };

  return (
    <section className="main-container__tabs tabs">
      <h2 className="visually-hidden">Информация об объявлении</h2>
      <ul className="tabs__buttons-list">
        <li className="tabs__buttons-item">
          <button
            className={`tabs__button ${tab === TabType.SPEC ? 'tabs__button--current' : ''}`}
            data-tab={TabType.SPEC}
            onClick={onTabBtnClickHandler}
          >
            Характеристики
          </button>
        </li>
        <li className="tabs__buttons-item">
          <button
            className={`tabs__button ${tab === TabType.REVIEWS ? 'tabs__button--current' : ''}`}
            data-tab={TabType.REVIEWS}
            onClick={onTabBtnClickHandler}
          >
            Отзывы
          </button>
        </li>
        <li className="tabs__buttons-item">
          <button
            className={`tabs__button ${tab === TabType.CONTACTS ? 'tabs__button--current' : ''}`}
            data-tab={TabType.CONTACTS}
            onClick={onTabBtnClickHandler}
          >
            Контакты
          </button>
        </li>
      </ul>
      <div className="tabs__container">
        {tab === TabType.SPEC ? <SpecList/> : ''}
        {tab === TabType.REVIEWS ? <ReviewsList popupHandler={popupHandler}/> : ''}
        {tab === TabType.CONTACTS ? <Contacts/> : ''}
      </div>
    </section>
  );
}

Tabs.propTypes = {
  popupHandler: PropTypes.func.isRequired,
};


export default Tabs;
