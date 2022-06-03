import React from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = React.useContext(CartContext);
  const removeItem = React.useContext(CartContext).remove;

  function reducer(state, action) {
    switch (action.type) {
      case "REMOVE_ITEM":
        removeItem(action.id);
        break;

      default:
        break;
    }
  }

  const [state, dispatch] = React.useReducer(reducer, cart);

  return (
    <section className={`${styles.cart} animeUp`}>
      <h1>
        My <span>Cart</span>
      </h1>
      <ul>
        {cart &&
          cart.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/product/${id}`}>{title}</Link>
              <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: id })}>
                X
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Cart;
