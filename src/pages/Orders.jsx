import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/Orders.css";

import tshirt from "/src/assets/Lower.jpg";

function Orders() {

  return (
    <>
      <Navbar />

      <section className="orders-section">

        <div className="container">

          <div className="orders-header">

            <h1>
              My Orders
            </h1>

            <p>
              Track and manage your recent purchases
            </p>

          </div>

          {/* ORDER CARD */}
          <div className="order-card">

            {/* LEFT */}
            <div className="order-left">

              <img
                src={tshirt}
                alt=""
              />

            </div>

            {/* CENTER */}
            <div className="order-center">

              <span>
                ORDER #GF1024
              </span>

              <h2>
                Premium Compression T-Shirt
              </h2>

              <p>
                Ordered on: 20 May 2026
              </p>

              <h3>
                ₹999
              </h3>

            </div>

            {/* RIGHT */}
            <div className="order-right">

              <span className="delivered-status">
                Delivered
              </span>

              <button>
                Track Order
              </button>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Orders;