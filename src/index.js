import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.sass';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {reviewsData} from './store/reducer';

const store = configureStore({
  reducer: reviewsData,
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
