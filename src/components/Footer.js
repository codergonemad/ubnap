// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About UBNAP</h3>
            <p>UBNAP Pharmaceuticals Pvt. Ltd.</p>
            {/* <p>Caring and curing of Mankind...</p> */}
            <p>Corporate Office: 5-3, Sher Road, Near L&T Gate No. 7, Opp. ETP House, Powai Andheri Ext, Mumbai-400072</p>
            {/* <p>“Step with care and great tact, and remember that Life's a GREAT BALANCING act.”</p> */}
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/ubnap">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/developer">Developer Info</Link></li>
              {/* <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li> */}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: mktubnap@gmail.com</p>
            <p>Phone: 9161655656</p>
            <p>Developer: your.email@example.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 UBNAP. All rights reserved.</p>
          <p>Designed and developed by <Link to="/developer">CoderGoneMad</Link></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
