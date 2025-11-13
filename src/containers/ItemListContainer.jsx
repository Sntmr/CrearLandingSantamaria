import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        const filtered = categoryId
          ? productsData.filter(p => p.category === categoryId)
          : productsData;
        resolve(filtered);
      }, 1000);
    });

    fetchItems.then(setItems);
  }, [categoryId]);

  if (items.length === 0) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h2>Catálogo {categoryId ? `de ${categoryId}` : 'principal'}</h2>
      {items.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ItemListContainer;