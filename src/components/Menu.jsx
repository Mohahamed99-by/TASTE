import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems = [
    {
      name: 'Pizza Margherita',
      price: '$10',
      description: 'Fresh mozzarella, tomatoes, and basil on our signature crust',
      image: 'https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067',
      category: 'Pizza'
    },
    {
      name: 'Gourmet Burger',
      price: '$8',
      description: 'Angus beef patty with caramelized onions and artisanal cheese',
      image: 'https://imgs.search.brave.com/rSqBLs67woH0RJHR16LYO4NI0b0z-yPtA_Oky8JtkdM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGFuZHdpbmUu/Y29tL3RobWIvb1BR/dFRnejRlNDZJaFl6/VFpoUFJsdjhOY0NF/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/amFwYW5lc2Utc3R5/bGUtY2hpbGktYnVy/Z2Vycy13aXRoLXl1/enUtbWF5by1GVC1S/RUNJUEUwNjIwLTJm/ODM4NDEzNWZjMDQy/ZTc5Y2MyNTZkMTdh/ZDY3MmY5LmpwZw',
      category: 'Main Course'
    },
    {
      name: 'Fettuccine Alfredo',
      price: '$12',
      description: 'Homemade pasta in creamy sauce with grilled chicken',
      image: 'https://t3.ftcdn.net/jpg/08/68/72/72/360_F_868727223_nLkb6uBHnSnw27ENk3htO4LucFZSmxSE.jpg',
      category: 'Pasta'
    },
    {
      name: 'Mediterranean Salad',
      price: '$7',
      description: 'Mixed greens with feta, olives, and balsamic dressing',
      image: 'https://imgs.search.brave.com/bBh5Jsmge_y71JcHefY8Hyxrmda3RLjuH73GTqhtcUM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG92ZWFuZGxlbW9u/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDgvcXVp/bm9hLXNhbGFkLXJl/Y2lwZXMuanBn',
      category: 'Starters'
    },
    {
      name: 'Dragon Roll',
      price: '$15',
      description: 'Premium sushi roll with eel, avocado, and special sauce',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
      category: 'Specialty'
    },
    {
      name: 'Grilled Salmon',
      price: '$18',
      description: 'Fresh Atlantic salmon with lemon herb butter sauce',
      image: 'https://www.thecookierookie.com/wp-content/uploads/2023/05/featured-grilled-salmon-recipe.jpg',
      category: 'Seafood'
    },
    {
      name: 'Chicken Tikka Masala',
      price: '$14',
      description: 'Tender chicken in rich curry sauce with basmati rice',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641',
      category: 'Main Course'
    },
    {
      name: 'Chocolate Lava Cake',
      price: '$6',
      description: 'Warm chocolate cake with molten center and vanilla ice cream',
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51',
      category: 'Dessert'
    },
    {
      name: 'Caesar Salad',
      price: '$8',
      description: 'Crisp romaine, parmesan, croutons, and classic Caesar dressing',
      image: 'https://t4.ftcdn.net/jpg/02/02/41/11/360_F_202411128_rSVaAheGIR730bCS6KxuseCvkTnIBQss.jpg',
      category: 'Starters'
    },
    {
      name: 'Truffle Risotto',
      price: '$16',
      description: 'Creamy Arborio rice with wild mushrooms and truffle oil',
      image: 'https://somuchfoodblog.com/wp-content/uploads/2018/12/63fe1-trufflerisotto5-e1587928372407.jpg',
      category: 'Main Course'
    },
    {
      name: 'Tiramisu',
      price: '$7',
      description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
      image: 'https://www.galbani.fr/wp-content/uploads/2020/10/Tiramisu-au-caf%C3%A9-1.jpg',
      category: 'Dessert'
    },
    {
      name: 'Chicken Shawarma',
      price: '$10',
      description: 'Marinated chicken, garlic sauce, and pickles in pita bread',
      image: 'https://www.recipetineats.com/tachyon/2017/01/Chicken-Shawarma-Wrap_3.jpg',
      category: 'Main Course'
    },
  ];

  // Get unique categories
  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  console.log(categories);
  
  

  // Filter menu items based on search and category
  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="menu" className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center text-gray-800">
          Our Menu
        </h2>
        <p className="text-sm sm:text-base text-center text-gray-600 mb-6 sm:mb-8 md:mb-12">
          Discover our culinary masterpieces
        </p>
        
        {/* Search and Filter Section */}
        <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center mb-6 sm:mb-8">
          {/* Search Input */}
          <div className="w-full sm:max-w-xs md:w-64">
            <div className="relative">
              <input
                type="text"
                placeholder="Search menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm sm:text-base"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-yellow-500 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-yellow-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-40 sm:h-48 md:h-52 lg:h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">
                    {item.category}
                  </span>
                </div>
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-600">
                      {item.price}
                    </span>
                    <button 
                      onClick={() => addToCart(item)}
                      className="bg-yellow-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-yellow-600 transition-all duration-300 hover:shadow-md"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500 text-base sm:text-lg">No items found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;