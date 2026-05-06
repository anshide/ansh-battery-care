import React, { useState } from 'react';

const BatteryFinder = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSearch = () => {
    if (vehicleType) {
      setShowResult(true);
    }
  };

  const resetResult = () => {
    setShowResult(false);
  };

  const getRecommendations = () => {
    if (vehicleType === 'car') {
      if (brand === 'tata' && model === 'safari' && fuelType === 'diesel') {
        return [
          { company: 'Powerzone', name: 'PZ8000L/R', warranty: '36 Months', image: '', infoLink: '#' },
          { company: 'Exide', name: 'Express XP 800F', warranty: '42 Months', image: '', infoLink: '#' }
        ];
      }
      if (brand === 'toyota' && model === 'innova' && fuelType === 'diesel') {
        return [
          { company: 'Powerzone', name: 'PZ7000R', warranty: '36 Months', image: '', infoLink: '#' },
          { company: 'Exide', name: 'Ride700L', warranty: '24 Months', image: '', infoLink: '#' }
        ];
      }
      if (brand === 'maruti' && model === 'swift' && fuelType === 'diesel') {
        return [
          { company: 'Exide', name: 'MILDIN50', warranty: 'Contact for details', image: '', infoLink: '#' }
        ];
      }
      if (brand && model && fuelType) {
         return `✅ Recommended for ${brand} ${model} (${fuelType}): Please contact us for the exact match.`;
      }
      return '✅ Recommended: 35Ah – 45Ah battery. Contact us for exact match.';
    }
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
                setFuelType('');
                resetResult();
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
              onChange={(e) => { 
                setBrand(e.target.value); 
                setModel(''); 
                setFuelType(''); 
                resetResult(); 
              }}
              disabled={!vehicleType}
            >
              <option value="">Select Brand</option>
              <option value="maruti">Maruti Suzuki</option>
              <option value="tata">Tata Motors</option>
              <option value="toyota">Toyota</option>
            </select>

            <select
              className="finder-select"
              value={model}
              onChange={(e) => { 
                setModel(e.target.value); 
                setFuelType(''); 
                resetResult(); 
              }}
              disabled={!brand}
            >
              <option value="">Select Model</option>
              {brand === 'maruti' && <option value="swift">Swift</option>}
              {brand === 'tata' && <option value="safari">Safari</option>}
              {brand === 'toyota' && <option value="innova">Innova</option>}
            </select>

            <select
              className="finder-select"
              value={fuelType}
              onChange={(e) => { 
                setFuelType(e.target.value); 
                resetResult(); 
              }}
              disabled={!model}
            >
              <option value="">Fuel Type</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="cng">CNG</option>
            </select>
          </div>

          <button className="finder-btn" onClick={handleSearch}>Search Battery</button>

          {showResult && (() => {
            const result = getRecommendations();
            if (!result) return null;
            
            if (Array.isArray(result)) {
              if (result.length === 0) return null;
              return (
                <div className="finder-result-cards">
                  {result.map((battery, idx) => (
                    <div className="battery-card" key={idx}>
                      <div className="battery-image-placeholder">
                        {battery.image ? (
                          <img src={battery.image} alt={battery.name} />
                        ) : (
                          <span>Image Coming Soon</span>
                        )}
                      </div>
                      <div className="battery-details">
                        <span className="battery-company">{battery.company}</span>
                        <h4>{battery.name}</h4>
                        <p className="battery-warranty">Warranty: {battery.warranty}</p>
                        <a 
                          href={battery.infoLink} 
                          className="battery-info-btn"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          More Info →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }

            return (
              <div className="finder-result">
                {result}
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default BatteryFinder;
