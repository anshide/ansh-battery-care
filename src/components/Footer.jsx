import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              Ansh<span>Battery</span>
            </a>
            <p>
              Your trusted partner for quality batteries and inverters in
              Sangaria, Hanumangarh, Rajasthan.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#finder">Battery Finder</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <h4>Products</h4>
            <a href="#products">Car Batteries</a>
            <a href="#products">Bike Batteries</a>
            <a href="#products">Inverters & UPS</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Ansh Battery Care. All rights reserved.</p>
          <p>Sangaria, Hanumangarh, Rajasthan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
