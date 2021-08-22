import {REVIEWS} from './constants';
import dayjs from 'dayjs';
import relativeTime  from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const calcRate = (rate) => `${(rate / 5) * 100}%`;

export const saveReviewsData = (reviewsData) => {
  const prevReviews = JSON.parse(localStorage.getItem(REVIEWS));

  if (!prevReviews) {
    localStorage.setItem('reviews', JSON.stringify([reviewsData]));
    return;
  }
  localStorage.setItem('reviews', JSON.stringify([...prevReviews, reviewsData]));
};


export const formatTime = (dateISO) => {
  const string = dayjs(dateISO).fromNow();
  const stringArr = string.split(' ');

  if (string.match(/second/gm)) {
    return 'Несколько секунд назад';
  }

  if (string.match(/minute/gm)) {
    if (stringArr[0] >= 5) {
      return `${stringArr[0]} минут назад`;
    }

    if (stringArr[0] < 5) {
      return `${stringArr[0]} минуты назад`;
    }

    return '1 минуту назад';
  }

  if (string.match(/hour/gm)) {

    if (stringArr[0] >= 5) {
      return `${stringArr[0]} часов назад`;
    }

    if (stringArr[0] < 5) {
      return `${stringArr[0]} часа назад`;
    }

    return '1 час назад';
  }

  return dayjs(dateISO).format('DD.MM.YYYY');
};
