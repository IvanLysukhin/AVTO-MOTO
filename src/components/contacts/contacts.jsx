import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {DEFAULT_ZOOM, MARKER_COORDINATE, OFFICE_COORDINATE} from '../../constants';

function Contacts() {
  return (
    <div className="tabs__contacts contacts">
      <ul className="contacts__list">
        <li className="contacts__item">
          <p className="contacts__title">Адрес</p>
          <p className="contacts__text">Санкт-Петербург,<br/>набережная реки Карповки, дом 5</p>
        </li>
        <li className="contacts__item">
          <p className="contacts__title">Режим работы</p>
          <p className="contacts__text">Ежедневно, с 10:00 до 21:00</p>
        </li>
        <li className="contacts__item">
          <p className="contacts__title">Телефон</p>
          <a className="contacts__text contacts__text--link" href="tel:+78003335599">8 (800) 333-55-99</a>
        </li>
        <li className="contacts__item">
          <p className="contacts__title">E-mail</p>
          <a className="contacts__text contacts__text--link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </li>
      </ul>
      <div className="contacts__map">
        <YMaps>
          <Map className="contacts__map-box" defaultState={{center: OFFICE_COORDINATE, zoom: DEFAULT_ZOOM}}>
            {[MARKER_COORDINATE].map((coordinate) =>
              (
                <Placemark
                  key={coordinate[0]}
                  geometry={coordinate}
                  options={{
                    iconLayout: 'default#image',
                    iconImageHref: 'img/location.svg',
                    iconImageSize: [30, 42],
                    iconImageOffset: [-3, -42],
                  }}
                />
              ))}
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default Contacts;
