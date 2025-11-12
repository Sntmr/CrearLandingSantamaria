import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        const filtered = categoryId
          ? products.filter(p => p.category === categoryId)
          : products;
        resolve(filtered);
      }, 1000);
    });

    fetchItems.then(setItems);
  }, [categoryId]);

  return (
    <div>
      {items.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemListContainer;