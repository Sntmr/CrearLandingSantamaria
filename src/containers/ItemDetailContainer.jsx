import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import products from '../data/products.js';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        const found = products.find(p => p.id === parseInt(itemId));
        resolve(found);
      }, 1000);
    });

    fetchItem.then(setItem);
  }, [itemId]);

  if (!item) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;