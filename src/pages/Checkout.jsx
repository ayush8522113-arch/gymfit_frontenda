import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout() {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">

          <h1 className="title">
            Checkout
          </h1>

          <form className="checkout-form">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="text"
              placeholder="Phone Number"
            />

            <textarea
              placeholder="Delivery Address"
            ></textarea>

            <button className="btn">
              Place Order
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Checkout;