import React, { useState } from 'react';
import Product from '../Product/Product';

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  // Sample product data
  const product = {
    name: 'Product Name',
    description: 'Product Description',
    price: 19.99,
    image: 'https://via.placeholder.com/150',
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-page">
      <Product product={product} onAddToCart={handleAddToCart} />
      
      {/* Display Cart */}
      <div className="cart">
        <h3>Shopping Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
