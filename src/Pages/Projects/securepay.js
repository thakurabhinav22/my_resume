import React from 'react';
import './SecurePay.css';
import Sp_Home from "../../assets/images/SP_home.jpg"

function SecurePay() {
  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>SecurePay</h1>
          <p className="hero-subtitle">Your trusted mobile payment solution.</p>
          <button className="hero-button">Download Now</button>
        </div>
        <div className="mobile-frame">
          <img
            src={Sp_Home}
            alt="SecurePay Home Screen"
            className="mobile-image"
          />
        </div>
      </section>

      {/* Feature Sections */}
      <section className="feature-section">
        <div className="feature-content">
          <h2>Track Everything</h2>
          <p>Monitor your finances with an intuitive dashboard.</p>
        </div>
        <div className="mobile-frame">
          <img
            src="https://placehold.co/360x640/1d1d1f/ffffff?text=Dashboard+Screen&font=montserrat"
            alt="Dashboard Screen"
            className="mobile-image"
          />
        </div>
      </section>

      <section className="feature-section reverse">
        <div className="feature-content">
          <h2>Seamless Payments</h2>
          <p>Process payments in real-time with detailed logs.</p>
        </div>
        <div className="mobile-frame">
          <img
            src="https://placehold.co/360x640/1d1d1f/ffffff?text=Payment+Logs+Screen&font=montserrat"
            alt="Payment Logs Screen"
            className="mobile-image"
          />
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-content">
          <h2>Know Your Balance</h2>
          <p>Stay updated with your account balance at a glance.</p>
        </div>
        <div className="mobile-frame">
          <img
            src="https://placehold.co/360x640/1d1d1f/ffffff?text=Balance+Screen&font=montserrat"
            alt="Balance Screen"
            className="mobile-image"
          />
        </div>
      </section>

      <section className="feature-section reverse">
        <div className="feature-content">
          <h2>Global Reach</h2>
          <p>Support for multiple currencies, making payments seamless worldwide.</p>
        </div>
        <div className="mobile-frame">
          <img
            src="https://placehold.co/360x640/1d1d1f/ffffff?text=Currency+Screen&font=montserrat"
            alt="Global Feature"
            className="mobile-image"
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-section">
        <h2>Built with Precision</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <div className="tech-icon">☕</div>
            <h3>Java</h3>
            <p>Core programming language for robust app logic.</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">📄</div>
            <h3>XML</h3>
            <p>Structured layouts for intuitive UI design.</p>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🔥</div>
            <h3>Firebase</h3>
            <p>Backend for real-time data and authentication.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Start Using SecurePay Today</h2>
        <button className="cta-button">Download SecurePay</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 SecurePay. A product by Abhinav.</p>
      </footer>
    </div>
  );
}

export default SecurePay;