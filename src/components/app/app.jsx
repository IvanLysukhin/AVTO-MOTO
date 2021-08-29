import React from 'react';
import MainNav from '../main-nav/main-nav';
import Slider from '../slider/slider';
import Specifications from '../specifications/specifications';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';
import ReviewForm from '../review-form/review-form';
import {useSelector} from 'react-redux';
import {getPopupState} from '../../store/selectors';

function App() {
  const isPopupOpen = useSelector(getPopupState);

  return (
    <div className="app">
      <header className="app__header app-header">
        <MainNav/>
      </header>
      <main className="main-container">
        <h1 className="visually-hidden">AVTO MOTO объявления о продаже машин</h1>
        <Slider/>
        <Specifications/>
        <Tabs/>
      </main>
      <Footer/>
      {isPopupOpen && <ReviewForm/>}
    </div>
  );
}

export default App;
