import { useState } from "react";

import { Link } from "react-router-dom";

import "../css/Navbar.css";

import {
  useCart,
} from "../context/CartContext";

function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const toggleMenu = () => {

    setMenuOpen(!menuOpen);

  };

  /* USER INFO */

  const userInfo =
    JSON.parse(
      localStorage.getItem("userInfo")
    );

    const { cartItems } = useCart();

  return (
    <header className="navbar">

      <div className="container navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="logo"
        >
          GYMFIT
        </Link>

        {/* NAVIGATION */}
        <nav
          className={`nav-menu ${
            menuOpen ? "active" : ""
          }`}
        >

          <ul className="nav-links">

            <li>

              <Link to="/">
                Home
              </Link>

            </li>

            <li>

              <Link to="/shop">
                Shop
              </Link>

            </li>

            <li>

              <Link to="/cart">
                Cart
              </Link>

            </li>

            <li>

              <Link to="/orders">
                Orders
              </Link>

            </li>

            {!userInfo && (

              <li>

                <Link to="/register">
                  Register
                </Link>

              </li>

            )}

            {/* ADMIN */}

            {userInfo?.isAdmin && (

              <li>

                <Link to="/admin">
                  Admin
                </Link>

              </li>

            )}

          </ul>

        </nav>

        {/* RIGHT SIDE */}
        <div className="nav-right">

          {/* CART */}
          <Link
            to="/cart"
            className="cart-btn"
          >

            🛒

{cartItems.length > 0 && (

  <span className="cart-count">
    {cartItems.length}
  </span>

)}

          </Link>

          {/* LOGIN / USER */}

          {userInfo ? (

            <div className="user-section">

              <Link
                to="/orders"
                className="login-btn"
              >
                Hi, {userInfo.name}
              </Link>

              <button
                className="logout-btn"
                onClick={() => {

                  localStorage.removeItem(
                    "userInfo"
                  );

                  window.location.reload();

                }}
              >
                Logout
              </button>

            </div>

          ) : (

            <Link
              to="/login"
              className="login-btn"
            >
              Login
            </Link>

          )}

          {/* MOBILE MENU */}
          <button
            className="menu-btn"
            onClick={toggleMenu}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;