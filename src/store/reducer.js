import {createReducer} from '@reduxjs/toolkit';
import {addReview, loadReviews, openPopup} from './actions';

const initialState = {
  reviews: [],
  isPopupOpen: false,
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
    })
    .addCase(openPopup,(state, action) => {
      state.isPopupOpen = action.payload;
    });
});

