import React from "react";
import Header from "./components/Header/Header";

import "./App.css";
import Products from "./components/Products/Products";
import CartProvider from "./store/CartProvider";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import ProductDetail from "./components/Products/ProductDetail";
import AuthPage from "./Pages/AuthPage";

function App() {
  return (
    <div className="Ecommerce-container">
      <CartProvider>
        <Header />
        <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/store" exact>
          <Products />
        </Route>
        <Route path="/store/:productId">
          <ProductDetail/>
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/login">
          <AuthPage />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        </Switch>
      </CartProvider>
    </div>
  );
}

export default App;
