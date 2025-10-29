import React from 'react';

/**
 * Componente Header
 * Muestra el logo de la tienda y el botón del carrito con badge de cantidad
 */
function Header({ totalItems, onCartClick }) {
    return (
        <header className="header">
            <div className="logo">🛒 TechStore</div>
            <button 
                className="cart-icon"
                onClick={onCartClick}
                aria-label="Abrir carrito de compras"
            >
                Carrito
                {totalItems > 0 && (
                    <span className="cart-badge">{totalItems}</span>
                )}
            </button>
        </header>
    );
}

export default Header;

