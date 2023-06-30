import React, { createContext, useState } from "react";
import { db } from "../firebaseConfig";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedItems);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const updatedItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedItems);
  };

  const placeOrder = async (userInfo) => {
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
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        placeOrder,
        orderPlaced,
        orderNumber,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
