// src/components/ProductCard.js
import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  return (
    <div className="product-card fade-in-up">
      <div className="product-badge">🔥 Fresh!</div>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-emoji">🐔</div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <div className="price">Rp {product.price.toLocaleString()}</div>
        <button 
          className={`add-to-cart ${isAdding ? 'adding' : ''}`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? '✅ Ditambahkan!' : '🛒 Tambah ke Keranjang'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;