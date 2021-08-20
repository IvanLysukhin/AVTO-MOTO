import React from 'react';
import MainNav from '../main-nav/main-nav';
import Slider from '../slider/slider';
import Specifications from '../specifications/specifications';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';
import ReviewForm from '../review-form/review-form';

function App() {
  return (
    <div className="app">
      <header className="app__header app-header">
        <MainNav/>
      </header>
      <main className="app_main main-container">
        <h1 className="visually-hidden">AVTO MOTO объявления о продаже машин</h1>
        <Slider/>
        <Specifications/>
        <Tabs/>
      </main>
      <Footer/>
      {/*<ReviewForm/>*/}
    </div>
  );
}

export default App;
