import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import {getPopupState} from '../../store/selectors';

function DefaultReviews() {
  const isPopupOpen = useSelector(getPopupState);
  return (
    <>
      <li className="reviews-list__item review">
        <article className="review__container">
          <h4 className="review__name">Борис Иванов</h4>
          <div className="review__review-block review__review-block--disadvantages">
            <p className="review__text review__text--bold">Достоинства</p>
            <p className="review__text">мощность, внешний вид</p>
          </div>
          <div className="review__review-block review__review-block--advantages">
            <p className="review__text review__text--bold">Недостатки</p>
            <p className="review__text">Слабые тормозные колодки (пришлось заменить)</p>
          </div>
          <div className="review__comment">
            <p className="review__text review__text--bold">Комментарий</p>
            <p className="review__text">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по
              базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что
              полностью доволен.
            </p>
          </div>
          <div className="review__rating rating">
            <div className="review__stars rating__stars">
              <span style={{width: '60%'}}>
              </span>
              <span className="visually-hidden">Rating</span>
            </div>
            <p className="rating__advice">Советую</p>
          </div>
          <div className="review__info">
            <p className="review__time">1 минуту назад</p>
            <button className="review__answer-btn" tabIndex={isPopupOpen ? '-1' : ''}>Ответить</button>
          </div>
        </article>
      </li>
      <li className="reviews-list__item review">
        <article className="review__container">
          <h4 className="review__name">Марсель Исмагилов</h4>
          <div className="review__review-block review__review-block--disadvantages">
            <p className="review__text review__text--bold">Достоинства</p>
            <p className="review__text">Cтиль, комфорт, управляемость</p>
          </div>
          <div className="review__review-block review__review-block--advantages">
            <p className="review__text review__text--bold">Недостатки</p>
            <p className="review__text"> Дорогой ремонт и обслуживание</p>
          </div>
          <div className="review__comment">
            <p className="review__text review__text--bold">Комментарий</p>
            <p className="review__text">
              Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.
            </p>
          </div>
          <div className="review__rating rating">
            <div className="review__stars rating__stars">
              <span style={{width: '60%'}}>
              </span>
              <span className="visually-hidden">Rating</span>
            </div>
            <p className="rating__advice">Советую</p>
          </div>
          <div className="review__info">
            <p className="review__time">1 минуту назад</p>
            <button className="review__answer-btn" tabIndex={isPopupOpen ? '-1' : ''}>Ответить</button>
          </div>
        </article>
      </li>
    </>
  );
}

export default memo(DefaultReviews);
