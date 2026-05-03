import React from 'react';

const WhyChooseUs = () => {
  const points = [
    {
      icon: '💎',
      title: 'Genuine Products',
      desc: 'Authorized dealer of Exide and Powerzone with 100% original products.',
    },
    {
      icon: '🏷️',
      title: 'Best Prices',
      desc: 'Competitive rates in the region with high exchange value on old batteries.',
    },
    {
      icon: '⚡',
      title: 'Fast Installation',
      desc: 'Quick doorstep delivery and installation across Sangaria.',
    },
    {
      icon: '🛡️',
      title: 'Trusted Warranty',
      desc: 'Genuine manufacturer warranty and reliable after-sales support.',
    },
  ];

  return (
    <section className="section why-section" id="why-us">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Built on Trust & Quality</h2>
          <p className="section-subtitle">
            Here's what makes Ansh Battery Care the preferred choice in Sangaria.
          </p>
        </div>
        <div className="why-grid">
          {points.map((point, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;