import {createSelector} from 'reselect';
import dayjs from 'dayjs';

export const getReviews = (state) => state.reviews;

export const getSortByTimeReviews = createSelector(getReviews, (reviews) =>
  [...reviews].sort((reviewA, reviewB) => dayjs(reviewB.date).unix() - dayjs(reviewA.date).unix()),
);

