import React from "react";
import { CartContext } from "../Context/CartContext";
import styles from "./AddToCartButton.module.css";

const AddToCartButton = ({ children, data, classButton }) => {
  const add = React.useContext(CartContext).add;

  function handleClick() {
    add(data);
  }

  return (
    <button onClick={handleClick} className={styles[classButton]}>
      {children}
    </button>
  );
};

export default AddToCartButton;
