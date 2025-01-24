import React from 'react';
import './Product.css'
const Product = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: '$10', img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: '$20', img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', description: 'Description 3', price: '$30', img: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', description: 'Description 4', price: '$40', img: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', description: 'Description 5', price: '$50', img: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', description: 'Description 6', price: '$60', img: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 7', description: 'Description 7', price: '$70', img: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Product 8', description: 'Description 8', price: '$80', img: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Product 9', description: 'Description 9', price: '$90', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Product 10', description: 'Description 10', price: '$100', img: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Product 11', description: 'Description 11', price: '$110', img: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Product 12', description: 'Description 12', price: '$120', img: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Product 13', description: 'Description 13', price: '$130', img: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Product 14', description: 'Description 14', price: '$140', img: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Product 15', description: 'Description 15', price: '$150', img: 'https://via.placeholder.com/150' },
    { id: 16, name: 'Product 16', description: 'Description 16', price: '$160', img: 'https://via.placeholder.com/150' },
    { id: 17, name: 'Product 17', description: 'Description 17', price: '$170', img: 'https://via.placeholder.com/150' },
    { id: 18, name: 'Product 18', description: 'Description 18', price: '$180', img: 'https://via.placeholder.com/150' },
    { id: 19, name: 'Product 19', description: 'Description 19', price: '$190', img: 'https://via.placeholder.com/150' },
    { id: 20, name: 'Product 20', description: 'Description 20', price: '$200', img: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.img} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
