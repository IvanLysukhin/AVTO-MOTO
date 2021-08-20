import React from 'react';
import Review from '../review/review';
import PropTypes from 'prop-types';

function ReviewsList({popupHandler}) {
  const onOpenBtnClickHandler = () => {
    popupHandler(true);
  };

  return (
    <div className="reviews-list">
      <h3 className="visually-hidden">Отзывы</h3>
      <button
        className="reviews-list__button button button--white"
        onClick={onOpenBtnClickHandler}
      >
        оставить отзыв
      </button>
      <ul className="reviews-list__list">
        {Array(2).fill('').map((el, i) => <Review key={i}/>)}
      </ul>
    </div>
  );
}

ReviewsList.propTypes = {
  popupHandler: PropTypes.func.isRequired,
};

export default ReviewsList;
