import React, { useState } from 'react';

const BatteryFinder = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  const getRecommendation = () => {
    if (vehicleType === 'car') return '✅ Recommended: 35Ah – 45Ah battery';
    if (vehicleType === 'bike') return '✅ Recommended: 4Ah – 7Ah battery';
    if (vehicleType === 'truck') return '✅ Recommended: 100Ah – 150Ah battery';
    return '';
  };

  return (
    <section className="section finder-section" id="finder">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Battery Finder</span>
          <h2 className="section-title">Find the Right Battery</h2>
          <p className="section-subtitle">
            Select your vehicle details to get an instant recommendation.
          </p>
        </div>

        <div className="finder-card">
          <h3>Quick Search</h3>
          <p className="finder-desc">Tell us about your vehicle and we'll suggest the best match.</p>

          <div className="finder-grid">
            <select
              className="finder-select"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
                setBrand('');
                setModel('');
              }}
            >
              <option value="">Vehicle Type</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="truck">Truck</option>
            </select>

            <select
              className="finder-select"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              disabled={!vehicleType}
            >
              <option value="">Select Brand</option>
              <option value="maruti">Maruti Suzuki</option>
              <option value="hyundai">Hyundai</option>
              <option value="tata">Tata Motors</option>
              <option value="honda">Honda</option>
            </select>

            <select
              className="finder-select"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              disabled={!brand}
            >
              <option value="">Select Model</option>
              <option value="swift">Swift</option>
              <option value="creta">Creta</option>
              <option value="nexon">Nexon</option>
              <option value="city">City</option>
            </select>
          </div>

          <button className="finder-btn">Search Battery</button>

          {getRecommendation() && (
            <div className="finder-result">
              {getRecommendation()}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BatteryFinder;
