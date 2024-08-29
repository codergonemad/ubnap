// components/ContactModal.js
import React from 'react';
import { Link } from 'react-router-dom';

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Contact Us</h2>
        <p>Email: info@medistore.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Health Street, Medicity, MC 12345</p>
        <Link to="/developer" onClick={onClose}>Meet the Developer</Link>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ContactModal;