import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import {getPopupState} from '../../store/selectors';

function Footer() {
  const isPopupOpen = useSelector(getPopupState);
  return (
    <footer className="app-footer">
      <div className="app-footer__wrapper">
        <ul className="app-footer__list">
          <li className="app-footer__item">
            <a className="app-footer__link" href="/" tabIndex={isPopupOpen ? '-1' : ''}>Корпоративным клиентам</a>
          </li>
          <li className="app-footer__item">
            <a className="app-footer__link" href="/" tabIndex={isPopupOpen ? '-1' : ''}>Клиентам</a>
          </li>
          <li className="app-footer__item">
            <a className="app-footer__link" href="/" tabIndex={isPopupOpen ? '-1' : ''}>Аренда авто</a>
          </li>
          <li className="app-footer__item">
            <a className="app-footer__link" href="/" tabIndex={isPopupOpen ? '-1' : ''}>Каршеринг</a>
          </li>
          <li className="app-footer__item">
            <a className="app-footer__link" href="/" tabIndex={isPopupOpen ? '-1' : ''}>Как продать авто</a>
          </li>
          <li className="app-footer__item">
            <a className="app-footer__link" href="/" tabIndex={isPopupOpen ? '-1' : ''}>Trade-in</a>
          </li>
          <li className="app-footer__item">
            <a className="app-footer__link" href="/" tabIndex={isPopupOpen ? '-1' : ''}>Test drive</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default memo(Footer);
