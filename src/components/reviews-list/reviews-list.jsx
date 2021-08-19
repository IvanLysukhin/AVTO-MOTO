import React from 'react';
import Review from '../review/review';

function ReviewsList() {
  return (
    <div className="reviews-list">
      <h3 className="visually-hidden">Отзывы</h3>
      <button className="reviews-list__button button button--white">оставить отзыв</button>
      <ul className="reviews-list__list">
        {Array(2).fill('').map((el, i) => <Review key={i}/>)}
      </ul>
    </div>
  );
}

export default ReviewsList;
