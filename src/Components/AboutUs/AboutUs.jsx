import React from "react";
import "./AboutUs.css"; // Link the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>PRATHAM APP</strong>, your one-stop destination for high-quality
          dhoop, agarbatti, and spiritual products. Our mission is to bring
          peace, positivity, and tradition into your life with our handpicked
          offerings.
        </p>
        <p>
          We take pride in sourcing natural, eco-friendly materials to create
          products that uplift your spirit and connect you to your roots. With
          years of expertise, we aim to provide the best quality and
          satisfaction to our valued customers.
        </p>
        <p>
          Thank you for trusting us to be a part of your spiritual journey. Let
          the aroma of positivity fill your life!
        </p>
      </div>
      <div className="about-us-image">
        <img
          src="https://via.placeholder.com/400x300" // Replace with your actual image URL
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default AboutUs;
