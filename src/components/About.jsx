import React from 'react';

const About = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-gray-800">
            Our Story
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Section */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Welcome to TASTE, where culinary excellence meets warm hospitality. Our journey began in 2010 with a simple vision: to create extraordinary dining experiences that celebrate the art of food.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Every dish we serve is crafted with passion, using only the finest ingredients sourced from local producers. Our expert chefs blend traditional techniques with modern innovation to create unforgettable flavors.
              </p>

              {/* Stats Section */}
              <div className="flex justify-center md:justify-start space-x-8 mt-6">
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-500">
                    10+
                  </span>
                  <span className="text-sm md:text-base text-gray-600">
                    Years of Experience
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-500">
                    50+
                  </span>
                  <span className="text-sm md:text-base text-gray-600">
                    Signature Dishes
                  </span>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative mt-8 md:mt-0">
              <img
                src="https://d31tsesv4zrpsz.cloudfront.net/cache/img/casablanca-restaurant-191077-1920-1280-crop.PNG?q=1725963837"
                alt="Restaurant Interior"
                className="rounded-lg shadow-xl w-full h-64 md:h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-lg shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">
                  Fine Dining
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Experience culinary excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;