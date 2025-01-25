import React from 'react'
import{ Link } from 'react-router-dom'
import Data from './Data'

function Product() {
    return (
      <div className="product-container">
        <h1 className="text-center">Football Jersey Collections</h1>
        <div className="product-grid">
          {Data.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-details">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-description">{item.description}</p>
                <p className="product-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Product;

    