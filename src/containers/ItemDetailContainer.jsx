import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.js';
import { CartContext } from '../context/CartContext';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        const found = products.find(p => p.id === parseInt(itemId));
        resolve(found);
      }, 1000);
    });

    fetchItem.then(setItem);
  }, [itemId]);

  return (
    <div>
      {!item ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
          <p>Precio: ${item.price}</p>
          <button onClick={() => addToCart(item)}>Agregar al carrito</button>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;