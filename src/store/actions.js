import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../constants';

export const loadReviews = createAction(ActionType.LOAD_REVIEW, (reviews) => ({
  payload: reviews,
}));

export const addReview = createAction(ActionType.ADD_REVIEW, (review) => ({
  payload: review,
}));

export const openPopup = createAction(ActionType.OPEN_POPUP, (status) => ({
  payload: status,
}));
