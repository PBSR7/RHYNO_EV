import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/ProductCard.css';

function ProductCard({ product }) {
  if (!product) {
    return (
      <div className="product-card">
        <h2>Product not found</h2>
        <Link to="/products" className="btn">View Products</Link>
      </div>
    );
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <Link to={`/product/${product.id}`} className="btn">Learn More</Link>
    </div>
  );
}

export default ProductCard;
