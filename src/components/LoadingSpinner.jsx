import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-90 z-50">
      {/* Plate Animation */}
      <div className="relative">
        <div className="w-24 h-24 border-8 border-yellow-500 rounded-full animate-spin border-t-transparent border-l-transparent mb-4"></div>
        {/* Fork and Knife Animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg 
            className="w-12 h-12 text-yellow-500 animate-pulse" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M11 3v17h2v-17h-2zm-7 12.5c0 2.5 2 4.5 4.5 4.5h1.5v-2h-1.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h1.5v-2h-1.5c-2.5 0-4.5 2-4.5 4.5zm13-4.5h1.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-1.5v2h1.5c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5h-1.5v2z"/>
          </svg>
        </div>
      </div>
      {/* Loading Text with Animation */}
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold text-yellow-500 animate-pulse">
          TASTE
        </h2>
        <p className="text-white mt-2">
          Preparing something delicious...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;