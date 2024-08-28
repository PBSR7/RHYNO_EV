import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Let’s Elevate Your Ride Experience With Rhyno – Where Superiority Meets Style</h1>
        <div className="cta-buttons">
          <Link to="/product/se03-lite" className="btn">SE03 Lite</Link>
          <Link to="/product/se03" className="btn">SE03</Link>
          <Link to="/product/se03-max" className="btn">SE03 Max</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
