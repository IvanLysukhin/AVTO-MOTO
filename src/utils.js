import {REVIEWS} from './constants';

export const calcRate = (rate) => `${(rate / 5) * 100}%`;

export const saveReviewsData = (reviewsData) => {
  const prevReviews = JSON.parse(localStorage.getItem(REVIEWS));

  if (!prevReviews) {
    localStorage.setItem('reviews', JSON.stringify([reviewsData]));
    return;
  }
  localStorage.setItem('reviews', JSON.stringify([...prevReviews, reviewsData]));
};
