import {createReducer} from '@reduxjs/toolkit';
import {addReview, loadReviews} from './actions';

const initialState = {
  reviews: [],
};

export const reviewsData = createReducer(initialState, (builder) => {
  builder
    .addCase(addReview,(state, action) => {
      state.reviews = [...state.reviews, action.payload];
    })
    .addCase(loadReviews,(state, action) => {
      if (!action.payload) {
        state.reviews = [];
        return;
      }
      state.reviews = action.payload;
    });
});

