import React from 'react';
import '../App.css';
import bannerImage from '../sonsuzkatman-banner-8b6fbd6a-82dc-41bb-a495-e1ec3c6f1386.jpg';

const DealSection2 = () => {  return (
    <div className="deal-section">
      <div className="new-section-image">
        <img src={bannerImage} alt="Fresh Market Banner" />
        <div className="discount-overlay">
          <div className="discount-text2">
            <span className="discount-percentage">25% Off</span>
            <span className="discount-description">Fresh & Organic vegetables</span>
            <button className="discount-shop-btn">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealSection2;
