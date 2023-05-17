import React from "react";
import Item from "../Items/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="card-container">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          imagen={producto.imagen}
          titulo={producto.titulo}
          descripcion={producto.descripcion}
        />
      ))}
    </div>
  );
};

export default ItemList;
