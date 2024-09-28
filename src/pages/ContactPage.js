import React from 'react';
import DeveloperServices from '../components/DeveloperServices';
import companyImage from '../images/ubnap.png'; 

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        
        <div className="contact-content">
          <div className="company-image-container">
            <img src={companyImage} alt="UBNAP Pharmaceuticals" className="company-image" />
          </div>
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>5-3, Sher Road, Near L&T Gate No. 7, Opp. ETP House, Powai Andheri Ext, Mumbai-400072</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+91 9161655656</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>mktubnap@gmail.com</p>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/share/rm94nq3RCtvhq9GD/?mibextid=qi2Omg" className="social-link">
                <i className="fab fa-facebook"></i>
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/ubnap.pharmaceuticals/profilecard/?igsh=MXhlaTFjb2h1NjJtcA==" className="social-link">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-message">
          <h2>Join Us on Our Journey</h2>
          <p>At UBNAP Pharmaceuticals, we are more than just a company. We are a team of passionate individuals united by a common goal – to make a difference in healthcare. We invite you to explore our products and initiatives, and join us in our mission to create a healthier tomorrow.</p>
        </div>
        
        <DeveloperServices />
      </div>
    </div>
  );
}

export default ContactPage;