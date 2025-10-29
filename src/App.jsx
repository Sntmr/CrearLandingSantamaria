import { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';
import { productsData } from './data/products';
import './App.css';

/**
 * Componente principal de la aplicación
 * Gestiona el estado del carrito y coordina todos los componentes
 */
function App() {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    /**
     * Agrega un producto al carrito
     * Si ya existe, incrementa su cantidad
     */
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

    /**
     * Actualiza la cantidad de un producto en el carrito
     * Si la cantidad llega a 0, elimina el producto
     */
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

    /**
     * Elimina un producto del carrito
     */
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    /**
     * Procesa el checkout (simulado)
     */
    const handleCheckout = () => {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(
            `¡Gracias por tu compra!\nTotal: $${total.toFixed(2)}\n\n` +
            `Esto es una demo. En una tienda real, aquí se procesaría el pago.`
        );
        setCart([]);
        setIsCartOpen(false);
    };

    // Calcula el total de items en el carrito
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="container">
            <Header 
                totalItems={totalItems} 
                onCartClick={() => setIsCartOpen(true)} 
            />

            <div className="products-grid">
                {productsData.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>

            <CartModal
                cart={cart}
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
                onCheckout={handleCheckout}
            />
        </div>
    );
}

export default App;

