import React from "react";

const ItemList = ({ productos }) =>
  productos.map((producto) => (
    <li key={producto.id}>
      <img src={producto.imagen} alt="" />
      <h5>{producto.titulo}</h5>
      <p>{producto.descripcion}</p>
    </li>
  ));

export default ItemList;
