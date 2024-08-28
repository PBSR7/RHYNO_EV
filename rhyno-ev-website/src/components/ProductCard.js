import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div className="product-card">
      <h2>Our Products</h2>
      <div className="product-list">
        <div className="product-item">
          <img src="/assets/images/se03-lite.jpg" alt="SE03 Lite" />
          <h3>SE03 Lite</h3>
          <Link to="/product/se03-lite" className="btn">Learn More</Link>
        </div>
        <div className="product-item">
          <img src="/assets/images/se03.jpg" alt="SE03" />
          <h3>SE03</h3>
          <Link to="/product/se03" className="btn">Learn More</Link>
        </div>
        <div className="product-item">
          <img src="/assets/images/se03-max.jpg" alt="SE03 Max" />
          <h3>SE03 Max</h3>
          <Link to="/product/se03-max" className="btn">Learn More</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
