import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { useCart } from './context/CartContext';
import ReserveTable from './components/ReserveTable';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+1234567890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-24 right-24 bg-green-500 p-3 rounded-full z-50 hover:bg-green-600 transition-colors duration-300 shadow-lg"
      aria-label="Contact on WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-white"
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
};

// Create a CartButton component
const CartButton = ({ onClick }) => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <button 
      onClick={onClick}
      className="fixed top-24 right-8 bg-yellow-500 p-3 rounded-full z-50 hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
      aria-label="Shopping cart"
    >
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
          {itemCount}
        </span>
      )}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-white" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
        />
      </svg>
    </button>
  );
};

const LocationButton = () => {
  return (
    <a
      href="https://goo.gl/maps/yourLocationLink" // Replace with your Google Maps location link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-24 right-40 bg-blue-500 p-3 rounded-full z-50 hover:bg-blue-600 transition-colors duration-300 shadow-lg"
      aria-label="Find us on Google Maps"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-white"
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"/>
      </svg>
    </a>
  );
};

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <HomePage />
          <ReserveTable />
          <WhatsAppButton />
          <LocationButton />
          <CartButton onClick={() => setIsCartOpen(true)} />
          <Cart 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)}
          />
        </CartProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;