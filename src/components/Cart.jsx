import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Checkout from './Checkout';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const total = cartItems.reduce((sum, item) => 
    sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-[90%] sm:w-[400px] lg:w-[450px] bg-white shadow-lg z-50 transform transition-transform duration-300">
        <div className="p-4 sm:p-6 h-full flex flex-col">
          {/* Cart Header */}
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl sm:text-2xl font-bold">Your Cart</h2>
            <button 
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-gray-500 text-center">Your cart is empty</p>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 pb-4 border-b last:border-b-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base truncate">{item.name}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button 
                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition-colors"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.name)}
                        className="ml-2 p-1 text-red-500 hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          <div className="border-t pt-4 mt-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-base sm:text-lg font-semibold">Total:</span>
              <span className="text-lg sm:text-xl font-bold">${total.toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-yellow-500 text-white py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={cartItems.length === 0}
              onClick={() => setIsCheckoutOpen(true)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Add Checkout Modal */}
      {isCheckoutOpen && (
        <Checkout 
          onClose={() => {
            setIsCheckoutOpen(false);
            onClose();
          }} 
        />
      )}
    </>
  );
};

export default Cart;