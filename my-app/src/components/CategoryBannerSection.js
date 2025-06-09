import React from 'react';
import '../App.css';

const CategoryBannerSection = () => {
  return (
    <div className="category-banner-section">
      <div className="category-banner-container">
        <div className="category-banner-card">
          <div className="banner-image">
            <img src="/one.png" alt="Tasty Snack & Fast food" />
          </div>          <div className="category-banner-content">
            <h3>Tasty Snack & Fast food</h3>
            <p className="banner-content-text">The flavour of something special</p>
            <button className="shop-button">Shop Now</button>
          </div>
        </div>
        <div className="category-banner-card">
          <div className="banner-image">
            <img src="/two.png" alt="Fresh Fruits & Vegetables" />
          </div>          <div className="category-banner-content">
            <h3>Fresh Fruits & Vegetables</h3>
            <p className="banner-content-text">A healthy meal for every one</p>
            <button className="shop-button">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBannerSection;
