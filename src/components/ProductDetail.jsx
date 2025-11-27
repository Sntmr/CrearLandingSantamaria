import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './style.css';

const ProductDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  if (!product) return <p className="loading">Cargando producto...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Precio: ${product.price.toFixed(2)}</p>

        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Agregar al carrito 🛒
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;