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
      <nav className="navbar">
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/contact">Contact</Link></li>
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
