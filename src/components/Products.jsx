import React, { useState } from 'react';

const Products = () => {
  const categories = {
    car: [
      { name: 'Powerzone PZ8000L/R', desc: 'Ideal for Tata Safari (Diesel). Includes a 36-month warranty.' },
      { name: 'Exide Express XP 800F', desc: 'Ideal for Tata Safari (Diesel). Includes a 42-month warranty.' },
      { name: 'Powerzone PZ7000R', desc: 'Ideal for Toyota Innova (Diesel). Includes a 36-month warranty.' },
      { name: 'Exide Ride700L', desc: 'Ideal for Toyota Innova (Diesel). Includes a 24-month warranty.' },
      { name: 'Exide MILDIN50', desc: 'Ideal for Maruti Swift (Diesel). Warranty details available upon inquiry.' },
    ],
    bike: [
      { name: 'Exide Xplore', desc: 'Spill-proof VRLA battery — maintenance-free for everyday rides.' },
      { name: 'Amaron Pro Bike', desc: 'Consistent power for smooth starts every single time.' },
      { name: 'Dummy Bike Battery', desc: 'Details for your new bike battery will go here.' },
    ],
    inverter: [
      { name: 'Luminous Zelio', desc: 'Smart home UPS with intuitive digital display and auto-reset.' },
      { name: 'Microtek EB 700', desc: 'Heavy-duty power backup trusted by thousands of homes.' },
      { name: 'Dummy Inverter/Battery', desc: 'Details for your new inverter battery will go here.' },
    ],
  };

  const tabs = [
    { key: 'car', label: '🚗  Car Batteries' },
    { key: 'bike', label: '🏍️  Bike Batteries' },
    { key: 'inverter', label: '🔌  Inverters & UPS' },
  ];

  const [activeTab, setActiveTab] = useState('car');

  const getWhatsAppLink = (itemName) => {
    return `https://wa.me/919667222000?text=Hi, I want to enquire about ${itemName}`;
  };

  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Products</span>
          <h2 className="section-title">Our Product Range</h2>
          <p className="section-subtitle">
            Explore top-quality batteries and inverters from trusted brands.
          </p>
        </div>

        {/* Tabs */}
        <div className="products-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="products-grid">
          {categories[activeTab].map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-icon">
                {activeTab === 'car' ? '🔋' : activeTab === 'bike' ? '⚡' : '🏠'}
              </div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <a
                href={getWhatsAppLink(item.name)}
                className="enquire-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire on WhatsApp →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
