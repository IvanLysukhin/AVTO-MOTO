import React, {memo} from 'react';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer__wrapper">
        <ul className="app-footer__list">
          <li className="app-footer__item">
            <a className="app-footer__link" href="/">Корпоративным клиентам</a>
          </li>
          <li className="app-footer__item">
            <a className="app-footer__link" href="/">Клиентам</a>
          </li>
          <li className="app-footer__item">
            <a className="app-footer__link" href="/">Аренда авто</a>
          </li>
          <li className="app-footer__item">
            <a className="app-footer__link" href="/">Каршеринг</a>
          </li>
          <li className="app-footer__item">
            <a className="app-footer__link" href="/">Как продать авто</a>
          </li>
          <li className="app-footer__item">
            <a className="app-footer__link" href="/">Trade-in</a>
          </li>
          <li className="app-footer__item">
            <a className="app-footer__link" href="/">Test drive</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default memo(Footer);
