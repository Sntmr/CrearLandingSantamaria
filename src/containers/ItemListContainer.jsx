import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig.js';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const filteredData = categoryId
          ? data.filter(p => p.category === categoryId)
          : data;

        setItems(filteredData);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchItems();
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