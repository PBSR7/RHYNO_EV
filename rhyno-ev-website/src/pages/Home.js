import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container">
        <ProductCard />
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
