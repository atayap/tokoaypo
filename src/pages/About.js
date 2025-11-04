// src/pages/About.js
import React from 'react';
import './About.css';

const About = ({ isBlurred }) => {
  return (
    <div className={`about-page ${isBlurred ? 'blurred' : ''}`}>
      <div className="container">
        <div className="about-header fade-in-up-stagger-1">
          <h1>📖 Tentang Toko Ayam Kami</h1>
          <p>Cerita di Balik Kesegaran Setiap Potongan</p>
        </div>

        <div className="about-content">
          <div className="about-story slide-in-left-stagger-1">
            <div className="story-card">
              <h2>🐔 Cerita Kami</h2>
              <p>
                Berdiri sejak 2010, Toko Ayam Potong Segar dimulai dari kecintaan 
                terhadap kualitas dan kesegaran. Kami percaya bahwa ayam segar 
                adalah kunci masakan yang lezat dan sehat untuk keluarga Indonesia.
              </p>
              <p>
                Dari sebuah warung kecil, kini kami berkembang menjadi toko ayam 
                terpercaya dengan ribuan pelanggan setia yang mempercayakan 
                kebutuhan protein mereka pada kami.
              </p>
            </div>
          </div>

          <div className="about-values">
            <h2 className="section-title fade-in-up-stagger-1">💎 Nilai-Nilai Kami</h2>
            <div className="values-grid">
              <div className="value-card bounce-slow">
                <div className="value-icon">🎯</div>
                <h3>Kualitas Terbaik</h3>
                <p>Setiap ayam dipilih dengan standar kualitas tertinggi</p>
              </div>
              <div className="value-card bounce-medium">
                <div className="value-icon">❤️</div>
                <h3>Pelayanan Ramah</h3>
                <p>Tim kami siap melayani dengan senyuman dan keramahan</p>
              </div>
              <div className="value-card bounce-slow">
                <div className="value-icon">⚡</div>
                <h3>Pengiriman Cepat</h3>
                <p>Pesanan diproses dan dikirim dengan cepat dan tepat</p>
              </div>
              <div className="value-card bounce-medium">
                <div className="value-icon">💰</div>
                <h3>Harga Terjangkau</h3>
                <p>Kualitas premium dengan harga yang bersahabat</p>
              </div>
            </div>
          </div>

          <div className="about-process">
            <h2 className="section-title fade-in-up-stagger-1">🔬 Proses Kami</h2>
            <div className="process-steps">
              <div className="process-step fade-in-up-stagger-1">
                <div className="step-number bounce-slow">1</div>
                <h3>Seleksi Peternakan</h3>
                <p>Bekerja sama dengan peternakan terbaik yang menerapkan standar kesejahteraan hewan</p>
              </div>
              <div className="process-step fade-in-up-stagger-2">
                <div className="step-number bounce-medium">2</div>
                <h3>Pemotongan Higienis</h3>
                <p>Proses pemotongan dilakukan di tempat yang bersih dan sesuai standar kesehatan</p>
              </div>
              <div className="process-step fade-in-up-stagger-3">
                <div className="step-number bounce-slow">3</div>
                <h3>Pengecekan Kualitas</h3>
                <p>Setiap potongan melalui proses pengecekan ketat sebelum sampai ke customer</p>
              </div>
              <div className="process-step fade-in-up-stagger-1">
                <div className="step-number bounce-medium">4</div>
                <h3>Pengemasan & Pengiriman</h3>
                <p>Dikemas dengan baik dan dikirim langsung ke rumah Anda</p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2 className="section-title fade-in-up-stagger-1">👥 Tim Kami</h2>
            <div className="team-grid">
              <div className="team-member slide-in-left-stagger-1">
                <div className="member-avatar bounce-slow">👨‍🍳</div>
                <h3>Budi Santoso</h3>
                <p>Founder & Head of Quality</p>
                <p>15+ tahun pengalaman di industri ayam potong</p>
              </div>
              <div className="team-member slide-in-left-stagger-2">
                <div className="member-avatar bounce-medium">👩‍💼</div>
                <h3>Sari Wijaya</h3>
                <p>Customer Service Manager</p>
                <p>Selalu siap membantu dengan senyuman</p>
              </div>
              <div className="team-member slide-in-left-stagger-3">
                <div className="member-avatar bounce-slow">🚚</div>
                <h3>Agus Delivery</h3>
                <p>Delivery Expert</p>
                <p>Pengiriman tercepat di kota</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;