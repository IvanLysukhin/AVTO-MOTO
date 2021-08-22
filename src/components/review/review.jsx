import React from 'react';
import {calcRate} from '../../utils';
import PropTypes from 'prop-types';

function Review({review}) {
  const {name, advantage, disadvantage, comment, rate, date} = review;

  return (
    <li className="reviews-list__item review">
      <article className="review__container">
        <h4 className="review__name">{name}</h4>
        <div className="review__review-block review__review-block--disadvantages">
          <p className="review__text review__text--bold">Достоинства</p>
          <p className="review__text">{advantage.trim().length ? advantage :  'Отсутствуют'}</p>
        </div>
        <div className="review__review-block review__review-block--advantages">
          <p className="review__text review__text--bold">Недостатки</p>
          <p className="review__text">{disadvantage.trim().length ? disadvantage :  'Отсутствуют'}</p>
        </div>
        <div className="review__comment">
          <p className="review__text review__text--bold">Комментарий</p>
          <p className="review__text">{comment}</p>
        </div>
        <div className="review__rating rating">
          <div className="review__stars rating__stars">
            <span style={{width: calcRate(rate)}}>
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
          <p className="rating__advice">{rate > 2 ? 'Советую' : 'Не советую'}</p>
        </div>
        <div className="review__info">
          <p className="review__time">1 минуту назад</p>
          <button className="review__answer-btn">Ответить</button>
        </div>
      </article>
    </li>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    advantage: PropTypes.string,
    disadvantage: PropTypes.string,
    comment: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
