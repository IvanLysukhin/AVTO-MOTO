import React, {useState} from 'react';
import MainNav from '../main-nav/main-nav';
import Slider from '../slider/slider';
import Specifications from '../specifications/specifications';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';
import ReviewForm from '../review-form/review-form';

function App() {
  const [reviewFromState, setReviewFrom] = useState(false);
  const changeReviewFormState = (boolean) => {
    setReviewFrom(boolean);
  };

  return (
    <div className="app">
      <header className="app__header app-header">
        <MainNav/>
      </header>
      <main className="main-container">
        <h1 className="visually-hidden">AVTO MOTO объявления о продаже машин</h1>
        <Slider/>
        <Specifications/>
        <Tabs popupHandler={changeReviewFormState}/>
      </main>
      <Footer/>
      {reviewFromState && <ReviewForm popupHandler={changeReviewFormState}/>}
    </div>
  );
}

export default App;
