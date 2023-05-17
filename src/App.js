import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nosotros from "./pages/Nosotros";
import ItemDetails from "./pages/ItemDetails";
import logo from "./assets/logo192.png";

function App() {
  return (
    <BrowserRouter>
      <Navbar navbarLogo={logo} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/categorias/categoryId" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
