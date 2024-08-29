// components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        {/* <p className="price">${product.price.toFixed(2)}</p> */}
      </div>
    </Link>
  );
}

export default ProductCard;