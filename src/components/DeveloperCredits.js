import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import profile from "../images/profile.png";

function DeveloperCredits() {
  return (
    <div className="developer-credits" style={{ marginTop: '-10px', paddingTop: '80px' }}>
      {/* <div className="hero" style={{ marginTop: '-10px', paddingTop: '80px' }}> */}
      <div className="container" >
        <h1>Meet the Developer</h1>
        <div className="developer-info">
          <img src={profile} alt="Developer" className="developer-photo" />
          <div className="developer-details">
            <h2>CoderGoneMad</h2>
            <p>Full Stack Developer</p>
            <p>Passionate about creating intuitive and efficient web applications.</p>
            <div className="social-links">
              <a href="https://wa.me/message/XPOQJ2WDJ6ZPI1" target="_blank" rel="noopener noreferrer" className="contact-link">
                <MessageCircle size={20} />
                <span>WhatsApp Business</span>
              </a>
              <a href="mailto:codergonemad@gmail.com" className="contact-link">
                <Mail size={20} />
                <span>CoderGoneMad@gmail.com</span>
              </a>
              {/* <a href="tel:+1234567890" className="contact-link">
                <Phone size={20} />
                <span>Call</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default DeveloperCredits;