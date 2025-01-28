import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">
          Logo
        </a>
      </div>

      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="hamburger"></span>
      </button>

      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <ul className="navbar-items">
          <li><a href="/">Home</a></li>
          <li><a href="/shows">Upcoming Dates</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

