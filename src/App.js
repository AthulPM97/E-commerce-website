import React from 'react';
import Header from './components/Header/Header';

import './App.css';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="Ecommerce-container">
      <Header />
      <Products />
    </div>
  );
}

export default App;
