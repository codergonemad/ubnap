import React from 'react';
import {  Code, ShoppingCart, Zap, FileText, Users } from 'lucide-react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
function DeveloperServices() {
  return (
    <div className="developer-services">
      <h2>Developer Services</h2>
      <p>As the developer behind MediStore, I'm available for freelance projects and consultations.</p>
      <ul className="services-list">
        <li><Code size={20} /> Full-stack web development</li>
        <li><Code size={20} /> React and Node.js expertise</li>
        <li><ShoppingCart size={20} /> E-commerce solutions</li>
        <li><Zap size={20} /> Custom web applications</li>
        <li><Zap size={20} /> Performance optimization</li>
        <li><FileText size={20} /> Code reviews and consulting</li>
      </ul>
      <p>Interested in working together? Use the contact form below or reach out directly:</p>
      <div className="contact-links">
        {/* <a href="mailto:your.email@example.com" className="contact-link">
          <Mail size={20} />
          <span>your.email@example.com</span>
        </a> */}
        <a href="https://wa.me/message/XPOQJ2WDJ6ZPI1" target="_blank" rel="noopener noreferrer" className="contact-link">
                <MessageCircle size={20} />
                <span>WhatsApp Business</span>
              </a>
              <a href="mailto:codergonemad@gmail.com" className="contact-link">
                <Mail size={20} />
                <span>CoderGoneMad@gmail.com</span>
              </a>
      </div>
    </div>
  );
}

export default DeveloperServices;