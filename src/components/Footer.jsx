import { Link } from "react-router-dom";

import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* NEWSLETTER */}
      <div className="footer-newsletter">

        <div className="container newsletter-container">

          <div className="newsletter-left">

            <span>
              JOIN THE GYMFIT COMMUNITY
            </span>

            <h2>
              Get Exclusive Offers & New Drops
            </h2>

            <p>
              Subscribe to receive updates about
              new collections, fitness trends,
              and exclusive member discounts.
            </p>

          </div>

          <div className="newsletter-right">

            <div className="newsletter-box">

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">

        <div className="container footer-container">

          {/* BRAND */}
          <div className="footer-brand">

            <h1>
              GYMFIT
            </h1>

            <p>
              Premium gym outfits crafted for athletes,
              bodybuilders, and fitness enthusiasts.
              Elevate your performance with style.
            </p>

            {/* SOCIALS */}
            <div className="footer-socials">

              <a href="#">
                Instagram
              </a>

              <a href="#">
                Facebook
              </a>

              <a href="#">
                YouTube
              </a>

            </div>

          </div>

          {/* SHOP */}
          <div className="footer-links">

            <h3>
              Shop
            </h3>

            <Link to="/shop">
              Gym T-Shirts
            </Link>

            <Link to="/shop">
              Lowers
            </Link>

            <Link to="/shop">
              Training Shoes
            </Link>

            <Link to="/shop">
              Accessories
            </Link>

          </div>

          {/* QUICK LINKS */}
          <div className="footer-links">

            <h3>
              Quick Links
            </h3>

            <Link to="/">
              Home
            </Link>

            <Link to="/cart">
              Cart
            </Link>

            <Link to="/orders">
              Orders
            </Link>

            <Link to="/login">
              Login
            </Link>

          </div>

          {/* CONTACT */}
          <div className="footer-links">

            <h3>
              Contact
            </h3>

            <p>
              📍 Haryana, India
            </p>

            <p>
              📞 +91 9876543210
            </p>

            <p>
              ✉ support@gymfit.com
            </p>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <div className="container footer-bottom-container">

          <p>
            © 2026 GYMFIT. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;