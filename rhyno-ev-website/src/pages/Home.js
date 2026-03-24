import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';
import './Home.css';

const products = [
  { id: 'se03-lite', name: 'SE03 Lite', image: '/assets/images/se03-lite.jpg', description: 'Description for SE03 Lite' },
  { id: 'se03', name: 'SE03', image: '/assets/images/se03.jpg', description: 'Description for SE03' },
  { id: 'se03-max', name: 'SE03 Max', image: '/assets/images/se03-max.jpg', description: 'Description for SE03 Max' },
];

function Home() {
  return (
    <main>
      <HeroSection />
      <section className="product-section">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </section>
      <Carousel />
    </main>
  );
}

export default Home;
