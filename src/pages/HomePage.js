import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../components/productData';


const featuredProducts = products;
console.log(featuredProducts);

featuredProducts.sort(() => Math.random() - 0.5);
function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
      <div className="container">
  <h1>Your Well-being is Our Commitment</h1>
  <p>Explore our extensive selection of premium medicines and health products.</p>
  <p>Dedicated to nurturing and healing...</p>
  <p>Approach life with care and precision, for it’s a true balancing act.</p>
  <Link to="/products" className="btn btn-primary">Browse Products</Link>
</div>

      </section>
      
      <section className="features">
        <div className="container">
          <h2>Why Choose UBNAP Pharmaceuticals?</h2>
          <div className="feature-grid">
            <div className="feature">
              <i className="fas fa-shipping-fast"></i>
              <h3>Fast Delivery</h3>
              <p>Get your medicines delivered quickly to your doorstep.</p>
            </div>
            <div className="feature">
              <i className="fas fa-certificate"></i>
              <h3>Quality Assured</h3>
              <p>All our products are sourced from trusted manufacturers.</p>
            </div>
            <div className="feature">
              <i className="fas fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Our customer support team is always here to help you.</p>
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
    </div>
  );
}

export default HomePage;