import React from 'react';
import '../App.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="discount-text">Flat 30% Off</span>
          <h1>
            Explore <span className="highlight">Healthy</span>
            <br />& Fresh Fruits
          </h1>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src="/hero-1.png" alt="Fresh fruits collection" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
