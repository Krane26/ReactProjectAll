import React from 'react';
import Product from '../../Data';

function Image() {
  return <img src={Product.image} alt={Product.name} className="img-fluid" />;
}

export default Image;
