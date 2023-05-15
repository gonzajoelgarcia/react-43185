import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = (props) => {
  return (
    <li>
      <NavLink to="/itemDatails" className="dropdown-item">
        {props.texto}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
