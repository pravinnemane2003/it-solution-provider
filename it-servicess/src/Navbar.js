import React from 'react';
import './Navbar.css'; // Import the new CSS file
import './TeamPage';
import  { Link } from 'react-router-dom';
import { useState } from 'react';
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="navbar">
      <div className="brand">ITs Solutions Providers</div>
      <div className="menu">
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className="navbar">
 
      <ul className={`nav-links  ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
        {/* <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="/services">Services</a>
        <a href="/team">Team</a>
        <a href="/contact">Contact</a> */}
      </div>
    </div>
  );
}

export default NavBar;
