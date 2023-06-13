import React, { useContext } from "react";
import NavbarItem from "./NavbarItem";
import CardWidget from "../CardWidget/CardWidget";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "../../pages/CartProvider";

const items = [
  { texto: "Retro", to: "/Retro" },
  { texto: "Temporada 22/23", to: "Temporada" },
];

const Navbar = (props) => {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbarLogo" href="/" alt="Logo">
          <img className="navbarLogo" src={props.navbarLogo} alt="Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"></li>
            <li className="nav-item">
              <NavLink to="/MiLista" className="nav-link">
                Mi Lista
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/ItemDetails"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Camisetas
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {items.map((item, index) => (
                  <NavbarItem key={index} texto={item.texto} to={item.to} />
                ))}
              </ul>
            </li>
            <li className="nav-item"></li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="Buscar"
              placeholder="Buscar"
              aria-label="Buscar"
            ></input>
            <button className="btn btn-outline-light" type="submit">
              <CardWidget />
              <span className="cart-count" id="cart-count">
                {cartItems.length}
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
