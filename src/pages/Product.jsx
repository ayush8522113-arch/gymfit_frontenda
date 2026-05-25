import { useLocation }
  from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/Product.css";

import {
  useCart,
} from "../context/CartContext";

function Product() {

  const location = useLocation();

  const product =
    location.state?.product;

  const { addToCart } = useCart();

  /* SAFETY */

  if (!product) {

    return (
      <h1 className="loading">
        Product Not Found
      </h1>
    );

  }

  return (
    <>
      <Navbar />

      <section className="product-section">

        <div className="container product-container">

          {/* LEFT */}
          <div className="product-gallery">

            <div className="main-image">

              <img
                src={product.image}
                alt={product.name}
              />

            </div>

          </div>

          {/* RIGHT */}
          <div className="product-details">

            <span className="product-brand">
              GYMFIT COLLECTION
            </span>

            <h1>
              {product.name}
            </h1>

            <div className="product-rating">

              ⭐⭐⭐⭐⭐

              <span>
                (142 Reviews)
              </span>

            </div>

            <h2 className="product-price">
              ₹{product.price}
            </h2>

            <p className="product-description">
              {product.description}
            </p>

            {/* SIZES */}
            <div className="product-option">

              <h4>Select Size</h4>

              <div className="size-buttons">

                {product.sizes?.map(
                  (size, index) => (

                    <button key={index}>
                      {size}
                    </button>

                  )
                )}

              </div>

            </div>

            {/* BUTTONS */}
            <div className="product-actions">

              <button
                className="add-cart-btn"
                onClick={() =>
                  addToCart(product)
                }
              >
                Add To Cart
              </button>

              <button className="buy-btn">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Product;