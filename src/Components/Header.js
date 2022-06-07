import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { CartContext } from "../Context/CartContext";

const Header = () => {
  const { cart } = React.useContext(CartContext);

  // Cart {cart.length}

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <NavLink to="/" end className={styles.logo}>
          <span>place</span>Products
        </NavLink>
        <nav className={styles.menu}>
          <ul>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
