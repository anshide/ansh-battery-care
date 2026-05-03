import React from 'react';

const Agencies = () => {
  const brands = ['EXIDE', 'POWERZONE'];

  return (
    <section id="agencies" style={{ backgroundColor: '#fff' }}>
      <h2 className="section-title">Authorized Partners</h2>
      <div className="agencies-list">
        {brands.map((brand, index) => (
          <span className="agency-logo" key={index}>{brand}</span>
        ))}
      </div>
    </section>
  );
};

export default Agencies;
