import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/refund-policy">Refund Policy</a></li>
          <li><a href="/website-policy">Website Policy</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Career</a></li>
          <li><a href="/rentals">Rentals</a></li>
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
