import React from 'react';

function ReviewForm() {
  return (
    <div className="review-form">
      <h3 className="visually-hidden">Форма отправки отзыва</h3>

      <form className="review-form__container" action="#" method="POST">
        <button className="review-form__close-btn">
          Закрыть
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6399 15.0096L7.50482 8.86495L1.36977 15.0096L0 13.6399L6.14469 7.50482L0 1.36978L1.36977 0L7.50482 6.14469L13.6399 0.00964652L15 1.36978L8.86495 7.50482L15 13.6399L13.6399 15.0096Z" fill="#9F9E9E"/>
          </svg>
        </button>
        <h4 className="review-form__title">Оставить отзыв</h4>
        <ul className="review-form__list">
          <li className="review-form__item">
            <label className="visually-hidden" htmlFor="name">Имя</label>
            <input className="review-form__input" type="text" id="name" name="name" placeholder="Имя"/>
          </li>
          <li className="review-form__item">
            <label className="visually-hidden" htmlFor="advantage">Достоинства</label>
            <input className="review-form__input" type="text" id="advantage" name="advantage" placeholder="Достоинства"/>
          </li>
          <li className="review-form__item">
            <label className="visually-hidden" htmlFor="disadvantage">Недостатки</label>
            <input className="review-form__input" type="text" id="disadvantage" name="disadvantage" placeholder="Недостатки"/>
          </li>
          <li className="review-form__item review-form__item--stars">
            <p className="review-form__rate-name">Оцените товар:</p>
            <div className="review-form__rating">

              <input className="review-form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
              <label htmlFor="5-stars" className="review-form__rating-label review-form__rating-label" title="perfect">
                <svg  className="review-form__star-image" id="icon-star" width="27" height="27" viewBox="0 0 27 27" fill="#BDBEC2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"/>
                </svg>
              </label>

              <input className="review-form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
              <label htmlFor="4-stars" className="review-form__rating-label review-form__rating-label" title="good">
                <svg  className="review-form__star-image" id="icon-star" width="27" height="27" viewBox="0 0 27 27" fill="#BDBEC2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"/>
                </svg>
              </label>

              <input className="review-form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
              <label htmlFor="3-stars" className="review-form__rating-label review-form__rating-label" title="not bad">
                <svg  className="review-form__star-image" id="icon-star" width="27" height="27" viewBox="0 0 27 27" fill="#BDBEC2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"/>
                </svg>
              </label>

              <input className="review-form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
              <label htmlFor="2-stars" className="review-form__rating-label review-form__rating-label" title="badly">
                <svg  className="review-form__star-image" id="icon-star" width="27" height="27" viewBox="0 0 27 27" fill="#BDBEC2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"/>
                </svg>
              </label>

              <input className="review-form__rating-input visually-hidden" name="rating" value="1" id="1-stars" type="radio"/>
              <label htmlFor="1-stars" className="review-form__rating-label review-form__rating-label" title="terribly">
                <svg  className="review-form__star-image" id="icon-star" width="27" height="27" viewBox="0 0 27 27" fill="#BDBEC2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"/>
                </svg>
              </label>
            </div>
          </li>
          <li className="review-form__item">
            <label className="visually-hidden" htmlFor="comment">Комментарий</label>
            <textarea className="review-form__text-area" name="comment" id="comment" cols="30" rows="10" placeholder="Комментарий"/>
          </li>
        </ul>
        <button className="review-form__btn button">оставить отзыв</button>
      </form>
    </div>
  );
}

export default ReviewForm;
