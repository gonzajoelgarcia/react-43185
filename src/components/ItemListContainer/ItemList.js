import React from "react";

const ItemList = ({ productos }) =>
  productos.map((producto) => (
    <li key={producto.id}>
      <img src={producto.imagen} alt="" />
      <h3>{producto.titulo}</h3>
      <p>{producto.descripcion}</p>
    </li>
  ));

export default ItemList;
