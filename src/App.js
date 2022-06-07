import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CartStorage } from "./Context/CartContext";

import Header from "./Components/Header";
import Products from "./Components/Products";
import Product from "./Components/Product";
import About from "./Components/About";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <CartStorage>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="login/*" element={<Login />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </div>
      </CartStorage>
    </BrowserRouter>
  );
};

export default App;
