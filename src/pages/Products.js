// src/pages/Products.js
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = ({ products, onAddToCart, isBlurred }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: '🐔 Semua Produk' },
    { id: 'whole', name: '🍗 Ayam Utuh' },
    { id: 'parts', name: '🥩 Potongan' },
    { id: 'organs', name: '🫀 Jeroan' }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'whole') return product.name.includes('Utuh');
    if (selectedCategory === 'parts') return !product.name.includes('Utuh') && !product.name.includes('Ati') && !product.name.includes('Ceker');
    if (selectedCategory === 'organs') return product.name.includes('Ati') || product.name.includes('Ceker');
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div className={`products-page ${isBlurred ? 'blurred' : ''}`}>
      <div className="container">
        <div className="products-header fade-in-up">
          <h1>🛒 Produk Ayam Kami</h1>
          <p>Pilih ayam segar favorit Anda dengan kualitas terbaik</p>
        </div>

        <div className="products-controls">
          <div className="category-filters">
            <h3>Kategori:</h3>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="sort-controls">
            <label htmlFor="sort">Urutkan:</label>
            <select 
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="name">Nama A-Z</option>
              <option value="price-low">Harga Terendah</option>
              <option value="price-high">Harga Tertinggi</option>
            </select>
          </div>
        </div>

        <div className="products-stats slide-in-left">
          <p>Menampilkan <strong>{sortedProducts.length}</strong> produk dari total <strong>{products.length}</strong> produk</p>
        </div>

        <div className="products-grid">
          {sortedProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="no-products">
            <div className="no-products-icon">😔</div>
            <h3>Tidak ada produk ditemukan</h3>
            <p>Coba pilih kategori lain atau reset filter</p>
            <button 
              className="reset-btn"
              onClick={() => setSelectedCategory('all')}
            >
              🔄 Tampilkan Semua Produk
            </button>
          </div>
        )}

        <div className="products-info">
          <div className="info-card">
            <h3>💡 Tips Memilih Ayam Segar</h3>
            <ul>
              <li>Pilih ayam dengan warna segar dan tidak pucat</li>
              <li>Periksa tekstur daging yang kenyal dan elastis</li>
              <li>Perhatikan aroma yang segar tanpa bau menyengat</li>
              <li>Simpan di chiller untuk menjaga kesegaran</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;