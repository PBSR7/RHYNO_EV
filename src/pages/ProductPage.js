import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/pages.css';

const products = {
  'se03-lite': { id: 'se03-lite', name: 'SE03 Lite', image: '/assets/rhyno final.95.png', description: 'Compact electric performance for everyday city rides.' },
  'se03': { id: 'se03', name: 'SE03', image: '/assets/rhyno final.95.png', description: 'Balanced range, comfort, and durability for daily commuting.' },
  'se03-max': { id: 'se03-max', name: 'SE03 Max', image: '/assets/rhyno final.95.png', description: 'Extended capability for riders who want the most from every charge.' },
};

function ProductPage() {
  const { id } = useParams();
  const product = products[id];

  return (
    <div className="product-page">
      <ProductCard product={product} />
    </div>
  );
}

export default ProductPage;
