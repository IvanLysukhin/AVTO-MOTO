import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {nanoid} from '@reduxjs/toolkit';
import {addReview} from '../../store/actions';
import {saveReviewsData} from '../../utils';

function ReviewForm({popupHandler}) {
  const dispatch = useDispatch();
  const [errorName, setNameError] = useState(false);
  const [errorComment, setCommentError] = useState(false);

  const nameInput = useRef();
  const advantageInput = useRef();
  const disadvantageInput = useRef();
  const rateChecks = useRef();
  const commentInput = useRef();

  const onEscClickHandler = (evt) => {
    if (evt.keyCode === 27) {
      popupHandler(false);
    }
  };

  const onCloseBtnClickHandler = (evt) => {
    evt.preventDefault();
    popupHandler(false);
  };

  const onOverlayClickHandler = ({target}) => {
    if(target.classList.contains('review-form')) {
      popupHandler(false);
    }
  };

  const onNameInputInputHandler = ({target}) => {
    if (target.value.length > 0) {
      setNameError(false);
    }
  };

  const onCommentInputInputHandler = ({target}) => {
    if (target.value.length > 0) {
      setCommentError(false);
    }
  };

  const onSubmitBtnClickHandler = (evt) => {
    evt.preventDefault();
    const inputs = Object.values(rateChecks.current.children).filter((tag) => tag.tagName === 'INPUT');
    const checkedIndex = inputs.findIndex((input) => input.checked);

    const name = nameInput.current.value;
    const comment = commentInput.current.value;

    if (!name) {
      setNameError(true);
      return;
    }

    if (!comment) {
      setCommentError(true);
      return;
    }

    if (checkedIndex >= 0) {
      const formData = {
        id: nanoid(3),
        name,
        advantage: advantageInput.current.value,
        disadvantage: disadvantageInput.current.value,
        comment,
        rate: Number(inputs[checkedIndex].value),
        date: new Date().toISOString(),
      };

      dispatch(addReview(formData));
      saveReviewsData(formData);
      popupHandler(false);
    }

  };

  useEffect(()=> {
    window.addEventListener('keydown', onEscClickHandler);
    return () => {window.removeEventListener('keydown', onEscClickHandler);};
  }, []);

  return (
    <div className="review-form" onClick={onOverlayClickHandler}>
      <h3 className="visually-hidden">Форма отправки отзыва</h3>

      <form className="review-form__container" action="#" method="POST">
        <button className="review-form__close-btn" onClick={onCloseBtnClickHandler}>
          Закрыть
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6399 15.0096L7.50482 8.86495L1.36977 15.0096L0 13.6399L6.14469 7.50482L0 1.36978L1.36977 0L7.50482 6.14469L13.6399 0.00964652L15 1.36978L8.86495 7.50482L15 13.6399L13.6399 15.0096Z" fill="#9F9E9E"/>
          </svg>
        </button>
        <h4 className="review-form__title">Оставить отзыв</h4>
        <ul className="review-form__list">
          <li className="review-form__item">
            {errorName && <div className="review-form__valid-message">Пожалуйста, заполните поле</div>}
            <label className="visually-hidden review-form__label review-form__label--required" htmlFor="name">Имя</label>
            <input
              className={`review-form__input ${errorName && 'review-form__input--error'}`}
              type="text"
              id="name"
              name="name"
              placeholder="Имя"
              ref={nameInput}
              onInput={onNameInputInputHandler}
              autoFocus
            />
          </li>
          <li className="review-form__item">
            <label className="visually-hidden" htmlFor="advantage">Достоинства</label>
            <input className="review-form__input" type="text" id="advantage" name="advantage" placeholder="Достоинства" ref={advantageInput}/>
          </li>
          <li className="review-form__item">
            <label className="visually-hidden" htmlFor="disadvantage">Недостатки</label>
            <input className="review-form__input" type="text" id="disadvantage" name="disadvantage" placeholder="Недостатки" ref={disadvantageInput}/>
          </li>
          <li className="review-form__item review-form__item--stars">
            <p className="review-form__rate-name">Оцените товар:</p>
            <div className="review-form__rating" ref={rateChecks}>

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
            {errorComment && <div className="review-form__valid-message">Пожалуйста, заполните поле</div>}
            <label className="visually-hidden review-form__label review-form__label--required review-form__label--text" htmlFor="comment">Комментарий</label>
            <textarea
              className={`review-form__text-area ${errorComment && 'review-form__text-area--error'}`}
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              placeholder="Комментарий"
              ref={commentInput}
              onInput={onCommentInputInputHandler}
            />
          </li>
        </ul>
        <button className="review-form__btn button" onClick={onSubmitBtnClickHandler}>оставить отзыв</button>
      </form>
    </div>
  );
}

ReviewForm.propTypes = {
  popupHandler: PropTypes.func.isRequired,
};

export default ReviewForm;
