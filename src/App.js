import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Nosotros from "./pages/Nosotros";
import ItemDatails from "./pages/ItemDatails";
import logo from "./assets/logo192.png";
import background from "./assets/background.jpg";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar navbarLogo={logo} />
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        {" "}
      </div>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/item/:id" element={<ItemDatails />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/categorias/categoryId" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
