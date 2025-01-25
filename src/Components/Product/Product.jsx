import React from 'react';
import './Product.css'
const Product = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: '$10', img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRCT0B6M7cVqxi5rbzoqN5LkLeTRdxpDw_0LJ-boFfIoxmkxq8NlwZE6YhNNW8GAl_-RRC_nZgvMJfUzf5O3vgzNO6fLCMea9T14Eg3-JdbiYwnc-b2sAMaNA&usqp=CAE' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: '$20', img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', description: 'Description 3', price: '$30', img: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', description: 'Description 4', price: '$40', img: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', description: 'Description 5', price: '$50', img: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', description: 'Description 6', price: '$60', img: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 7', description: 'Description 7', price: '$70', img: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Product 8', description: 'Description 8', price: '$80', img: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Product 9', description: 'Description 9', price: '$90', img: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Product 10', description: 'Description 10', price: '$100', img: 'https://via.placeholder.com/150' },
  
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
