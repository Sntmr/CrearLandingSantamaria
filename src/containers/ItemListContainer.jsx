import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productData from '../data/products';
import { CartContext } from '../context/CartContext'; 
const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        const filteredData = categoryId
          ? productData.filter((p) => p.category === categoryId)
          : productData;
        resolve(filteredData);
      }, 1000);
    });

    fetchItems.then(setItems);
  }, [categoryId]);

  return (
    <div>
      <h1>Catálogo {categoryId ? `de ${categoryId}` : 'principal'}</h1>
      <div>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddToCart={() => addToCart(item)} 
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;