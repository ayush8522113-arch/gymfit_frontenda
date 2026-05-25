import { Link } from "react-router-dom";

import "../css/ProductCard.css";

import {
  useCart,
} from "../context/CartContext";

function ProductCard({ product }) {

  const {
    cartItems,
    addToCart,
    removeFromCart,
  } = useCart();

  /* CHECK IF PRODUCT EXISTS */

  const cartItem = cartItems.find(
    (item) => item._id === product._id
  );

  return (
    <div className="product-card">

      {/* IMAGE */}
      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      {/* INFO */}
      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h3>
          {product.name}
        </h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">

          <span className="price">
            ₹{product.price}
          </span>

        </div>

        {/* ACTIONS */}
        <div className="product-actions">

          {/* VIEW DETAILS */}
          <Link
            to="/product"
            state={{ product }}
            className="view-details-btn"
          >
            View Details
          </Link>

          {/* ADD / QUANTITY */}
          {!cartItem ? (

            <button
              className="add-btn"
              onClick={() =>
                addToCart(product)
              }
            >
              Add To Cart
            </button>

          ) : (

            <div className="quantity-controls">

              <button
                onClick={() =>
                  removeFromCart(product._id)
                }
              >
                −
              </button>

              <span>
                {cartItem.qty}
              </span>

              <button
                onClick={() =>
                  addToCart(product)
                }
              >
                +
              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default ProductCard;