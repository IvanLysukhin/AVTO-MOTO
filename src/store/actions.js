import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../constants';

export const addReview = createAction(ActionType.ADD_REVIEW, (review) => ({
  payload: review,
}));
