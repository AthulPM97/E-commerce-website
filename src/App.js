import React from 'react';
import Header from './components/Header/Header';
import {Button} from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="Ecommerce-container">
      <Header />
      <Button variant='primary'>Primary</Button>
    </div>
  );
}

export default App;
