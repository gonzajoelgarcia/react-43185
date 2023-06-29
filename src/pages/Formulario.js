import React, { useState } from "react";
import "./Formulario.css";
import { firebase } from "../firebaseConfig";

const db = firebase.firestore();

const Formulario = ({ productosSeleccionados, setProductosSeleccionados }) => {
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

      const numeroOrden = docRef.id;

      setNumeroOrden(numeroOrden);
      setConfirmado(true);
      setProductosSeleccionados([]);
      setError(null);
    } catch (error) {
      console.error("Error al guardar la orden:", error);
    }
  };

  return (
    <div className="formulario-container">
      <h1 className="formulario-title">Formulario de Compra</h1>
      <form className="formulario-form">
        <label htmlFor="nombre" className="formulario-label">
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="formulario-input"
        />
        <label htmlFor="apellido" className="formulario-label">
          Apellido:
        </label>
        <input
          type="text"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="formulario-input"
        />
        <label htmlFor="telefono" className="formulario-label">
          Teléfono:
        </label>
        <input
          type="text"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="formulario-input"
        />
        <label htmlFor="email" className="formulario-label">
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="formulario-input"
        />

        <button
          type="button"
          onClick={handleConfirmarCompra}
          className="formulario-button"
        >
          Confirmar Compra
        </button>
      </form>

      {error && <p className="formulario-error">{error}</p>}

      {confirmado && (
        <p className="formulario-message">
          ¡Compra confirmada! El número de orden es:{" "}
          <strong>{numeroOrden}</strong>.
        </p>
      )}
    </div>
  );
};

export default Formulario;
