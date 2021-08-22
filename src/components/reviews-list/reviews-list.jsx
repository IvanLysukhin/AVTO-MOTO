import React from 'react';
import Review from '../review/review';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getSortByTimeReviews} from '../../store/selectors';

function ReviewsList({popupHandler}) {
  const onOpenBtnClickHandler = () => {
    popupHandler(true);
  };

  const reviews = useSelector(getSortByTimeReviews);

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
        {reviews.map((review, i) => <Review key={review.id} review={review}/>)}
      </ul>
    </div>
  );
}

ReviewsList.propTypes = {
  popupHandler: PropTypes.func.isRequired,
};

export default ReviewsList;
