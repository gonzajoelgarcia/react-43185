import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import "./MiLista.css";

const MiLista = () => {
  const [carrito, setCarrito] = useState([]);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });
  const [canPurchase, setCanPurchase] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      products: selectedProducts,
    };

    db.collection("ordenes")
      .add(orderData)
      .then((docRef) => {
        const orderId = docRef.id;
        alert(`¡Compra realizada! Número de orden: ${orderId}`);
        setSelectedProducts([]);
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          confirmEmail: "",
        });
      })
      .catch((error) => {
        alert(
          "Hubo un error al realizar la compra. Por favor, inténtalo nuevamente."
        );
      });
  };

  const validateEmail = () => {
    return formData.email === formData.confirmEmail;
  };

  const handleAddToCart = (product) => {
    setCarrito([...carrito, product]);
    const selectedProduct = { ...product, quantity: 1 };
    setSelectedProducts([selectedProduct]);
  };

  useEffect(() => {
    const unsubscribe = db.collection("productos").onSnapshot((snapshot) => {
      const productsData = snapshot.docs.map((doc) => doc.data());
      setProducts(productsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Listado compacto de la orden</h2>
      {canPurchase ? (
        <form className="formtest" onSubmit={handleSubmit}>
          <label className="labeltest">
            Nombre:
            <input
              className="inputtest"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <label className="labeltest">
            Apellido:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          <label className="labeltest">
            Teléfono:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label className="labeltest">
            E-mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="labeltest">
            Confirmar E-mail:
            <input
              type="email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
            />
          </label>
          <button
            className="buttontest"
            type="submit"
            disabled={!validateEmail()}
          >
            Realizar compra
          </button>
        </form>
      ) : (
        <button
          className="buttontest"
          type="button"
          disabled={!validateEmail()}
          onClick={() => setCanPurchase(true)}
        >
          Realizar compra
        </button>
      )}
      {canPurchase && <p>¡Compra realizada! Número de orden: XXXX</p>}
      <div>
        <h3>Producto seleccionado:</h3>
        {selectedProducts.length > 0 ? (
          <ul>
            {selectedProducts.map((selectedProduct) => (
              <li key={selectedProduct.id}>
                {selectedProduct.titulo} - Precio: {selectedProduct.precio}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay productos agregados.</p>
        )}
      </div>
      {products.length > 0 ? (
        <div>
          <h3>Productos disponibles:</h3>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.titulo}{" "}
                <button onClick={() => handleAddToCart(product)}>
                  Agregar al carrito
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default MiLista;
