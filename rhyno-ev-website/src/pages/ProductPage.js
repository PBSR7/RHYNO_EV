import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './ProductPage.css';

const products = {
  'se03-lite': { name: 'SE03 Lite', image: '/assets/images/se03-lite.jpg', description: 'Detailed description for SE03 Lite' },
  'se03': { name: 'SE03', image: '/assets/images/se03.jpg', description: 'Detailed description for SE03' },
  'se03-max': { name: 'SE03 Max', image: '/assets/images/se03-max.jpg', description: 'Detailed description for SE03 Max' },
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
