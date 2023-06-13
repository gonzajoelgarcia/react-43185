import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/logo192.png";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import MiLista from "./pages/MiLista";
import Retro from "./pages/Retro";
import Temporada from "./pages/Temporada";
import ItemDetails from "./pages/ItemDetails";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./pages/CartProvider";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div>
      <CartProvider cartItems={cartItems} addToCart={addToCart}>
        <BrowserRouter>
          <Navbar navbarLogo={logo} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MiLista" element={<MiLista />} />
            <Route path="/Retro" element={<Retro />} />
            <Route path="/Temporada" element={<Temporada />} />
            <Route
              path="/category/:id"
              element={
                <ItemListContainer
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/item/:id"
              element={
                <ItemDetails
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  addToCart={addToCart}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
