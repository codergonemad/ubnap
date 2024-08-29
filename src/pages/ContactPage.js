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
            <img src={companyImage} alt="Our Company" className="company-image" />
          </div>
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p><i className="fas fa-map-marker-alt"></i> 5-3, Sher Road, Near L&T Gate No. 7, Opp. ETP House, Powai Andheri Ext, Mumbai-400072</p>
            <p><i className="fas fa-phone"></i> 9161655656</p>
            <p><i className="fas fa-envelope"></i> mktubnap@gmail.com</p>
            <div className="social-links">
              <a href="https://www.facebook.com/share/rm94nq3RCtvhq9GD/?mibextid=qi2Omg" className="social-icon"><i className="fab fa-facebook"></i></a>
              {/* <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a> */}
              <a href="https://www.instagram.com/ubnap.pharmaceuticals/profilecard/?igsh=MXhlaTFjb2h1NjJtcA==" className="social-icon"><i className="fab fa-instagram"></i></a>
              {/* <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a> */}
            </div>
          </div>
          
        </div>
        <DeveloperServices />
      </div>
    </div>
  );
}

export default ContactPage;
