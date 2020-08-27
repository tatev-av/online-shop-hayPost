import React from 'react';
import Cart from './containers/cart';
import Shop from './containers/shop';
import './App.css';

function App() {
  return (
    <div className = 'container'>
      <p> 
        <span className = 'home'>Home </span> 
        <span> &raquo; Shopping for the annual sailing trip  </span>
      </p> 
      <div className = 'components-container'>
        <Shop/>
        <Cart/>
      </div>
     </div>
  );
}

export default App;
