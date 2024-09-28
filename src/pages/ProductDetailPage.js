import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../components/productData';

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value)));
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
          </ol>
        </nav>
        <div className="product-detail">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="category">Category: {product.category}</p>
            {/* <p className="price">${product.price.toFixed(2)}</p> */}
            <p className="description">{product.description}</p>
            {/* <div className="quantity"> */}
              {/* <label htmlFor="quantity">Quantity:</label> */}
              {/* <input 
                type="number" 
                id="quantity" 
                value={quantity} 
                onChange={handleQuantityChange} 
                min="1"
              /> */}
            {/* </div> */}
            {/* <button className="btn btn-primary">Add to Cart</button> */}
            <div className="product-features">
          <h2>Product Features</h2>
          <ul>
            {product.features && product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          {product.alsoAvailable && product.alsoAvailable.length > 0 && (
        <div className="also-available">
          <h2>Also Available:</h2>
          <ul>
            {product.alsoAvailable.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong>: {item.description}
              </li>
            ))}
          </ul>
        </div>
      )}
        </div>
          </div>
        </div>
        
        
        <div className="related-products">
          <h2>Related Products</h2>
          <div className="product-grid">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;