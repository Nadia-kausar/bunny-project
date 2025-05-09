import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Cart items: { product, quantity }
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(item => item.product.id === product.id);
      if (existingIndex !== -1) {
        // Product already in cart, increase quantity
        const newItems = [...prevItems];
        newItems[existingIndex].quantity += 1;
        return newItems;
      }
      // Add new product with quantity 1
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.product.id === productId) {
          return { ...item, quantity: quantity > 0 ? quantity : 1 };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    // Assume product.price is string like "$99.99"
    const priceNum = parseFloat(item.product.price.replace('$', '')) || 0;
    return sum + priceNum * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
