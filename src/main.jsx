import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import {
  AuthProvider,
} from "./context/authContext";

import {
  CartProvider,
} from "./context/CartContext";

import "./css/global.css";
import "./css/variables.css";
import "./css/responsive.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <AuthProvider>

      <CartProvider>

        <App />

      </CartProvider>

    </AuthProvider>

  </React.StrictMode>

);



