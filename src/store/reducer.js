import {createReducer} from '@reduxjs/toolkit';
import {addReview} from './actions';

const initialState = {
  reviews: [],
};

export const reviewsData = createReducer(initialState, (builder) => {
  builder
    .addCase(addReview,(state, action) => {
      state.reviews = [...state.reviews, action.payload];
    });
});

