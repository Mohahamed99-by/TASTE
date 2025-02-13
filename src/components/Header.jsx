import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white text-gray-800 shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-1 md:flex-none">
            <span className="text-3xl font-bold">TASTE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block flex-1">
            <ul className="flex justify-center space-x-12">
              {['home', 'menu', 'about'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className="hover:text-yellow-500 transition-colors font-medium text-lg capitalize"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <div className="flex-1 md:flex-none flex justify-end items-center space-x-4">
            {/* Desktop Reserve Button */}
            <a
              href="#reserve"
              onClick={(e) => handleNavClick(e, 'reserve')}
              className="hidden md:block bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors"
            >
              Reserve a Table
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {['home', 'menu', 'about'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className="block px-4 py-2 hover:text-yellow-500 transition-colors text-gray-800 capitalize"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#reserve"
                  onClick={(e) => handleNavClick(e, 'reserve')}
                  className="block px-4 py-2 bg-yellow-500 text-white text-center rounded-full hover:bg-yellow-600 transition-colors"
                >
                  Reserve a Table
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;