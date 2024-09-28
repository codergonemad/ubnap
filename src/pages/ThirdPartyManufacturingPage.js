import React from 'react';
import { Link } from 'react-router-dom';

function ThirdPartyManufacturingPage() {
  return (
    <div className="third-party-manufacturing-page">
      <div className="hero" style={{ marginTop: '-10px', paddingTop: '80px' }}>
        <div className="container">
          <h1>Third Party Manufacturing</h1>
          <p>Partnering for Excellence: UBNAP Pharmaceuticals' Third Party Manufacturing Services</p>
        </div>
      </div>
      <div className="container">
        <section className="features">
          <h2>Why Choose UBNAP Pharmaceuticals for Third Party Manufacturing?</h2>
          <div className="feature-grid">
            <div className="feature">
              <i className="fas fa-cogs"></i>
              <h3>Expertise and Experience</h3>
              <p>Years of experience in the pharmaceutical industry, deep understanding of manufacturing processes, regulatory requirements, and quality standards.</p>
            </div>
            <div className="feature">
              <i className="fas fa-industry"></i>
              <h3>State-of-the-Art Facilities</h3>
              <p>Modern, fully-equipped manufacturing facilities designed to handle a wide range of pharmaceutical products.</p>
            </div>
            <div className="feature">
              <i className="fas fa-certificate"></i>
              <h3>Regulatory Compliance</h3>
              <p>Certified by major regulatory bodies, adherence to Good Manufacturing Practices (GMP).</p>
            </div>
            <div className="feature">
              <i className="fas fa-arrows-alt"></i>
              <h3>Flexibility and Scalability</h3>
              <p>Services tailored to meet specific requirements, from small-scale to large-scale production.</p>
            </div>
          </div>
        </section>
        
        <section className="our-services">
          <h2>Our Services Include:</h2>
          <div className="service-list">
            <div className="service-item">
              <i className="fas fa-flask"></i>
              <div>
                <h3>Product Development</h3>
                <p>Assistance with formulation development, stability studies, and optimization.</p>
              </div>
            </div>
            <div className="service-item">
              <i className="fas fa-industry"></i>
              <div>
                <h3>Manufacturing</h3>
                <p>Full-service manufacturing capabilities, including production, packaging, and labeling.</p>
              </div>
            </div>
            <div className="service-item">
              <i className="fas fa-check-double"></i>
              <div>
                <h3>Quality Assurance</h3>
                <p>Rigorous quality control and assurance processes.</p>
              </div>
            </div>
            <div className="service-item">
              <i className="fas fa-clipboard-check"></i>
              <div>
                <h3>Regulatory Support</h3>
                <p>Guidance and support in navigating regulatory approvals and compliance requirements.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="partner-with-us">
          <h2>Partner with Us</h2>
          <p>UBNAP Pharmaceuticals is committed to building strong, collaborative partnerships with our clients. We aim to deliver exceptional value through our Third Party Manufacturing services, helping you achieve your business goals while ensuring the highest standards of quality and compliance.</p>
          <div className="cta-container">
          <Link to="/contact" className="btn btn-primary">Contact Us to Discuss Partnership</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ThirdPartyManufacturingPage;