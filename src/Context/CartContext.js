import React from "react";

export const CartContext = React.createContext();

export const CartStorage = ({ children }) => {
  const [cart, setCart] = React.useState("");

  const addToCart = React.useCallback(
    (item) => {
      setCart([...cart, item]);
    },
    [cart]
  );

  return (
    <CartContext.Provider value={(cart, addToCart)}>
      {children}
    </CartContext.Provider>
  );
};
