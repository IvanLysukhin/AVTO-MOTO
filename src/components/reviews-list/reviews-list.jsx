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
        {[{
          id: 0,
          name: 'Борис Иванов',
          advantage: 'мощность, внешний вид',
          disadvantage: 'Слабые тормозные колодки (пришлось заменить)',
          comment: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
          rate: 4,
          date: new Date(),
        }].map((review, i) => <Review key={review.id} review={review}/>)}
      </ul>
    </div>
  );
}

ReviewsList.propTypes = {
  popupHandler: PropTypes.func.isRequired,
};

export default ReviewsList;
