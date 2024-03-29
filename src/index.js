import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// react bootstrap configuration
import "../node_modules/react-bootstrap/dist/react-bootstrap.min";
import "bootstrap/dist/css/bootstrap.css";

import { AuthProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
