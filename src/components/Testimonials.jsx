import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Critic",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "The culinary experience at TASTE is nothing short of exceptional. Each dish tells a story of passion and creativity.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Regular Customer",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "I've been coming here for years, and the quality and service never disappoint. The new seasonal menu is outstanding!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Roberts",
      role: "Food Blogger",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "From the ambiance to the presentation, every detail is carefully curated. A must-visit destination for food lovers.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="relative bg-white py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-opacity-10  pattern-dots"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg p-8 shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-yellow-500"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-yellow-500 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                {/* Star Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;