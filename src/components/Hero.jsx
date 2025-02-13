import React from 'react';
import res from '../assets/res.png';

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="hero"
      className="bg-cover bg-center h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen relative"
      style={{
        backgroundImage: `url(${res})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content Container */}
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-6xl font-extrabold mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to Our Restaurant
        </h1>
        <p className="text-2xl mb-8 sm:text-lg md:text-xl lg:text-2xl">
          Experience the finest dining with us!
        </p>
        <button
          onClick={scrollToMenu}
          className="inline-block bg-yellow-500 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 sm:px-4 sm:py-2 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4 lg:text-xl"
        >
          Explore Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;