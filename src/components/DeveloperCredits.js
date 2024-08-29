// components/DeveloperCredits.js
import React from 'react';

function DeveloperCredits() {
  return (
    <div className="developer-credits">
      <div className="container">
        <h1>Meet the Developer</h1>
        <div className="developer-info">
          <img src="/path-to-your-photo.jpg" alt="Developer" className="developer-photo" />
          <div className="developer-details">
            <h2>Your Name</h2>
            <p>Full Stack Developer</p>
            <p>Passionate about creating intuitive and efficient web applications.</p>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeveloperCredits;