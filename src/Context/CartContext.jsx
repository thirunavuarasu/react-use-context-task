import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addItem = (item) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [item.id]: {
        ...item,
        quantity: prevItems[item.id] ? prevItems[item.id].quantity + 1 : 1,
      },
    }));
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => {
      const { [id]: removedItem, ...rest } = prevItems;
      return rest;
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [id]: {
        ...prevItems[id],
        quantity: prevItems[id].quantity + 1,
      },
    }));
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      const item = prevItems[id];
      if (item.quantity === 1) {
        return removeItem(id);
      } else {
        return {
          ...prevItems,
          [id]: {
            ...item,
            quantity: item.quantity - 1,
          },
        };
      }
    });
  };

  const totalQuantity = () => {
    return Object.values(cartItems).reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalAmount = () => {
    return Object.values(cartItems).reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        increaseQuantity,
        decreaseQuantity,
        totalQuantity,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
