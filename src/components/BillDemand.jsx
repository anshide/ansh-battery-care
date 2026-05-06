import React, { useState } from 'react';

const BillDemand = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleDemandBill = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill out both your name and phone number.');
      return;
    }

    const message = `Hello, I would like to request a copy of my bill/invoice.\n\n*Name:* ${name}\n*Phone:* ${phone}`;
    const whatsappUrl = `https://wa.me/919667222000?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section bill-section" id="bill-demand">
      <div className="container">
        <div className="bill-grid">
          <div className="bill-content">
            <span className="section-label">Bill Request</span>
            <h2 className="section-title">Lost your invoice?</h2>
            <p className="section-subtitle">
              Don't worry! Enter your details below to request a digital copy of your bill directly via WhatsApp. 
              We'll find your records and send it to you promptly.
            </p>
          </div>

          <div className="bill-form-card">
            <h3>Request Your Bill</h3>
            <form onSubmit={handleDemandBill} className="bill-form">
              <div className="form-group">
                <label htmlFor="billName">Full Name</label>
                <input
                  type="text"
                  id="billName"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="billPhone">Phone Number</label>
                <input
                  type="tel"
                  id="billPhone"
                  placeholder="Enter registered phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-primary bill-btn">
                Demand Bill on WhatsApp →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillDemand;
