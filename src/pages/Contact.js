// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ isBlurred }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className={`contact-page ${isBlurred ? 'blurred' : ''}`}>
      <div className="container">
        <div className="contact-header fade-in-up-stagger-1">
          <h1>📞 Hubungi Kami</h1>
          <p>Kami siap melayani dan menjawab pertanyaan Anda</p>
        </div>

        <div className="contact-content">
          <div className="contact-info slide-in-left-stagger-1">
            <div className="info-card">
              <h2>📍 Informasi Kontak</h2>
              
              <div className="contact-item fade-in-up-stagger-1">
                <div className="contact-icon bounce-slow">🏪</div>
                <div className="contact-detail">
                  <h3>Alamat Toko</h3>
                  <p>Jl. Ayam Sejahtera No. 123<br/>Kota Bandung, Jawa Barat 40123</p>
                </div>
              </div>

              <div className="contact-item fade-in-up-stagger-2">
                <div className="contact-icon bounce-medium">📞</div>
                <div className="contact-detail">
                  <h3>Telepon</h3>
                  <p>(022) 1234-5678<br/>0812-3456-7890 (WhatsApp)</p>
                </div>
              </div>

              <div className="contact-item fade-in-up-stagger-3">
                <div className="contact-icon bounce-slow">✉️</div>
                <div className="contact-detail">
                  <h3>Email</h3>
                  <p>info@ayampotongsegar.com<br/>order@ayampotongsegar.com</p>
                </div>
              </div>

              <div className="contact-item fade-in-up-stagger-1">
                <div className="contact-icon bounce-medium">🕒</div>
                <div className="contact-detail">
                  <h3>Jam Operasional</h3>
                  <p>Senin - Minggu: 06:00 - 20:00 WIB<br/>Minggu: 06:00 - 15:00 WIB</p>
                </div>
              </div>
            </div>

            <div className="map-section fade-in-up-stagger-2">
              <h3>🗺️ Lokasi Kami</h3>
              <div className="map-placeholder">
                <div className="map-emoji float-slow">🗺️</div>
                <p>Peta interaktif akan ditampilkan di sini</p>
                <small>Jl. Ayam Sejahtera No. 123, Bandung</small>
              </div>
            </div>
          </div>

          <div className="contact-form slide-in-left-stagger-2">
            <form onSubmit={handleSubmit} className="form-card">
              <h2>✉️ Kirim Pesan</h2>
              
              <div className="form-group fade-in-up-stagger-1">
                <label htmlFor="name">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              <div className="form-group fade-in-up-stagger-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="nama@email.com"
                />
              </div>

              <div className="form-group fade-in-up-stagger-3">
                <label htmlFor="phone">Nomor Telepon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="08xxxxxxxxxx"
                />
              </div>

              <div className="form-group fade-in-up-stagger-1">
                <label htmlFor="message">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn fade-in-up-stagger-2">
                🚀 Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        <div className="faq-section">
          <h2 className="section-title fade-in-up-stagger-1">❓ Pertanyaan Umum</h2>
          <div className="faq-grid">
            <div className="faq-item fade-in-up-stagger-1">
              <h3 className="bounce-slow">🕒 Berapa lama waktu pengiriman?</h3>
              <p>Pengiriman same-day untuk pesanan sebelum jam 14.00, next-day delivery untuk pesanan setelahnya.</p>
            </div>
            <div className="faq-item fade-in-up-stagger-2">
              <h3 className="bounce-medium">💰 Apa saja metode pembayaran?</h3>
              <p>Kami menerima transfer bank, COD (Cash on Delivery), dan pembayaran digital (GoPay, OVO, Dana).</p>
            </div>
            <div className="faq-item fade-in-up-stagger-3">
              <h3 className="bounce-slow">📦 Bagaimana dengan pengemasan?</h3>
              <p>Ayam dikemas dalam box styrofoam dengan ice gel untuk menjaga kesegaran selama pengiriman.</p>
            </div>
            <div className="faq-item fade-in-up-stagger-1">
              <h3 className="bounce-medium">🔄 Apa kebijakan retur?</h3>
              <p>Kami menerima komplain dalam 2 jam setelah penerimaan produk jika ada ketidaksesuaian.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;