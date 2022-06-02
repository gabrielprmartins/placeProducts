import React from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <section className={`${styles.cart} animeUp`}>
      <h1>
        My <span>Cart</span>
      </h1>
    </section>
  );
};

export default Cart;
