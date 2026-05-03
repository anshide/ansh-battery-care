import React from 'react';

const Hero = () => {
  return (
    <header className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-badge">⚡ Authorized Exide & Powerzone Dealer</div>
        <h1>Reliable Power for Your Vehicles & Home</h1>
        <p>
          Quality batteries and inverters at competitive prices in Sangaria,
          Hanumangarh — backed by genuine warranties and expert service.
        </p>
        <div className="hero-buttons">
          <a href="#finder" className="btn-primary">
            Find Your Battery →
          </a>
          <a href="#contact" className="btn-outline">
            Contact Us
          </a>
        </div>

        {/* Trust stats */}
        <div className="hero-stats">
          <div className="hero-stat">
            <h3>500+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="hero-stat">
            <h3>2</h3>
            <p>Top Brands</p>
          </div>
          <div className="hero-stat">
            <h3>5+</h3>
            <p>Years of Trust</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
