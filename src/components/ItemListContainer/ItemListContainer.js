import React from "react";
import { getProducts } from "../data/Productos";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProducts().then((products) => {
      if (id) {
        const filteredProducts = products.filter(
          (product) => product.category === id
        );
        setProductos(filteredProducts);
      } else {
        setProductos(products);
      }
    });
  }, [id]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
