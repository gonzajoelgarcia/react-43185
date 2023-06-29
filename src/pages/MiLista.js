import React, { useContext, useState } from "react";
import { CartContext } from "./CartProvider";
import Formulario from "./Formulario";
import "./MiLista.css";
import { Link } from "react-router-dom";

const MiLista = () => {
  const { cartItems } = useContext(CartContext);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleMostrarFormulario = () => {
    setMostrarFormulario(true);
  };

  const handleCambiarCantidad = (item, cantidad) => {
    const productoIndex = productosSeleccionados.findIndex(
      (producto) => producto.id === item.id
    );

    if (productoIndex !== -1) {
      const productosActualizados = [...productosSeleccionados];
      productosActualizados[productoIndex].cantidad += cantidad;
      if (productosActualizados[productoIndex].cantidad < 0) {
        productosActualizados[productoIndex].cantidad = 0;
      }
      setProductosSeleccionados(productosActualizados);
      actualizarPrecioTotal(productosActualizados);
    } else {
      const productoSeleccionado = {
        id: item.id,
        precio: parseInt(item.descripcion.replace("$", "")),
        cantidad: 1,
      };

      setProductosSeleccionados([
        ...productosSeleccionados,
        productoSeleccionado,
      ]);
      actualizarPrecioTotal([...productosSeleccionados, productoSeleccionado]);
    }
  };

  const actualizarPrecioTotal = (productos) => {
    const total = productos.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
    setTotalPrice(total);
  };

  return (
    <div className="mi-lista-container">
      <h1 className="mi-lista-title">Mi Lista de Compra</h1>
      {cartItems.length === 0 ? (
        <p className="mi-lista-message">No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="mi-lista-items">
            {cartItems.map((item) => {
              const productoSeleccionado = productosSeleccionados.find(
                (producto) => producto.id === item.id
              );

              return (
                <li key={item.id} className="mi-lista-item">
                  <div className="mi-lista-product">
                    <img
                      src={item.imagen}
                      alt="imagen-de-producto"
                      className="mi-lista-product-image"
                    />
                    <div className="mi-lista-product-details">
                      <p className="mi-lista-product-title">{item.titulo}</p>
                      <p className="mi-lista-product-price">
                        {item.descripcion}
                      </p>
                      <p className="mi-lista-product-id">El id: {item.id}</p>
                      <div className="mi-lista-quantity">
                        <button
                          onClick={() => handleCambiarCantidad(item, -1)}
                          className="mi-lista-quantity-button"
                        >
                          -
                        </button>
                        <span className="mi-lista-quantity-value">
                          {productoSeleccionado
                            ? productoSeleccionado.cantidad
                            : 0}
                        </span>
                        <button
                          onClick={() => handleCambiarCantidad(item, 1)}
                          className="mi-lista-quantity-button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mi-lista-total">Precio Total: ${totalPrice}</p>
          {!mostrarFormulario && (
            <>
              <button
                onClick={handleMostrarFormulario}
                className="mi-lista-button"
              >
                Realizar Compra
              </button>
              <Link to="/" className="mi-lista-button-add">
                Agregar Productos
              </Link>
            </>
          )}
          {mostrarFormulario && (
            <Formulario
              productosSeleccionados={productosSeleccionados}
              setProductosSeleccionados={setProductosSeleccionados}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MiLista;
