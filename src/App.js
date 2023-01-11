import React from "react";
import Header from "./components/Header/Header";

import "./App.css";
import Products from "./components/Products/Products";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <div className="Ecommerce-container">
      <CartProvider>
        <Header />
        <Products />
      </CartProvider>
    </div>
  );
}

export default App;
