import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context/CartContext';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addItem(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
