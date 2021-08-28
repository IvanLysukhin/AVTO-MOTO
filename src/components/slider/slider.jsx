import React, {useState} from 'react';

function Slider() {

  const [slide, setSlide] = useState(1);

  const onNextButtonClick = () => {
    setSlide((prevSlide) => prevSlide + 1);
  };

  const onBackButtonClick = () => {
    setSlide((prevSlide) => prevSlide - 1);
  };

  const getCurrentSlideClass = (number) => {
    switch (number) {
      case 1:
        return 'slider__slide--first';
      case 2:
        return 'slider__slide--second';
      case 3:
        return 'slider__slide--third';
      default:
        return 'slider__slide--first';
    }
  };

  return (
    <section className="slider">
      <h2 className="visually-hidden">Слайдер</h2>
      <div className="slider__pics-box">
        <div className={`slider__slide ${getCurrentSlideClass(slide)}`}>
          <img className="slider__pic slider__pic--first" src="img/black-1-min.jpg" width="600" height="375" alt="Марпех 11 Общий вид авто"/>
        </div>
        <div className="slider__slide">
          <img className="slider__pic slider__pic--second" src="img/desktop_slide_2.jpg" width="600" height="375" alt="Марпех 11 Салон"/>
        </div>
        <div className="slider__slide">
          <img className="slider__pic slider__pic--third" src="img/desktop_slide_3.jpg" width="600" height="375" alt="Марпех 11 Приборная панель"/>
        </div>
      </div>
      <div className="slider__controls">
        <button
          className={`slider__control-btn slider__control-btn--back ${slide === 1 ? 'slider__control-btn--disabled': ''}`}
          disabled={slide === 1}
          onClick={onBackButtonClick}
          aria-label={'Предыдущий слайд'}
        >
          <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00427 6.17188L6.91841 0.368597M1.00427 6.17188L6.69294 11.9692M1.00427 6.17188L19.9813 6.35128" stroke="#48494D"/>
          </svg>
        </button>
        <ul className="slider__minis-list">
          <li className="slider__minis-item">
            <img className="slider__mini" src="img/black-1-min.jpg" width="128" height="80" alt="Миниатюра"/>
          </li>
          <li className="slider__minis-item">
            <img className="slider__mini" src="img/desktop_slide_2.jpg" width="128" height="80" alt=""/>
          </li>
          <li className="slider__minis-item">
            <img className="slider__mini" src="img/desktop_slide_3.jpg" width="128" height="80" alt=""/>
          </li>
        </ul>
        <button
          className={`slider__control-btn slider__control-btn--next ${slide === 3 ? 'slider__control-btn--disabled' : ''}`}
          onClick={onNextButtonClick}
          disabled={slide === 3}
          aria-label={'Следующий слайд'}
        >
          <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128" stroke="#48494D"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Slider;
