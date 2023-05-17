import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const NavbarItem = (props) => {
  return (
    <li key={props.texto}>
      <NavLink to={props.to} className="dropdown-item">
        {props.texto}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
