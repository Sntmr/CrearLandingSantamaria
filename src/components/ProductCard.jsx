import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img 
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-price">${product.price.toFixed(2)}</div>

      <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
        Agregar al Carrito
      </button>

      <br/>

      <Link to={`/item/${product.id}`} className="add-to-cart-btn ">
        Ver detalles
      </Link>
    </div>
  );
}

export default ProductCard;

