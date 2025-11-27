import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Header() {
  const { totalItems, setIsCartOpen } = useContext(CartContext);

  return (
    <header className="header">
      <div className="logo">🛍️ TechStore</div>
      <button
        className="cart-icon"
        onClick={() => setIsCartOpen(true)}
        aria-label="Abrir carrito de compras"
      >
        🛒
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </button>
    </header>
  );
}

export default Header;