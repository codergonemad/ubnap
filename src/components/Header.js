import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/icon.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="UBNAP Logo" className="logo-image" />
          <span className="logo-text">UBNAP</span>
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
            <li><Link to="/third-party-manufacturing" onClick={toggleMenu}>Third Party Manufacturing</Link></li>
            <li><Link to="/pcd-franchise" onClick={toggleMenu}>PCD Franchise</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;