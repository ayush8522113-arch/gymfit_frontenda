import { Link } from "react-router-dom";

import "../css/Hero.css";

function Hero() {

  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            PREMIUM FITNESS WEAR
          </span>

          <h1>
            TRAIN HARD.
            <br />
            LOOK POWERFUL.
          </h1>

          <p>
            Premium gym outfits designed for athletes,
            fitness lovers, and modern aesthetics.
          </p>

          <div className="hero-buttons">

            <Link
              to="/shop"
              className="btn"
            >
              Shop Now
            </Link>

            <Link
              to="/shop"
              className="hero-outline-btn"
            >
              Explore Collection
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;