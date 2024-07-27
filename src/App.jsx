import React from 'react';
import { CartProvider } from './Context/CartContext';
import Cart from './Components/Cart';
import ItemList from './Components/ItemList';

const App = () => {
  return (
    <CartProvider>
      <div className="container">
        <h1>Shopping Cart</h1>
        <ItemList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
