import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="logo">
          Ansh<span>Battery</span>
        </a>

        {/* Hamburger button for mobile */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#finder" onClick={() => setMenuOpen(false)}>Battery Finder</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="tel:+919667222000" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
