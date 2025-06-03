import React, { useState } from 'react';
import '../App.css';

const Header = () => {  const [isVegetablesDropdownOpen, setIsVegetablesDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleVegetablesDropdown = () => {
    setIsVegetablesDropdownOpen(!isVegetablesDropdownOpen);
    setIsLocationDropdownOpen(false);
  };

  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
    setIsVegetablesDropdownOpen(false);
  };
  const togglePagesDropdown= () => {
    setIsPagesOpen(!isPagesOpen);
    setIsBlogOpen(false);
    setIsVegetablesDropdownOpen(false);
    setIsLocationDropdownOpen(false);
  };
  const toggleBlogDropdown = () => {
    setIsBlogOpen(!isBlogOpen);
    setIsPagesOpen(false);
    setIsVegetablesDropdownOpen(false);
    setIsLocationDropdownOpen(false);
    setIsCategoriesOpen(false);
  };

  const toggleCategoriesDropdown = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
    setIsBlogOpen(false);
    setIsPagesOpen(false);
    setIsVegetablesDropdownOpen(false);
    setIsLocationDropdownOpen(false);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close all other dropdowns when opening mobile menu
    setIsCategoriesOpen(false);
    setIsPagesOpen(false);
    setIsBlogOpen(false);
    setIsVegetablesDropdownOpen(false);
    setIsLocationDropdownOpen(false);
    // Toggle active class on hamburger menu
    document.querySelector('.hamburger-menu').classList.toggle('active');
  };

  return (
    <>
      <div className="top-banner">
        <div className="banner-content">
          <span>Flat 50% Off On Grocery Shop.</span>
          <div className="utility-nav">            <a href="#help">Help?</a>
            <a href="#track">Track Order</a>
            <div className="dropdown">              <button className="dropdown-btn">
                Language <span className="dropdown-arrow">▼</span>
              </button>
              <div className="utility-dropdown">
                <div className="dropdown-item">English</div>
                <div className="dropdown-item">العربية</div>
                <div className="dropdown-item">Français</div>
                <div className="dropdown-item">हिन्दी</div>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropdown-btn">
                Currency <span className="dropdown-arrow">▼</span>
              </button>
              <div className="utility-dropdown">
                <div className="dropdown-item">USD ($)</div>
                <div className="dropdown-item">EUR (€)</div>
                <div className="dropdown-item">LBP (ل.ل)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="main-header">
        <div className="header-content">          <div className="logo">
            <img src="/logo.png" alt="Blue Berry" className="logo-img" />
          </div>          <div className="search-container">            <div className={`category-dropdown ${isVegetablesDropdownOpen ? 'active' : ''}`} onClick={toggleVegetablesDropdown}>
              <span>Vegetables</span>
              <span className={`dropdown-arrow ${isVegetablesDropdownOpen ? 'open' : ''}`}>▼</span>
              {isVegetablesDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-item">Bakery</div>
                  <div className="dropdown-item">Cold Drinks</div>
                  <div className="dropdown-item">Fruits</div>
                </div>
              )}
            </div>
            <div className="search-divider"></div>
            <div className="search-input-wrapper">
              <input 
                type="text" 
                placeholder="Search products..."
                className="search-input"
              />              <button className="search-button">
                <img src="/icons8-search-24.png" alt="Search" className="icon-img" />
              </button>
            </div>
          </div>          <div className="header-actions">
            <div className="account-section">
              <span className="account-icon">
                <img src="/icons8-account-24.png" alt="Account" className="icon-img" />
              </span>              <div className="account-info">
                <div>Account</div>
                <div className="action-subtitle">Login</div>
                <div className="dropdown-menu account-dropdown">
                  <div className="dropdown-item">Register</div>
                  <div className="dropdown-item">Login</div>
                  <div className="dropdown-item">Checkout</div>
                </div>
              </div>
            </div>            <div className="wishlist-section">
              <span className="wishlist-icon">
                <img src="/icons8-star-32.png" alt="Wishlist" className="icon-img" />
              </span>
              <div className="wishlist-info">
                <div>3 items</div>
                <div className="action-subtitle">Wishlist</div>
              </div>
            </div>
            <div className="cart-section">
              <span className="cart-icon">
                <img src="/icons8-cart-48.png" alt="Cart" className="icon-img" />
              </span>
              <div className="cart-info">
                <div>4 items</div>
                <div className="action-subtitle">Cart</div>
              </div>
            </div>
            <div className="hamburger-menu" onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>      <nav className="main-nav">
        <div className="nav-content">
          <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-nav-header">
              <div className="mobile-nav-title">Menu</div>
              <div className="mobile-nav-close" onClick={toggleMobileMenu}>✕</div>
            </div>
            <div className="mobile-nav-content">
              <div className="mobile-nav-item">Home</div>
              <div className="mobile-nav-item" onClick={toggleCategoriesDropdown}>
                Categories
                <span className={`dropdown-arrow ${isCategoriesOpen ? 'open' : ''}`}>▼</span>
              </div>
              <div className="mobile-nav-item">Products</div>
              <div className="mobile-nav-item">Pages</div>
              <div className="mobile-nav-item">Blog</div>
              <div className="mobile-nav-item">Offers</div>
            </div>
          </div>
          <div className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
          
          <div className="nav-item desktop-only">
            <img src="/icons8-categorize-80.png" alt="Categories" className="category-icon" /></div>
          <div className="nav-item">Home</div>
          <div className="nav-item" onClick={toggleCategoriesDropdown}>
            Categories
            <span className={`dropdown-arrow ${isCategoriesOpen ? 'open' : ''}`}>○</span>            {isCategoriesOpen && (
              <div className="dropdown-menu categories-dropdown">
                <div className="dropdown-section">
                  <div className="dropdown-header">Classic</div>
                  <div className="dropdown-item">Left sidebar 3 column</div>
                  <div className="dropdown-item">Left sidebar 4 column</div>
                  <div className="dropdown-item">Right sidebar 3 column</div>
                  <div className="dropdown-item">Right sidebar 4 column</div>
                  <div className="dropdown-item">Full width 4 column</div>
                </div>
                <div className="dropdown-section">
                  <div className="dropdown-header">Banner</div>
                  <div className="dropdown-item">Left sidebar 3 column</div>
                  <div className="dropdown-item">Left sidebar 4 column</div>
                  <div className="dropdown-item">Right sidebar 3 column</div>
                  <div className="dropdown-item">Right sidebar 4 column</div>
                  <div className="dropdown-item">Full width 4 column</div>
                </div>
                <div className="dropdown-section">
                  <div className="dropdown-header">Columns</div>
                  <div className="dropdown-item">3 column Full width</div>
                  <div className="dropdown-item">4 column Full width</div>
                  <div className="dropdown-item">5 column Full width</div>
                  <div className="dropdown-item">6 column Full width</div>
                  <div className="dropdown-item">Banner 3 column</div>
                </div>
                <div className="dropdown-section">
                  <div className="dropdown-header">List</div>
                  <div className="dropdown-item">shop Left sidebar</div>
                  <div className="dropdown-item">shop right sidebar</div>
                  <div className="dropdown-item">Banner left sidebar</div>
                  <div className="dropdown-item">Banner Right sidebar</div>
                  <div className="dropdown-item">Full width 2 column</div>
                </div>
              </div>
            )}
          </div>          <div className="nav-item">
            Products
            <span className="dropdown-arrow">○</span>
            <div className="dropdown-menu products-dropdown">
              <div className="dropdown-item has-submenu">
                Product Page
                <div className="submenu">
                  <div className="dropdown-item">Left Sidebar</div>
                  <div className="dropdown-item">Right Sidebar</div>
                  <div className="dropdown-item">No Sidebar</div>
                  <div className="dropdown-item">Three Column</div>
                </div>
              </div>
              <div className="dropdown-item has-submenu">
                Product According
                <div className="submenu">
                  <div className="dropdown-item">Vertical Tabs</div>
                  <div className="dropdown-item">Horizontal Tabs</div>
                  <div className="dropdown-item">Accordion Style</div>
                  <div className="dropdown-item">Sticky Description</div>
                </div>
              </div>
              <div className="dropdown-item">Product full width</div>
              <div className="dropdown-item">accordion full width</div>
            </div>
          </div>          <div className="nav-item">
            Pages
            <span className="dropdown-arrow">○</span>
            <div className="dropdown-menu pages-dropdown">
              <div className="dropdown-item">About Us</div>
              <div className="dropdown-item">Contact Us</div>
              <div className="dropdown-item">Cart</div>
              <div className="dropdown-item">Checkout</div>
              <div className="dropdown-item">Compare</div>
              <div className="dropdown-item">FAQ</div>
              <div className="dropdown-item">Login</div>
              <div className="dropdown-item">Register</div>
            </div>
          </div>          <div className="nav-item">
            Blog
            <span className="dropdown-arrow">○</span>
            <div className="dropdown-menu blog-dropdown">
              <div className="dropdown-item">Left sidebar</div>
              <div className="dropdown-item">Right sidebar</div>
              <div className="dropdown-item">Full width</div>
              <div className="dropdown-item">Detail Left sidebar</div>
              <div className="dropdown-item">Detail Right Sidebar</div>
              <div className="dropdown-item">Detail Full width</div>
            </div>
          </div>          <div className="nav-item">
            Offers
          </div><div className={`nav-item location-selector ${isLocationDropdownOpen ? 'active' : ''}`} onClick={toggleLocationDropdown}>
            <img src="/icons8-location-48.png" alt="Location" className="location-icon" />
            <span className="location-text">Beirut</span>
            <span className={`dropdown-arrow ${isLocationDropdownOpen ? 'open' : ''}`}>▼</span>
            <div className="dropdown-menu location-dropdown">
              <div className="dropdown-item">Beirut</div>
              <div className="dropdown-item">Tripoli</div>
              <div className="dropdown-item">Saida</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;