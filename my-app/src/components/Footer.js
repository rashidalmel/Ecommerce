import React from 'react';
import '../App.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [activeSection, setActiveSection] = React.useState(null);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info Section */}
        <div className="footer-section">          <div className="footer-logo">
            <img src="/logo.png" alt="Blue Berry" className="logo-img" />
            <img src="/Brand RA.png" alt="Brand RA" className="brand-ra-logo" />          </div>            <p className="footer-description">
            BlueBerry is the biggest marketplace for grocery products. Get your daily needs delivered from our store.
          </p>
          <div className="payment-methods-top">
            <img src="/paymentlogo/mobileios.png" alt="Mobile Payment" className="mobile-payment-top" />
          </div>
        </div>        {/* Category Section */}
        <div className="footer-section">
          <h3 onClick={() => toggleSection('category')} className="footer-heading">
            Category
            <span className={`dropdown-arrow ${activeSection === 'category' ? 'open' : ''}`}>▼</span>
          </h3>
          <ul className={`footer-list ${activeSection === 'category' ? 'active' : ''}`}>
            <li><a href="/snacks">Snacks</a></li>
            <li><a href="/juice">Juice</a></li>
            <li><a href="/chips">Chips</a></li>
            <li><a href="/spices">Spices</a></li>
            <li><a href="/sauces">Sauces</a></li>
            <li><a href="/fruit">Fruit</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3 onClick={() => toggleSection('company')} className="footer-heading">
            Company
            <span className={`dropdown-arrow ${activeSection === 'company' ? 'open' : ''}`}>▼</span>
          </h3>
          <ul className={`footer-list ${activeSection === 'company' ? 'active' : ''}`}>
            <li><a href="/about">About us</a></li>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/legal">Legal Notice</a></li>
            <li><a href="/terms">Terms & conditions</a></li>
            <li><a href="/secure-payment">Secure payment</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="footer-section">
          <h3 onClick={() => toggleSection('account')} className="footer-heading">
            Account
            <span className={`dropdown-arrow ${activeSection === 'account' ? 'open' : ''}`}>▼</span>
          </h3>
          <ul className={`footer-list ${activeSection === 'account' ? 'active' : ''}`}>
            <li><a href="/signin">Sign In</a></li>
            <li><a href="/cart">View Cart</a></li>
            <li><a href="/return-policy">Return Policy</a></li>
            <li><a href="/become-vendor">Become a Vendor</a></li>
            <li><a href="/affiliate">Affiliate Program</a></li>
            <li><a href="/payments">Payments</a></li>          </ul>
        </div>

        {/* Contact Section */}      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            Copyright © 2024 <a href="/">BlueBerry</a> all rights reserved.
          </div>          <div className="social-links">
            <a href="#" className="social-link"><FaFacebookF /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaLinkedinIn /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
          </div>
          <div className="payment-methods">
            <img src="/paymentlogo/payment.png" alt="Payment Methods" className="payment-logo" />
          </div>
          <div className="scroll-to-top">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
