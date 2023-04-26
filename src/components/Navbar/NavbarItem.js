import React from "react";

const NavbarItem = (props) => {
  return (
    <li>
      <a className="dropdown-item" href="!#">
        {props.texto}
      </a>
    </li>
  );
};

export default NavbarItem;
