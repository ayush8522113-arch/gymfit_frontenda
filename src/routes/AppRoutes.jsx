import { Routes, Route } from "react-router-dom";

/* Pages */
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import Orders from "../pages/Orders";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* Shop */}
      <Route
        path="/shop"
        element={<Shop />}
      />

      {/* Product */}
<Route
  path="/product"
  element={<Product />}
/>

      {/* Cart */}
      <Route
        path="/cart"
        element={<Cart />}
      />

      {/* Checkout */}
      <Route
        path="/checkout"
        element={<Checkout />}
      />

      {/* Authentication */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Orders */}
      <Route
        path="/orders"
        element={<Orders />}
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={<Admin />}
      />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default AppRoutes;