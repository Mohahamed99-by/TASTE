import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Testimonials from '../components/Testimonials';
import ReserveTable from '../components/ReserveTable';
import Footer from '../components/Footer';
import FeaturedDishes from '../components/FeaturedDishes';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedDishes />
      <About />
      <Menu />
      <ReserveTable />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;