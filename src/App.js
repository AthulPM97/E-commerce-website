import React, { lazy, Suspense, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import CartProvider from "./store/CartProvider";
import ProductDetail from "./components/Products/ProductDetail";
import AuthContext from "./store/auth-context";

const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Home = lazy(() => import("./Pages/Home"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const AuthPage = lazy(() => import("./Pages/AuthPage"));

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="Ecommerce-container">
      <CartProvider>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Suspense fallback={<p>Loading...</p>}>
              <Home />
            </Suspense>
          </Route>
          <Route path="/store" exact>
            {authCtx.isLoggedin && <Products />}
            {!authCtx.isLoggedin && <Redirect to="/login" />}
          </Route>
          <Route path="/store/:productId">
            {authCtx.isLoggedin && <ProductDetail />}
            {!authCtx.isLoggedin && <Redirect to="/login" />}
          </Route>
          <Route path="/about">
            <Suspense fallback={<p>Loading...</p>}>
              <AboutUs />
            </Suspense>
          </Route>
          {!authCtx.isLoggedin && (
            <Route path="/login">
              <Suspense fallback={<p>Loading...</p>}>
              <AuthPage />
            </Suspense>
            </Route>
          )}
          <Route path="/contact-us">
            <Suspense fallback={<p>Loading...</p>}>
              <ContactUs />
            </Suspense>
          </Route>
        </Switch>
      </CartProvider>
    </div>
  );
}

export default App;
