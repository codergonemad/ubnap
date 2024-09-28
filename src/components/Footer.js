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
            <p>Advancing healthcare through innovation, integrity, and excellence.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/third-party-manufacturing">Third Party Manufacturing</Link></li>
              <li><Link to="/pcd-franchise">PCD Franchise</Link></li>
              {/* <li><Link to="/about">About Us</Link></li> */}
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>5-3, Sher Road, Near L&T Gate No. 7, Opp. ETP House, Powai Andheri Ext, Mumbai-400072</p>
            <p>Email: mktubnap@gmail.com</p>
            <p>Phone: +91 9161655656</p>
            <p>Developer: CoderGoneMad@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 UBNAP Pharmaceuticals. All rights reserved.</p>
          <p>Designed and developed by <Link to="/developer">CoderGoneMad</Link></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;