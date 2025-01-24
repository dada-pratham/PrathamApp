import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
    <div className="container">
      <div className="logo">PRATHAM APP</div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/Product">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Payment">Payment</Link>
          </li>
          <li>
            <Link to="/PhonePay">PhonePay</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  
  );
}

export default Header;
