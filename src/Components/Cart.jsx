import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    totalQuantity,
    totalAmount,
  } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(cartItems).map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Total Quantity: {totalQuantity()}</h3>
        <h3>Total Amount: ${totalAmount()}</h3>
      </div>
    </div>
  );
};

export default Cart;
