// src/pages/Home.js
import React, { useEffect, useRef } from 'react';
import './Home.css';
import logo from '../public/logo.png';

// Hook untuk animasi scroll yang optimal
const useScrollAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      const elements = ref.current.querySelectorAll('.feature-card, .promo-card');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};

const Home = ({ isBlurred }) => {
  const featuresRef = useScrollAnimation();

  // Fungsi untuk generate bola-bola putih random
  const generateBubbles = () => {
    const bubbles = [];
    const bubbleCount = 15;
    
    for (let i = 0; i < bubbleCount; i++) {
      const size = ['small', 'medium', 'large'][Math.floor(Math.random() * 3)];
      const speed = ['slow', 'medium-speed', 'fast'][Math.floor(Math.random() * 3)];
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      
      bubbles.push(
        <div
          key={i}
          className={`bubble ${size} ${speed}`}
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`
          }}
        />
      );
    }
    
    return bubbles;
  };

  return (
    <div className={`home ${isBlurred ? 'blurred' : ''}`}>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-logo">
            <img 
              src="https://ibb.co.com/5hmjBDjv" 
              alt="Ayam Potong Segar Logo" 
              className="favicon-image"
            />
          </div>
          <h1>Ayam Segar<br/>Untuk Keluarga Bahagia!</h1>
          <p>Dapatkan ayam potong segar langsung dari peternakan dengan kualitas terbaik dan harga spesial!</p>
          <button className="cta-button">🎯 Lihat Produk Spesial</button>
        </div>
        <div className="hero-decoration">
          {/* BOLA-BOLA PUTIH DENGAN ANIMASI NAIK */}
          {generateBubbles()}
        </div>
      </section>

      <section className="features" ref={featuresRef}>
        <div className="container">
          <h2 className="section-title">Kenapa Pilih Ayam Kami? 🤔</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Segar Setiap Hari</h3>
              <p>Ayam dipotong setiap pagi dengan proses yang cepat dan higienis</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">☪️</div>
              <h3>Halal & Terjamin</h3>
              <p>Proses pemotongan sesuai syariat Islam dan terjamin kehalalannya</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Gratis Ongkir</h3>
              <p>Gratis pengiriman untuk pembelian di atas Rp 100.000 area sekitar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="promo">
        <div className="container">
          <div className="promo-card">
            <div className="promo-content">
              <h2>🔥Promo Spesial!🔥</h2>
              <p>Dapatkan diskon 20% untuk pembelian pertama dengan minimum belanja Rp 50.000!</p>
              <button className="promo-button">🛒 Beli Sekarang</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;