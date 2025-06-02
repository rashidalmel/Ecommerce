import React from 'react';
import '../App.css';

const WhyUsSection = () => {
  const whyUsItems = [
    {
      id: 1,
      image: '/whyus/1.png',
      title: 'Free Delivery',
      description: 'Free shipping on all orders over $50'
    },
    {
      id: 2,
      image: '/whyus/2.png',
      title: '24/7 Support',
      description: 'Customer support available anytime'
    },
    {
      id: 3,
      image: '/whyus/3.png',
      title: 'Secure Payment',
      description: 'Multiple secure payment methods'
    },
    {
      id: 4,
      image: '/whyus/4.png',
      title: 'Money Back',
      description: '100% money-back guarantee'
    }
  ];

  return (
    <div className="whyus-section">
      <div className="whyus-container">
        <div className="whyus-header">
          <h2>Why Choose <span className="highlight">Us?</span></h2>
          <p>We offer the best shopping experience with amazing benefits</p>
        </div>
        <div className="whyus-grid">
          {whyUsItems.map(item => (
            <div key={item.id} className="whyus-card">
              <div className="whyus-icon">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
