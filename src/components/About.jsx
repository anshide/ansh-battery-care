import React from 'react';

const About = () => {
  const features = [
    'Authorized Exide & Powerzone dealer',
    'Genuine warranty on all products',
    'Quick doorstep installation',
    'Free old battery pickup & exchange',
  ];

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Visual side */}
          <div className="about-visual">🔋</div>

          {/* Content side */}
          <div className="about-content">
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              Powering Sangaria Since Day One
            </h2>
            <p className="section-subtitle">
              Ansh Battery Care is a leading provider of high-quality batteries
              and inverters in Sangaria, Hanumangarh. We specialize in reliable
              power solutions for cars, bikes, and home backup systems.
            </p>
            <p>
              As an authorized dealer for Exide and Powerzone, every product we
              sell comes with a genuine manufacturer warranty and our commitment
              to honest service.
            </p>
            <div className="about-features">
              {features.map((feature, index) => (
                <div className="about-feature" key={index}>
                  <span className="check">✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;