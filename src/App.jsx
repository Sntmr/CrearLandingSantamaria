import { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';
import { productsData } from './data/products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import './App.css';

/**
 * Componente principal de la aplicación
 * Gestiona el estado del carrito y coordina todos los componentes
 */
function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(
      `¡Gracias por tu compra!\nTotal: $${total.toFixed(2)}\n\n` +
      `Esto es una demo. En una tienda real, aquí se procesaría el pago.`
    );
    setCart([]);
    setIsCartOpen(false);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="container">
        <Header
          totalItems={totalItems}
          onCartClick={() => setIsCartOpen(true)}
        />

        <Navbar />

        {/* Rutas principales */}
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer onAddToCart={addToCart} />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer onAddToCart={addToCart} />}
          />
          <Route
            path="/item/:itemId"
            element={<ItemDetailContainer onAddToCart={addToCart} />}
          />
        </Routes>



        <CartModal
          cart={cart}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />
      </div>
    </Router>
  );
}

export default App;