import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = ({ onClose }) => {
  const { cartItems } = useCart();
  
  // Calculate total directly in the component
  const total = cartItems.reduce((sum, item) => 
    sum + (parseFloat(item.price.replace('$', '')) * item.quantity), 0
  ).toFixed(2);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    note: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', { items: cartItems, total, customerInfo: formData });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl max-w-lg w-full p-6 md:p-8 shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Checkout</h2>
              <p className="text-sm text-gray-500 mt-1">Cash on Delivery Only</p>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Order Summary</h3>
              <div className="text-sm text-gray-600">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <span>{item.quantity}x {item.name}</span>
                    <span>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t mt-2 pt-2 font-semibold text-gray-800 flex justify-between">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
              <textarea
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                rows="3"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                placeholder="Enter your delivery address"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Special Instructions (Optional)</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                rows="2"
                value={formData.note}
                onChange={(e) => setFormData({...formData, note: e.target.value})}
                placeholder="Any special instructions for delivery?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-full font-semibold text-lg hover:bg-yellow-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={cartItems.length === 0}
            >
              Place Order - Cash on Delivery
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;