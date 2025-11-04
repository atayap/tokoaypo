// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage'; // IMPORT BARU
import Cart from './components/Cart';
import { products } from './data/products';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State baru untuk blur

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('tokoAyamCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart items to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('tokoAyamCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    // Show notification feedback
    showNotification(`${product.name} ditambahkan ke keranjang!`);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(cartItems.map(item =>
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const removeFromCart = (productId) => {
    const product = cartItems.find(item => item.id === productId);
    setCartItems(cartItems.filter(item => item.id !== productId));
    
    // Show notification feedback
    if (product) {
      showNotification(`${product.name} dihapus dari keranjang!`);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    showNotification('Keranjang berhasil dikosongkan!');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Tutup menu saat navigasi
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function untuk handle menu toggle dari Header
  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  const showNotification = (message) => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification fade-in-up';
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">✅</span>
        <span class="notification-text">${message}</span>
      </div>
    `;
    
    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: var(--white);
      color: var(--text);
      padding: 1rem 1.5rem;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      border: 2px solid var(--primary);
      z-index: 10000;
      max-width: 300px;
      animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'fadeOut 0.3s ease-out';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const renderPage = () => {
    if (isLoading) {
      return (
        <div className="loading-page">
          <div className="loading-chicken bounce-medium">🐔</div>
          <h2>Memuat Ayam Segar...</h2>
          <p>Sedang menyiapkan pengalaman belanja terbaik untuk Anda</p>
        </div>
      );
    }

    switch (currentPage) {
      case 'home':
        return <Home isBlurred={isMenuOpen} />;
      case 'products':
        return <Products products={products} onAddToCart={addToCart} isBlurred={isMenuOpen} />;
      case 'about':
        return <About isBlurred={isMenuOpen} />;
      case 'contact':
        return <Contact isBlurred={isMenuOpen} />;
      case 'cart': // CASE BARU UNTUK HALAMAN KERANJANG
        return <CartPage 
          cartItems={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          onClearCart={clearCart}
          isBlurred={isMenuOpen}
        />;
      default:
        return <Home isBlurred={isMenuOpen} />;
    }
  };

  return (
    <div className="App">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        onMenuToggle={handleMenuToggle}
        isMenuOpen={isMenuOpen}
      />
      
      <div className={`main-container ${isMenuOpen ? 'blurred' : ''}`}>
        {/* Sembunyikan Cart sidebar di mobile, tampilkan hanya di desktop */}
        <div className="sidebar desktop-only">
          <Cart 
            cartItems={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
            onClearCart={clearCart}
            totalAmount={getCartTotal()}
            itemCount={getCartItemCount()}
            isBlurred={isMenuOpen}
          />
        </div>
        
        <div className="content">
          {/* PAGE NAV - Hanya tampil di desktop */}
          <nav className="page-nav desktop-only">
            <button 
              className={currentPage === 'home' ? 'active' : ''}
              onClick={() => handleNavigate('home')}
            >
              🏠 Home
            </button>
            <button 
              className={currentPage === 'products' ? 'active' : ''}
              onClick={() => handleNavigate('products')}
            >
              🛒 Produk
            </button>
            <button 
              className={currentPage === 'about' ? 'active' : ''}
              onClick={() => handleNavigate('about')}
            >
              📖 Tentang
            </button>
            <button 
              className={currentPage === 'contact' ? 'active' : ''}
              onClick={() => handleNavigate('contact')}
            >
              📞 Kontak
            </button>
            {/* MENU KERANJANG DIHAPUS DARI DESKTOP - KARENA SUDAH ADA SIDEBAR KERANJANG DI SEBELAH KIRI */}
          </nav>
          
          {renderPage()}
        </div>
      </div>

      {/* Floating Cart Badge for mobile - Tampilkan hanya jika bukan di halaman cart */}
      {getCartItemCount() > 0 && currentPage !== 'cart' && (
        <div className={`floating-cart-badge ${isMenuOpen ? 'blurred' : ''}`}>
          <span className="cart-count">{getCartItemCount()}</span>
          <span className="cart-icon">🛒</span>
        </div>
      )}

      {/* Footer */}
      <footer className={`app-footer ${isMenuOpen ? 'blurred' : ''}`}>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>🍗 Toko Ayam Potong Segar</h3>
              <p>Menyediakan ayam segar berkualitas untuk keluarga Indonesia sejak 2010.</p>
            </div>
            <div className="footer-section">
              <h4>Kontak</h4>
              <p>📞 (022) 1234-5678</p>
              <p>📧 info@ayampotongsegar.com</p>
            </div>
            <div className="footer-section">
              <h4>Jam Operasional</h4>
              <p>Senin - Minggu: 06:00 - 20:00 WIB</p>
              <p>Minggu: 06:00 - 15:00 WIB</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Toko Ayam Potong Segar. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;