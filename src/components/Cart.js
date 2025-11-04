// src/components/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, isBlurred }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={`cart ${isBlurred ? 'blurred' : ''} ${cartItems.length === 0 ? 'empty' : ''}`}>
      <div className="cart-header">
        <h2>🛒 Keranjang Belanja</h2>
        <div className="cart-icon">📦</div>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">😔</div>
          <p>Keranjang masih kosong</p>
          <small>Ayo isi dengan ayam segar!</small>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div 
                key={item.id} 
                className="cart-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* GAMBAR PRODUK */}
                <img 
                  src={item.image || '/api/placeholder/50/50'} 
                  alt={item.name}
                  className="item-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9IiNGRkM0NjIiLz4KPHN2ZyB4PSIxMiIgeT0iMTIiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1QTM5MjEiIHN0cm9rZS13aWR0aD0iMiI+CjxwYXRoIGQ9Ik04IDdWMTdNMTYgN1YxN00zIDIxSDIxTTMgOUg3TTE3IDlIMjFNOSA5SDE1TTkgMTdIMTVNOSAyMUgxNSIvPgo8L3N2Zz4KPC9zdmc+';
                  }}
                />
                
                {/* INFORMASI PRODUK */}
                <div className="item-info">
                  <h4 className="item-title" title={item.name}>
                    {item.name}
                  </h4>
                  <p className="item-price">
                    Rp {item.price.toLocaleString()}
                  </p>
                </div>
                
                {/* CONTROLS: QUANTITY + HAPUS */}
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
                  
                  <button 
                    className="remove-btn"
                    onClick={() => onRemoveItem(item.id)}
                    title="Hapus dari keranjang"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-total">
            <strong>Total: Rp {total.toLocaleString()}</strong>
          </div>
          
          <button className="checkout-btn">
            🚀 Checkout Sekarang
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;