import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.sass';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {reviewsData} from './store/reducer';
import {loadReviews} from './store/actions';
import {REVIEWS} from './constants';

const store = configureStore({
  reducer: reviewsData,
});

store.dispatch(loadReviews(JSON.parse(localStorage.getItem(REVIEWS))));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
