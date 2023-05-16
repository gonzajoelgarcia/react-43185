import React from "react";
import { getProducts } from "../data/Productos";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProducts().then((products) => {
      setProductos(products);
    });
  }, []);
  return <ItemList productos={productos} />;
};

export default ItemListContainer;
