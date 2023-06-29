import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    if (!isItemInCart(item)) {
      setCartItems([...cartItems, item]);
    }
  };

  const isItemInCart = (item) => {
    return cartItems.some((cartItem) => cartItem.id === item.id);
  };

  const removeItem = (item) => {
    const updatedItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
