import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { items } from "../components/data/Productos";

const ItemDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [producto, setProducto] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const filter = items.find((item) => item.id === id);
      setProducto(filter);
      setLoading(false);
    }, 1000);
  }, [id]);

  return (
    <Fragment>
      {loading ? (
        <h1>Cargando producto...</h1>
      ) : (
        <div>
          {producto ? (
            <items
              key={producto.id}
              imagen={producto.imagen}
              titulo={producto.titulo}
              descripcion={producto.descripcion}
            />
          ) : (
            <h1>Producto no encontrado</h1>
          )}
          <button
            onClick={() => navigate(-1)}
            className="btn btn-primary"
            style={{
              borderRadius: "5px",
              padding: "10px 20px",
              marginTop: "10px",
            }}
          >
            VOLVER ATRÁS
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default ItemDetails;
