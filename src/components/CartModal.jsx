import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./style.css";

const CartModal = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    handleCheckout,
  } = useContext(CartContext);

  if (!isCartOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <button className="close-btn" onClick={() => setIsCartOpen(false)}>✖</button>
        <h2>🛒 Tu Carrito</h2>

        {cart.length === 0 ? (
          <p className="empty-cart">Tu carrito está vacío.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <p className="total">Total: ${total.toFixed(2)}</p>
              <button className="checkout-btn" onClick={handleCheckout}>Finalizar compra</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;