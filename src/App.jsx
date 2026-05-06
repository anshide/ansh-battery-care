import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import BatteryFinder from './components/BatteryFinder';
import BillDemand from './components/BillDemand';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <BatteryFinder />
      <BillDemand />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
