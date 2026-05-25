import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {

    const savedCart =
      localStorage.getItem("cartItems");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });

  /* SAVE TO LOCAL STORAGE */

  useEffect(() => {

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  /* ADD TO CART */

  const addToCart = (product) => {

    const exist =
      cartItems.find(
        (item) => item._id === product._id
      );

    if (exist) {

      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          qty: 1,
        },
      ]);

    }

  };

  /* REMOVE */

const removeFromCart = (id) => {

  const exist =
    cartItems.find(
      (item) => item._id === id
    );

  if (exist.qty === 1) {

    setCartItems(
      cartItems.filter(
        (item) => item._id !== id
      )
    );

  } else {

    setCartItems(
      cartItems.map((item) =>
        item._id === id
          ? {
              ...item,
              qty: item.qty - 1,
            }
          : item
      )
    );

  }

};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/* CUSTOM HOOK */

export const useCart = () =>
  useContext(CartContext);