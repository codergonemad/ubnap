import React from 'react';
import { Link } from 'react-router-dom';

function PCDFranchisePage() {
  return (
    <div className="pcd-franchise-page">
      <div className="hero" style={{ marginTop: '-10px', paddingTop: '80px' }}>
        <div className="container">
          <h1>PCD Franchise Opportunities</h1>
          <p>Empowering Growth: UBNAP Pharmaceuticals' PCD Franchise Solutions</p>
        </div>
      </div>
      <div className="container">
        <section className="features">
          <h2>Why Choose UBNAP Pharmaceuticals for Your PCD Franchise?</h2>
          <div className="feature-grid">
            <div className="feature">
              <i className="fas fa-flask"></i>
              <h3>Quality Products</h3>
              <p>Diverse portfolio of pharmaceutical products meeting the highest standards of quality and efficacy.</p>
            </div>
            <div className="feature">
              <i className="fas fa-star"></i>
              <h3>Strong Brand Reputation</h3>
              <p>Recognized for dedication to quality, innovation, and integrity.</p>
            </div>
            <div className="feature">
              <i className="fas fa-map-marked-alt"></i>
              <h3>Exclusive Franchise Rights</h3>
              <p>Exclusive rights for specific territories, providing a competitive advantage.</p>
            </div>
            <div className="feature">
              <i className="fas fa-hands-helping"></i>
              <h3>Comprehensive Support</h3>
              <p>Extensive support including marketing assistance, training programs, and logistical support.</p>
            </div>
          </div>
        </section>
        
        <section className="how-to-join">
          <h2>How to Become a PCD Franchise Partner</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Contact Us</h3>
              <p>Reach out to express your interest and discuss potential opportunities.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Evaluate the Opportunity</h3>
              <p>We will provide detailed information about our franchise model.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Submit an Application</h3>
              <p>Complete the application process to become an authorized PCD franchise partner.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Begin Your Journey</h3>
              <p>Receive necessary training, marketing support, and product supply to launch and grow your business.</p>
            </div>
          </div>
        </section>
        
        <section className="join-us">
          <h2>Join Us in Making a Difference</h2>
          <p>UBNAP Pharmaceuticals is dedicated to improving healthcare access and quality. By partnering with us through our PCD franchise model, you become a vital part of this mission.</p>
          <p>Together, we can bring high-quality pharmaceutical solutions to communities and contribute to better health outcomes.</p>
          <div className="cta-container">
          <Link to="/contact" className="btn btn-primary">Contact Us for More Information</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PCDFranchisePage;