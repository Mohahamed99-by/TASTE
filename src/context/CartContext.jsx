import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.name === item.name);
      if (existingItem) {
        return prev.map(i => 
          i.name === item.name 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName) => {
    setCartItems(prev => prev.filter(item => item.name !== itemName));
  };

  const updateQuantity = (itemName, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemName);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.name === itemName ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);