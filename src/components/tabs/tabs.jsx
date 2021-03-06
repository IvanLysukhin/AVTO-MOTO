import React, {useState} from 'react';
import SpecList from '../spec-list/spec-list';
import ReviewsList from '../reviews-list/reviews-list';
import Contacts from '../contacts/contacts';
import {TabType} from '../../constants';
import {useSelector} from 'react-redux';
import {getPopupState} from '../../store/selectors';

function Tabs() {
  const [tab, setTab] = useState(TabType.SPEC);
  const isPopupOpen = useSelector(getPopupState);

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
            tabIndex={isPopupOpen ? '-1' : ''}
          >
            Характеристики
          </button>
        </li>
        <li className="tabs__buttons-item">
          <button
            className={`tabs__button ${tab === TabType.REVIEWS ? 'tabs__button--current' : ''}`}
            data-tab={TabType.REVIEWS}
            onClick={onTabBtnClickHandler}
            tabIndex={isPopupOpen ? '-1' : ''}
          >
            Отзывы
          </button>
        </li>
        <li className="tabs__buttons-item">
          <button
            className={`tabs__button ${tab === TabType.CONTACTS ? 'tabs__button--current' : ''}`}
            data-tab={TabType.CONTACTS}
            onClick={onTabBtnClickHandler}
            tabIndex={isPopupOpen ? '-1' : ''}
          >
            Контакты
          </button>
        </li>
      </ul>
      <div className="tabs__container">
        {tab === TabType.SPEC ? <SpecList/> : ''}
        {tab === TabType.REVIEWS ? <ReviewsList/> : ''}
        {tab === TabType.CONTACTS ? <Contacts/> : ''}
      </div>
    </section>
  );
}


export default Tabs;
