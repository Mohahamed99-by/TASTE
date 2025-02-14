import React, { useState, useEffect } from 'react';

const FeaturedDishes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dishes = [
    {
        id: 1,
        name: "Fresh Seafood Platter",
        description: "Daily catch with lemon butter sauce",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
        price: "$34.99",
        category: "Seafood"
      },
    {
      id: 2,
      name: "Signature Steak",
      description: "Prime cut beef with herb butter",
      image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6",
      price: "$29.99",
      category: "Main Course"
    },
    {
      id: 3,
      name: "Truffle Pasta",
      description: "Handmade pasta with black truffle",
      image: "https://images.unsplash.com/photo-1556760544-74068565f05c",
      price: "$24.99",
      category: "Pasta"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === dishes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? dishes.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Featured Dishes
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
            {dishes.map((dish, index) => (
              <div
                key={dish.id}
                className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="inline-block px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-full mb-3">
                      {dish.category}
                    </span>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-gray-200 mb-3">
                      {dish.description}
                    </p>
                    <span className="text-yellow-500 font-bold text-2xl">
                      {dish.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {dishes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-yellow-500 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;