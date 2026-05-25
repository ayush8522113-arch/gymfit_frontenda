import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/Cart.css";

import {
  useCart,
} from "../context/CartContext";

import {
  createOrder,
} from "../services/paymentService";

function Cart() {

  const {
    cartItems,
    removeFromCart,
  } = useCart();

  const totalPrice =
    cartItems.reduce(
      (acc, item) =>
        acc + item.price * item.qty,
      0
    );

    const handlePayment =
  async () => {

    try {

      const order =
        await createOrder(
          totalPrice
        );

      const options = {

        key:
          process.env.RKEY,

        amount:
          order.amount,

        currency:
          order.currency,

        name:
          "GYMFIT",

        description:
          "Gym Outfit Purchase",

        order_id:
          order.id,

        handler:
          function (response) {

            alert(
              "Payment Successful"
            );

            console.log(response);

          },

        theme: {
          color: "#ff3c00",
        },

      };

      const razor =
        new window.Razorpay(
          options
        );

      razor.open();

    } catch (error) {

      console.log(error);

    }

};

  return (
    <>
      <Navbar />

      <section className="cart-section">

        <div className="container">

          <div className="cart-header">

            <h1>
              Your Cart
            </h1>

            <p>
              Review your selected products
            </p>

          </div>

          <div className="cart-container">

            {/* ITEMS */}
            <div className="cart-items">

              {cartItems.length === 0 ? (

                <h2>
                  Cart is Empty
                </h2>

              ) : (

                cartItems.map((item) => (

                  <div
                    className="cart-item"
                    key={item._id}
                  >

                    <div className="cart-image">

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                    </div>

                    <div className="cart-info">

                      <span className="cart-category">
                        {item.category}
                      </span>

                      <h2>
                        {item.name}
                      </h2>

                      <h3>
                        ₹{item.price}
                      </h3>

                      <p>
                        Quantity:
                        {" "}
                        {item.qty}
                      </p>

                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromCart(
                          item._id
                        )
                      }
                    >
                      ✕
                    </button>

                  </div>

                ))

              )}

            </div>

            {/* SUMMARY */}
            <div className="cart-summary">

              <h2>
                Order Summary
              </h2>

              <div className="summary-total">

                <span>Total</span>

                <span>
                  ₹{totalPrice}
                </span>

              </div>

<button
  className="checkout-btn"
  onClick={handlePayment}
>
  Make Payment
</button>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Cart;