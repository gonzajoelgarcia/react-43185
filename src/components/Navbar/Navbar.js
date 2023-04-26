import React from "react";
import NavbarItem from "./NavbarItem";
import CardWidget from "../CardWidget/CardWidget";
import "./Navbar.css";

const items = ["Fútbol Argentino", "Temporada 22/23", "Retro"];

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="!#">
          {props.navbarLogo}
        </a>
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="!#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                Nosotros
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Camisetas
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {items.map((texto) => (
                  <NavbarItem key={texto} texto={texto} />
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
                2
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
