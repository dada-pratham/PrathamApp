import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    date: '',
    subject: '',
    details: '',
  });

  const [popup, setPopup] = useState({ isVisible: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_dgrn6zn', // Your EmailJS service ID
        'template_kq5y7wd', // Your EmailJS template ID
        formData,
        '-sDgiWCZtkR01d42T' // Your EmailJS public key
      )
      .then(
        (response) => {
          setPopup({
            isVisible: true,
            message: 'Your message has been sent successfully!',
          });
        },
        (err) => {
          setPopup({
            isVisible: true,
            message: 'Failed to send message. Please try again.',
          });
        }
      );
  };

  const closePopup = () => {
    setPopup({ isVisible: false, message: '' });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      date: '',
      subject: '',
      details: '',
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          <strong>Email Us:</strong>
          <a href="mailto:aherpratham123@gmail.com"> aherpratham123@gmail.com</a>
        </p>
        <p>
          <strong>Phone Us:</strong>
          <a href="tel:+7719920443"> +91 7719920443</a>
        </p>
        <p>
          <strong>Visit Us:</strong>
          <br />
          Pune, Maharashtra, 411027
        </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LI</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YT</a>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="location"
              placeholder="Location *"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              placeholder="Date *"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <textarea
              name="details"
              placeholder="Details *"
              value={formData.details}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      {popup.isVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>{popup.message}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
