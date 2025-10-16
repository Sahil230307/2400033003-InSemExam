// App.jsx
import React, { useState } from 'react';
import Product from './Product';

const App = () => {
  const products = [
    { name: 'Notebook', price: 50, category: 'Stationery' },
    { name: 'Pen', price: 10, category: 'Stationery' },
    { name: 'School Bag', price: 400, category: 'Bags' },
    { name: 'Laptop', price: 50000, category: 'Electronics' },
    { name: 'Charger', price: 800, category: 'Electronics' },
    { name: 'Travel Bag', price: 1200, category: 'Bags' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Stationery', 'Bags', 'Electronics'];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Product Listing</h2>

      <label htmlFor="categoryFilter">Filter by Category:</label>
      <select
        id="categoryFilter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ marginLeft: '10px', padding: '5px' }}
      >
        {categories.map((category, i) => (
          <option key={i} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div style={{ marginTop: '20px' }}>
        {filteredProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
