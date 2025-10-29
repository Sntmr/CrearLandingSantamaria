import React from 'react';

/**
 * Componente ProductCard
 * Muestra la información de un producto individual
 * Props: product (objeto con datos del producto), onAddToCart (función callback)
 */
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
            <button 
                className="add-to-cart-btn"
                onClick={() => onAddToCart(product)}
            >
                Agregar al Carrito
            </button>
        </div>
    );
}

export default ProductCard;

