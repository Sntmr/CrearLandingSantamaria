import React from 'react';

/**
 * Componente CartItem
 * Representa un item individual dentro del carrito
 * Permite ajustar cantidad y eliminar el producto
 */
function CartItem({ item, onUpdateQuantity, onRemove }) {
    return (
        <div className="cart-item">
            <img 
                src={item.image} 
                alt={item.name} 
                className="cart-item-image"
            />
            <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">${item.price.toFixed(2)}</div>
                <div className="cart-item-controls">
                    <button 
                        className="quantity-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        aria-label="Disminuir cantidad"
                    >
                        -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                        className="quantity-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        aria-label="Aumentar cantidad"
                    >
                        +
                    </button>
                    <button 
                        className="remove-btn"
                        onClick={() => onRemove(item.id)}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;

