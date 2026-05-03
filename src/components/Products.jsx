import React, { useState } from 'react';

const Products = () => {
  const categories = {
    car: [
      { name: 'Exide Epiq', desc: 'Premium long-life battery with 6-year warranty for sedans and SUVs.' },
      { name: 'Amaron Flo', desc: 'High-cranking power designed for all weather conditions.' },
      { name: 'Tata Green Silver', desc: 'Reliable performance for daily city commutes and short trips.' },
    ],
    bike: [
      { name: 'Exide Xplore', desc: 'Spill-proof VRLA battery — maintenance-free for everyday rides.' },
      { name: 'Amaron Pro Bike', desc: 'Consistent power for smooth starts every single time.' },
    ],
    inverter: [
      { name: 'Luminous Zelio', desc: 'Smart home UPS with intuitive digital display and auto-reset.' },
      { name: 'Microtek EB 700', desc: 'Heavy-duty power backup trusted by thousands of homes.' },
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
