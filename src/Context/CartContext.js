import React from "react";

export const CartContext = React.createContext({
  add: () => {},
  remove: () => {}
});

export const CartStorage = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(() => cart.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cart, add: addToCart, remove: removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
