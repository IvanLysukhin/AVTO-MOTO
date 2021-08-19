import React from 'react';

function Review() {
  return (
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
          <p className="review__text">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</p>
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
          <button className="review__answer-btn">Ответить</button>
        </div>
      </article>
    </li>
  );
}

export default Review;
