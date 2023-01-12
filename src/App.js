import React from "react";
import Header from "./components/Header/Header";

import "./App.css";
import Products from "./components/Products/Products";
import CartProvider from "./store/CartProvider";
import { Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="Ecommerce-container">
      <CartProvider>
        <Header />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/store">
          <Products />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
      </CartProvider>
    </div>
  );
}

export default App;
