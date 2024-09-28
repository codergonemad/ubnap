import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../components/productData';

const featuredProducts = products.sort(() => Math.random() - 0.5).slice(0, 5);

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero" style={{ marginTop: '-10px', paddingTop: '80px' }}>
        <div className="container">
          <h1>Your Well-being is Our Commitment</h1>
          <p>Advancing healthcare through innovation, integrity, and excellence.</p>
          <p>Explore our extensive selection of premium medicines and health products.</p>
          <Link to="/products" className="btn btn-primary">Browse Products</Link>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2>Why Choose UBNAP Pharmaceuticals?</h2>
          <div className="feature-grid">
            <div className="feature">
              <i className="fas fa-industry"></i>
              <h3>Third Party Manufacturing</h3>
              <p>Partner with us for high-quality pharmaceutical manufacturing services.</p>
            </div>
            <div className="feature">
              <i className="fas fa-certificate"></i>
              <h3>Quality Assured</h3>
              <p>All our products meet the highest standards of safety and efficacy.</p>
            </div>
            <div className="feature">
              <i className="fas fa-handshake"></i>
              <h3>PCD Franchise Opportunities</h3>
              <p>Join our network of successful pharmaceutical distributors.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="product-grid-home">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all-products">
            <Link to="/products" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="about-summary">
        <div className="container">
          <h2>About UBNAP Pharmaceuticals</h2>
          <p>We are dedicated to providing effective, safe, and affordable pharmaceutical solutions. Our vision is to contribute to healthier lives and stronger communities globally.</p>
          <Link to="/contact" className="btn btn-secondary">Learn More About Us</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;