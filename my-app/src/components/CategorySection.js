import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const CategorySection = () => {
  const cardsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const categories = [
    { id: 1, title: 'Bakery', items: '8 items', image: '/1.png' },
    { id: 2, title: 'Fast Food', items: '291 items', image: '/2.png' },
    { id: 3, title: 'Snacks', items: '49 items', image: '/3.png' },
    { id: 4, title: 'Vegetables', items: '485 items', image: '/4.png' },
    { id: 5, title: 'Fruits', items: '126 items', image: '/5.png' },
    { id: 6, title: 'Drinks', items: '237 items', image: '/6.png' }
  ];

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Double the array for seamless looping only on desktop
  const displayCategories = isMobile ? categories : [...categories, ...categories];

  useEffect(() => {
    if (isMobile) return; // Don't run animation on mobile

    let currentPosition = 0;
    const cardWidth = 172;
    const gap = 24;
    const totalWidth = categories.length * (cardWidth + gap);

    const scroll = () => {
      if (!cardsRef.current) return;
      
      currentPosition += cardWidth + gap;
      cardsRef.current.style.transform = `translateX(-${currentPosition}px)`;
      cardsRef.current.style.transition = 'transform 0.6s ease-in-out';

      if (currentPosition >= totalWidth) {
        setTimeout(() => {
          if (!cardsRef.current) return;
          cardsRef.current.style.transition = 'none';
          currentPosition = 0;
          cardsRef.current.style.transform = `translateX(0)`;
          setTimeout(() => {
            if (!cardsRef.current) return;
            cardsRef.current.style.transition = 'transform 0.6s ease-in-out';
          }, 50);
        }, 600);
      }
    };

    const interval = setInterval(scroll, 2000);
    return () => clearInterval(interval);
  }, [categories.length, isMobile]);

  return (
    <div className="category-section">
      <div className="category-content">
        <div className="explore-categories-text">
          <div>Explore</div>
          <div>Categories</div>
        </div>
        <div className="category-image">
          <div className="discount-label">50% Off</div>
          <img src="/category.jpg" alt="Category banner" className="main-category-image" />
        </div>
        <div className="category-cards">
          <div className="category-cards-container" ref={cardsRef}>
            {displayCategories.map((category, index) => (
              <div 
                key={`${category.id}-${index}`}
                className="category-card"
                style={{ '--index': index }}
              >
                <img src={category.image} alt={category.title} />
                <h3>{category.title}</h3>
                <p>{category.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
