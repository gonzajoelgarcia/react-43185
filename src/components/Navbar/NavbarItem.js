import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const NavbarItem = (props) => {
  return (
    <li>
      <NavLink to="/ItemDetails" className="dropdown-item">
        {props.texto}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
