import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Rhyno EV</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/products">Products</Link>
            <ul>
              <li><Link to="/product/se03-lite">SE03 Lite</Link></li>
              <li><Link to="/product/se03">SE03</Link></li>
              <li><Link to="/product/se03-max">SE03 Max</Link></li>
              <li><Link to="/compare">Compare All</Link></li>
            </ul>
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/prebook">Pre-book Now</Link></li>
        </ul>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
