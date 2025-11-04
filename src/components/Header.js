// src/components/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ currentPage, onNavigate, onMenuToggle, isMenuOpen }) => {
  const [localMenuOpen, setLocalMenuOpen] = useState(false);

  // Sync dengan parent state
  useEffect(() => {
    setLocalMenuOpen(isMenuOpen);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    const newState = !localMenuOpen;
    setLocalMenuOpen(newState);
    onMenuToggle(newState);
  };

  const handleMenuClick = (page) => {
    onNavigate(page);
    setLocalMenuOpen(false);
    onMenuToggle(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuContainer = document.querySelector('.menu-container');
      const menuToggle = document.querySelector('.menu-toggle');
      
      if (localMenuOpen && 
          menuContainer && 
          !menuContainer.contains(event.target) &&
          menuToggle &&
          !menuToggle.contains(event.target)) {
        setLocalMenuOpen(false);
        onMenuToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [localMenuOpen, onMenuToggle]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && localMenuOpen) {
        setLocalMenuOpen(false);
        onMenuToggle(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [localMenuOpen, onMenuToggle]);

  return (
    <header className="header">
      {/* HAPUS BUBBLE CONTAINER */}
      
      <div className="container">
        <div className="logo">
          <div className="logo-icon bounce-slow">🍗</div>
          <div className="logo-text">
            <h1>Aypo</h1>
            <p>Toko Ayam Potong</p>
          </div>
        </div>
        
        {/* Hanya tampil di mobile */}
        <div className="menu-container mobile-only">
          <button 
            className={`menu-toggle ${localMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={localMenuOpen}
          >
            <span className="menu-text">MENU</span>
            <span className="menu-text-back">MENU</span>
          </button>
          
          {/* Dropdown Menu */}
          <div className={`dropdown-menu ${localMenuOpen ? 'show' : ''}`}>
            <button 
              className={`dropdown-item ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleMenuClick('home')}
            >
              <span className="item-icon">🏠</span>
              <span className="item-text">Home</span>
            </button>
            <button 
              className={`dropdown-item ${currentPage === 'products' ? 'active' : ''}`}
              onClick={() => handleMenuClick('products')}
            >
              <span className="item-icon">🛒</span>
              <span className="item-text">Produk</span>
            </button>
            <button 
              className={`dropdown-item ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => handleMenuClick('about')}
            >
              <span className="item-icon">📖</span>
              <span className="item-text">Tentang</span>
            </button>
            <button 
              className={`dropdown-item ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => handleMenuClick('contact')}
            >
              <span className="item-icon">📞</span>
              <span className="item-text">Kontak</span>
            </button>
            <button 
              className={`dropdown-item ${currentPage === 'cart' ? 'active' : ''}`}
              onClick={() => handleMenuClick('cart')}
            >
              <span className="item-icon">🛍️</span>
              <span className="item-text">Keranjang</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;