// src/pages/CartPage.js
import React from 'react';
import './CartPage.css';

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart, isBlurred }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className={`cart-page ${isBlurred ? 'blurred' : ''}`}>
      <div className="cart-page-header">
        <h1>🛒 Keranjang Belanja</h1>
        <p>Review dan kelola pesanan Anda</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart-page">
          <div className="empty-icon">😔</div>
          <h2>Keranjang Masih Kosong</h2>
          <p>Belum ada ayam segar di keranjang Anda</p>
          <small>Ayo jelajahi produk kami dan tambahkan ayam favorit!</small>
        </div>
      ) : (
        <div className="cart-page-content">
          <div className="cart-items-list">
            <div className="items-header">
              <h3>📦 Item dalam Keranjang</h3>
            </div>
            
            <div className="cart-items-container">
              {cartItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="cart-page-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="item-image">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const emoji = e.target.parentElement.querySelector('.item-emoji');
                          if (emoji) emoji.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className="item-emoji"
                      style={{ display: item.image ? 'none' : 'flex' }}
                    >
                      🐔
                    </div>
                  </div>
                  
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    {item.description && (
                      <p className="item-description">{item.description}</p>
                    )}
                    <p className="item-price">Rp {item.price.toLocaleString()}/item</p>
                  </div>

                  <div className="item-controls">
                    <div className="quantity-controls">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>

                    <div className="item-total-section">
                      <span className="total-label">Total</span>
                      <span className="item-total">Rp {(item.price * item.quantity).toLocaleString()}</span>
                    </div>

                    <button 
                      className="remove-item-btn"
                      onClick={() => onRemoveItem(item.id)}
                      title="Hapus dari keranjang"
                    >
                      🗑️ Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>📊 Ringkasan Pesanan</h3>
              <div className="summary-item">
                <span>Total Item:</span>
                <span>{itemCount} item</span>
              </div>
              <div className="summary-item">
                <span>Subtotal:</span>
                <span>Rp {total.toLocaleString()}</span>
              </div>
              <div className="summary-item total">
                <span>Total:</span>
                <span>Rp {total.toLocaleString()}</span>
              </div>
              <button className="checkout-btn">🚀 Checkout Sekarang</button>
              {cartItems.length > 0 && (
                <button 
                  className="clear-cart-btn"
                  onClick={onClearCart}
                >
                  🗑️ Kosongkan Keranjang
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;