import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';
import '../styles/pages.css';

const products = [
  { id: 'se03-lite', name: 'SE03 Lite', image: '/assets/rhyno final.95.png', description: 'Compact electric performance for everyday city rides.' },
  { id: 'se03', name: 'SE03', image: '/assets/rhyno final.95.png', description: 'Balanced range, comfort, and durability for daily commuting.' },
  { id: 'se03-max', name: 'SE03 Max', image: '/assets/rhyno final.95.png', description: 'Extended capability for riders who want the most from every charge.' },
];

function Home() {
  return (
    <main>
      <HeroSection />
      <h2 className="section-title">Our Products</h2>
      <section className="product-section">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </section>
      <Carousel />
    </main>
  );
}

export default Home;
