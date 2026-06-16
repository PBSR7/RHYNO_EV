import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/refund-policy">Refund Policy</Link></li>
          <li><Link to="/website-policy">Website Policy</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Career</a></li>
          <li><Link to="/rentals">Rentals</Link></li>
        </ul>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
