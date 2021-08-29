import React, {useEffect, useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import {addReview, openPopup} from '../../store/actions';
import {saveReviewsData} from '../../utils';
import {InputName} from '../../constants';

function ReviewForm() {
  const dispatch = useDispatch();
  const firstInput = useRef();
  const textInput = useRef();
  const form = useRef();

  const [filedError, setFieldError] = useState({
    [InputName.NAME]: false,
    [InputName.COMMENT]: false,
  });

  const closeBtnClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(openPopup(false));
  };

  const overlayClickHandler = ({target}) => {
    if (target.classList.contains('review-form')) {
      dispatch(openPopup(false));
    }
  };

  const requireInputChangeHandler = ({target}) => {
    if (target.value.length > 0) {
      setFieldError((prevState) => ({...prevState, [target.name]: false}));
    }
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const data = new FormData(form.current);

    const name = data.get(InputName.NAME);
    const comment = data.get(InputName.COMMENT);
    const rate = Number(data.get(InputName.RATE)) || undefined;
    const advantage = data.get(InputName.ADVANTAGES);
    const disadvantage = data.get(InputName.DISADVANTAGES);
    const date = new Date().toISOString();

    if (!name) {
      setFieldError((prevState) => ({...prevState, [InputName.NAME]: true}));
      return;
    }

    if (!comment) {
      setFieldError((prevState) => ({...prevState, [InputName.COMMENT]: true}));
      return;
    }

    if (rate) {
      const formData = {
        id : nanoid(3),
        name,
        comment,
        rate,
        advantage,
        disadvantage,
        date,
      };

      dispatch(addReview(formData));
      saveReviewsData(formData);
      dispatch(openPopup(false));
    }
  };

  const keydownHandler = (evt) => {
    if (evt.keyCode === 27) {
      dispatch(openPopup(false));
    }

    if (evt.keyCode === 13) {
      formSubmitHandler(evt);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);
    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  });
  const disableArrows = (evt) => {
    if (evt.keyCode === 37 || evt.keyCode === 39) {
      evt.preventDefault();
    }
    if (evt.keyCode === 13) {
      evt.preventDefault();
      document.activeElement.checked = true;
      textInput.current.focus();
    }
  };

  const checkListFocusHandler = () => {
    window.addEventListener('keydown', disableArrows);
  };

  const checkListBlurHandler = () => {
    window.removeEventListener('keydown', disableArrows);
  };

  return (
    <div className="review-form" onClick={overlayClickHandler}>
      <h3 className="visually-hidden">Форма отправки отзыва</h3>

      <form className="review-form__container" action="#" method="POST" ref={form} onSubmit={formSubmitHandler}>
        <button className="review-form__close-btn" onClick={closeBtnClickHandler} tabIndex="11">
          Закрыть
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6399 15.0096L7.50482 8.86495L1.36977 15.0096L0 13.6399L6.14469 7.50482L0 1.36978L1.36977 0L7.50482 6.14469L13.6399 0.00964652L15 1.36978L8.86495 7.50482L15 13.6399L13.6399 15.0096Z" fill="#9F9E9E"/>
          </svg>
        </button>
        <h4 className="review-form__title">Оставить отзыв</h4>
        <ul className="review-form__list">
          <li className="review-form__item">
            {filedError[InputName.NAME] && <div className="review-form__valid-message">Пожалуйста, заполните поле</div>}
            <label className="visually-hidden review-form__label review-form__label--required" htmlFor={InputName.NAME}>Имя</label>
            <input
              className={`review-form__input ${filedError[InputName.NAME] && 'review-form__input--error'}`}
              type="text"
              id={InputName.NAME}
              name={InputName.NAME}
              placeholder="Имя"
              onChange={requireInputChangeHandler}
              autoFocus
              ref={firstInput}
              tabIndex="1"
            />
          </li>
          <li className="review-form__item">
            <label className="visually-hidden" htmlFor={InputName.ADVANTAGES}>Достоинства</label>
            <input className="review-form__input" type="text" id={InputName.ADVANTAGES} name={InputName.ADVANTAGES} placeholder="Достоинства" tabIndex="2"/>
          </li>
          <li className="review-form__item">
            <label className="visually-hidden" htmlFor={InputName.DISADVANTAGES}>Недостатки</label>
            <input className="review-form__input" type="text" id={InputName.DISADVANTAGES} name={InputName.DISADVANTAGES} placeholder="Недостатки" tabIndex="3"/>
          </li>
          <li className="review-form__item review-form__item--stars">
            <p className="review-form__rate-name">Оцените товар:</p>
            <div className="review-form__rating" onFocus={checkListFocusHandler} onBlur={checkListBlurHandler}>
              <input className="review-form__rating-input visually-hidden" name={InputName.RATE} value="5" id="5-stars" type="radio" tabIndex="8" />
              <label htmlFor="5-stars" className="review-form__rating-label review-form__rating-label" title="perfect" >
                <svg className="review-form__star-image" id="icon-star" width="27" height="27" viewBox="0 0 27 27" fill="#BDBEC2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"/>
                </svg>
              </label>

              <input className="review-form__rating-input visually-hidden" name={InputName.RATE} value="4" id="4-stars" type="radio" tabIndex="7"/>
              <label htmlFor="4-stars" className="review-form__rating-label review-form__rating-label" title="good" >
                <svg className="review-form__star-image" id="icon-star" width="27" height="27" viewBox="0 0 27 27" fill="#BDBEC2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"/>
                </svg>
              </label>

              <input className="review-form__rating-input visually-hidden" name={InputName.RATE} value="3" id="3-stars" type="radio" tabIndex="6"/>
              <label htmlFor="3-stars" className="review-form__rating-label review-form__rating-label" title="not bad" >
                <svg className="review-form__star-image" id="icon-star" width="27" height="27" viewBox="0 0 27 27" fill="#BDBEC2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"/>
                </svg>
              </label>

              <input className="review-form__rating-input visually-hidden" name={InputName.RATE} value="2" id="2-stars" type="radio" tabIndex="5"/>
              <label htmlFor="2-stars" className="review-form__rating-label review-form__rating-label" title="badly" >
                <svg className="review-form__star-image" id="icon-star" width="27" height="27" viewBox="0 0 27 27" fill="#BDBEC2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"/>
                </svg>
              </label>

              <input className="review-form__rating-input visually-hidden" name={InputName.RATE} value="1" id="1-stars" type="radio" tabIndex="4"/>
              <label htmlFor="1-stars" className="review-form__rating-label review-form__rating-label" title="terribly" >
                <svg className="review-form__star-image" id="icon-star" width="27" height="27" viewBox="0 0 27 27" fill="#BDBEC2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"/>
                </svg>
              </label>
            </div>
          </li>
          <li className="review-form__item">
            {filedError[InputName.COMMENT] && <div className="review-form__valid-message">Пожалуйста, заполните поле</div>}
            <label className="visually-hidden review-form__label review-form__label--required review-form__label--text" htmlFor={InputName.COMMENT}>Комментарий</label>
            <textarea
              className={`review-form__text-area ${filedError[InputName.COMMENT] && 'review-form__text-area--error'}`}
              name={InputName.COMMENT}
              id={InputName.COMMENT}
              cols="30"
              rows="10"
              placeholder="Комментарий"
              onChange={requireInputChangeHandler}
              tabIndex="9"
              ref={textInput}
            />
          </li>
        </ul>
        <button className="review-form__btn button" tabIndex="10">
          оставить отзыв
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
