// Product.jsx
import React from 'react';

const Product = ({ product }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        width: '250px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h4 style={{ margin: 0 }}>{product.name}</h4>
      <p style={{ margin: '5px 0' }}>Price: ₹{product.price}</p>
      <p style={{ margin: '5px 0' }}>Category: {product.category}</p>
    </div>
  );
};

export default Product;
