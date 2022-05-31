import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Products from "./Components/Products";
import Product from "./Components/Product";
import About from "./Components/About";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
