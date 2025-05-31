import React from 'react';
import '../App.css';

const DealSection = () => {
  const deals = [
    {
      id: 1,
      image: '/product1.jpg',
      title: 'Mixed Fruits Chocolates',
      category: 'Chocos',
      price: 20,
      originalPrice: 30,
      rating: 4,
      quantity: '1 Pack'
    },
    {
      id: 2,
      image: '/product2.jpg',
      title: 'Organic Apple Juice Pack',
      category: 'Juice',
      price: 15,
      rating: 4,
      quantity: '100 ml',
      stock: '3 Left'
    },
    {
      id: 3,
      image: '/product3.jpg',
      title: 'Mixed Almond nuts juice Pack',
      category: 'Juice',
      price: 39,
      originalPrice: 32,
      rating: 4,
      quantity: '250 g'
    },
    {
      id: 4,
      image: '/product4.jpg',
      title: 'Fresh Mango Slice Juice',
      category: 'Fruits',
      price: 25,
      rating: 4,
      quantity: '100 ml',
      stock: 'Out Of Stock'
    }
  ];

  const formatPrice = (price) => `$${price}`;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const difference = endOfDay - now;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="deal-section">
      <div className="deal-header">
        <div className="deal-title">
          <h2>Day Of The <span className="deal-highlight">Deal</span></h2>
          <p>Don't wait. The time will never be just right.</p>
        </div>
        <div className="deal-timer">
          <div className="timer-block">
            <span className="timer-number">{timeLeft.days}</span>
            <span className="timer-label">Days</span>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-block">
            <span className="timer-number">{timeLeft.hours}</span>
            <span className="timer-label">Hours</span>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-block">
            <span className="timer-number">{timeLeft.minutes}</span>
            <span className="timer-label">Min</span>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-block">
            <span className="timer-number">{timeLeft.seconds}</span>
            <span className="timer-label">Sec</span>
          </div>
        </div>
      </div>
      <div className="deal-grid">
        {deals.map(deal => (
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

export default DealSection;
