import { useState } from 'react';
import { BadgesList } from './Components/Badges/BadgesList';
import { BannersList } from './Components/Banners/BannersList';
import { CardsList } from './Components/Cards/CardsList';
import { TestimonialsList } from './Components/Testimonials/TestimonialsList';
import { TooltipsList } from './Components/Tooltips/TooltipsList';
import { ToastsList } from './Components/Toasts/ToastsList';

export const App = () => {
  const [visible, setVisible] = useState(<BadgesList />)

  const handleBtnClick = (e) => {
    const visibleEl = e.target.innerText;

    switch (visibleEl) {
      case "Banners": setVisible(<BannersList />); break;
      case "Cards": setVisible(<CardsList />); break;
      case "Testimonials": setVisible(<TestimonialsList />); break;
      case "Tooltips": setVisible(<TooltipsList />); break;
      case "Toasts": setVisible(<ToastsList />); break;
      default: setVisible(<BadgesList />);
    }
  }

  return (
    <div className="App">
      <h1 className="App__title">
        <img className="App__title-img" src="assets/cube.png" alt="cube" />
        Component Library
      </h1>
      <h3 className="App__instruction">Welcome to the React Component Library Demo Page. <br />Select the component from the menu below 👇🏻</h3>
      <div className="App__buttons">
        <button className="App__button" onClick={handleBtnClick}>Badges</button>
        <button className="App__button" onClick={handleBtnClick}>Banners</button>
        <button className="App__button" onClick={handleBtnClick}>Cards</button>
        <button className="App__button" onClick={handleBtnClick}>Testimonials</button>
        <button className="App__button" onClick={handleBtnClick}>Tooltips</button>
        <button className="App__button" onClick={handleBtnClick}>Toasts</button>
      </div>
      {visible}
    </div>
  );
}


