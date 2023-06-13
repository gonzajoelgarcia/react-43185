import React, { createContext, useState } from "react";
import { db } from "../firebaseConfig";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const placeOrder = async (userInfo) => {
    // Crea una nueva orden en la base de datos con los productos y la información del usuario
    try {
      const orderData = {
        products: cartItems,
        userInfo: userInfo,
        orderDate: new Date().toISOString(),
      };

      const docRef = await db.collection("ordenes").add(orderData);
      const orderId = docRef.id;

      setOrderNumber(orderId);
      setOrderPlaced(true);
      setCartItems([]);
    } catch (error) {}
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, placeOrder, orderPlaced, orderNumber }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
