import React from 'react';
import CartItem from './CartItem';

/**
 * Componente CartModal
 * Modal que muestra el contenido del carrito de compras
 * Permite gestionar productos y proceder al checkout
 */
function CartModal({ cart, isOpen, onClose, onUpdateQuantity, onRemove, onCheckout }) {
    if (!isOpen) return null;

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="cart-overlay" onClick={onClose}>
            <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h2 className="cart-title">Tu Carrito</h2>
                    <button className="close-btn" onClick={onClose}>
                        Cerrar
                    </button>
                </div>

                {cart.length === 0 ? (
                    <div className="cart-empty">
                        Tu carrito está vacío
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.map(item => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onUpdateQuantity={onUpdateQuantity}
                                    onRemove={onRemove}
                                />
                            ))}
                        </div>
                        <div className="cart-total">
                            <div className="total-label">Total:</div>
                            <div className="total-amount">${total.toFixed(2)}</div>
                        </div>
                        <button className="checkout-btn" onClick={onCheckout}>
                            Proceder al Pago
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default CartModal;

