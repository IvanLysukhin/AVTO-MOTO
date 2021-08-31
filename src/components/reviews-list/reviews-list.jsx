import React from 'react';
import {useDispatch} from 'react-redux';
import Review from '../review/review';
import {useSelector} from 'react-redux';
import {getPopupState, getSortByTimeReviews} from '../../store/selectors';
import DefaultReviews from '../default-reviews/default-reviews';
import {openPopup} from '../../store/actions';

function ReviewsList() {

  const dispatch = useDispatch();
  const isPopupOpen = useSelector(getPopupState);
  const onOpenBtnClickHandler = () => {
    dispatch(openPopup(true));
  };

  const reviews = useSelector(getSortByTimeReviews);

  return (
    <div className="reviews-list">
      <h3 className="visually-hidden">Отзывы</h3>
      <button
        className="reviews-list__button button button--white"
        onClick={onOpenBtnClickHandler}
        tabIndex={isPopupOpen ? '-1' : ''}
      >
        оставить отзыв
      </button>
      <ul className="reviews-list__list">
        <DefaultReviews/>
        {reviews.map((review) => <Review key={review.id} review={review}/>)}
      </ul>
    </div>
  );
}

export default ReviewsList;
