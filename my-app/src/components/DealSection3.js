import React, { useState } from 'react';
import '../App.css';

const DealSection3 = () => {
  const categories = ['All', 'Snack & Spices', 'Fruits', 'Vegetables'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const allDeals = [
    {
      id: 1,
      image: '/Fruit & Vegetables/fruit (1).jpg',
      title: 'Fresh Oranges',
      category: 'Fruits',
      price: 20,
      originalPrice: 30,
      rating: 4,
      quantity: '1 Kg'
    },
    {
      id: 2,
      image: '/Fruit & Vegetables/fruit (2).jpg',
      title: 'Fresh Apples',
      category: 'Fruits',
      price: 39,
      originalPrice: 32,
      rating: 4,
      quantity: '1 Kg'
    },
    {
      id: 3,
      image: '/Fruit & Vegetables/fruit (3).jpg',
      title: 'Fresh Bananas',
      category: 'Fruits',
      price: 18,
      rating: 5,
      quantity: '1 Kg'
    },
    {
      id: 4,
      image: '/Fruit & Vegetables/fruit (4).jpg',
      title: 'Fresh Strawberries',
      category: 'Fruits',
      price: 25,
      rating: 4,
      quantity: '500 g',
      stock: '3 Left'
    },
    {
      id: 5,
      image: '/Fruit & Vegetables/fruit (5).jpg',
      title: 'Fresh Grapes',
      category: 'Fruits',
      price: 28,
      rating: 4,
      quantity: '1 Kg'
    },
    {
      id: 6,
      image: '/Fruit & Vegetables/fruit (6).jpg',
      title: 'Fresh Pineapple',
      category: 'Fruits',
      price: 35,
      originalPrice: 42,
      rating: 5,
      quantity: '1 Unit'
    },
    {
      id: 7,
      image: '/Fruit & Vegetables/fruit (7).jpg',
      title: 'Fresh Watermelon',
      category: 'Fruits',
      price: 32,
      rating: 4,
      quantity: '2 Kg'
    },
    {
      id: 8,
      image: '/Fruit & Vegetables/fruit (8).jpg',
      title: 'Fresh Mangoes',
      category: 'Fruits',
      price: 22,
      originalPrice: 28,
      rating: 5,
      quantity: '1 Kg'
    },    {
      id: 9,
      image: '/Fruit & Vegetables/vegetables (1).jpg',
      title: 'Fresh Tomatoes',
      category: 'Vegetables',
      price: 15,
      rating: 4,
      quantity: '500 g'
    },
    {
      id: 10,
      image: '/Fruit & Vegetables/vegetables (2).jpg',
      title: 'Fresh Carrots',
      category: 'Vegetables',
      price: 25,
      rating: 4,
      quantity: '500 g'
    },
    {
      id: 11,
      image: '/Fruit & Vegetables/vegetables (3).jpg',
      title: 'Fresh Broccoli',
      category: 'Vegetables',
      price: 22,
      originalPrice: 28,
      rating: 4,
      quantity: '500 g'
    },
    {
      id: 14,
      image: '/Fruit & Vegetables/vegetables (4).jpg',
      title: 'Fresh Cauliflower',
      category: 'Vegetables',
      price: 24,
      rating: 4,
      quantity: '1 Unit'
    },
    {
      id: 15,
      image: '/Fruit & Vegetables/vegetables (5).jpg',
      title: 'Fresh Bell Peppers',
      category: 'Vegetables',
      price: 18,
      originalPrice: 22,
      rating: 5,
      quantity: '500 g'
    },
    {
      id: 16,
      image: '/Fruit & Vegetables/vegetables (6).jpg',
      title: 'Fresh Cucumber',
      category: 'Vegetables',
      price: 12,
      rating: 4,
      quantity: '500 g'
    },
    {
      id: 17,
      image: '/Fruit & Vegetables/vegetables (7).jpg',
      title: 'Fresh Green Beans',
      category: 'Vegetables',
      price: 16,
      rating: 4,
      quantity: '500 g',
      stock: 'Fresh Stock'
    },
    {
      id: 12,
      image: '/product1.jpg',
      title: 'Mixed Nuts',
      category: 'Snack & Spices',
      price: 45,
      rating: 5,
      quantity: '250 g'
    },
    {
      id: 13,
      image: '/product2.jpg',
      title: 'Spice Mix',
      category: 'Snack & Spices',
      price: 35,
      originalPrice: 40,
      rating: 4,
      quantity: '100 g'
    }
  ];

  const filteredDeals = selectedCategory === 'All' 
    ? allDeals 
    : allDeals.filter(deal => deal.category === selectedCategory);

  const formatPrice = (price) => `$${price}`;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <div className="deal-section">
      <div className="deal-header">
        <div className="deal-title deal-group">
          <h2>New <span className="deal-highlight">Arrivals</span></h2>
          <p>Shop online for new arrivals and get free shipping!</p>
        </div>
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="deal-grid">
        {filteredDeals.map(deal => (
          <div key={deal.id} className="deal-card">
            <div className="deal-card-image">
              <img src={deal.image} alt={deal.title} />
              {deal.stock && <span className="stock-tag">{deal.stock}</span>}
            </div>
            <div className="deal-card-content">
              <span className="deal-category">{deal.category}</span>
              <h3 className="deal-card-title">{deal.title}</h3>
              <div className="deal-rating">{renderStars(deal.rating)}</div>
              <div className="deal-card-footer">
                <div className="deal-price">
                  <span className="current-price">{formatPrice(deal.price)}</span>
                  {deal.originalPrice && (
                    <span className="original-price">{formatPrice(deal.originalPrice)}</span>
                  )}
                </div>
                <span className="deal-quantity">{deal.quantity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealSection3;
