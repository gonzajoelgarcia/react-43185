import React, { useState } from "react";
import "./Formulario.css";
import { firebase } from "../firebaseConfig";

const db = firebase.firestore();

const Formulario = ({
  productosSeleccionados,
  setProductosSeleccionados,
  onVolverAlCarrito,
}) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [confirmado, setConfirmado] = useState(false);
  const [numeroOrden, setNumeroOrden] = useState("");
  const [error, setError] = useState(null);

  const nombreApellidoRegex = /^[a-zA-Z\s]*$/;
  const telefonoRegex = /^\d+$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleConfirmarCompra = async () => {
    if (
      !nombre.match(nombreApellidoRegex) ||
      !apellido.match(nombreApellidoRegex)
    ) {
      setError("El nombre y el apellido solo pueden contener letras.");
      return;
    }

    if (!telefono.match(telefonoRegex)) {
      setError("El teléfono solo puede contener números.");
      return;
    }

    if (!email.match(emailRegex)) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    if (!nombre || !apellido || !telefono || !email) {
      setError("Por favor, completa todos los campos del formulario.");
      return;
    }

    try {
      const docRef = await db.collection("ordenes").add({
        nombre,
        apellido,
        telefono,
        email,
        productos: productosSeleccionados,
      });

      setNumeroOrden(docRef.id);
      setConfirmado(true);
      setProductosSeleccionados([]);
      setError(null);
    } catch (error) {
      console.error("Error al confirmar la compra:", error);
      setError("Error al confirmar la compra. Por favor, intenta nuevamente.");
    }
  };

  return (
    <div className="formulario-container">
      {!confirmado ? (
        <>
          <h2 className="formulario-title">Completa tus datos</h2>
          {error && <p className="formulario-error">{error}</p>}
          <div className="formulario-inputs">
            <div className="formulario-input">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="formulario-input">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className="formulario-input">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="text"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="formulario-input">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleConfirmarCompra} className="formulario-button">
            Confirmar Compra
          </button>
          <button
            onClick={onVolverAlCarrito}
            className="formulario-button-volver"
          >
            Volver al Carrito
          </button>
        </>
      ) : (
        <>
          <h2 className="formulario-title">¡Compra confirmada!</h2>
          <p className="formulario-confirmacion">
            Gracias por tu compra. El número de tu orden es: {numeroOrden}.
          </p>
        </>
      )}
    </div>
  );
};

export default Formulario;
