/*import React from 'react';
import axios from 'axios';

const PhonePay = () => {
  const initiatePayment = async () => {
    try {
      // Step 1: Call backend to create order
      const { data } = await axios.post('/api/createOrder', {
        courseId: 'course_123', // Example Course ID
        amount: 500, // Example Amount in INR
      });

      // Step 2: Initialize Razorpay Checkout
      const options = {
        key: 'cjVzDxJjYP5HIymqWTihowbp', // Replace with your Razorpay Key ID
        amount: data.order.amount, // Amount in paise
        currency: data.order.currency,
        name: 'Pratham app',
        description: 'Purchase Course',
        image: '/your-logo.png', // Optional
        order_id: data.order.id, // Razorpay Order ID
        handler: async function (response) {
          // Step 3: Verify payment
          const verifyResponse = await axios.post('/api/verifyPayment', {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          });

          if (verifyResponse.data.success) {
            alert('Payment Successful');
            // Redirect or perform post-payment actions
          } else {
            alert('Payment Verification Failed');
          }
        },
        prefill: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '9999999999',
        },
        notes: {
          courseId: 'course_123', // Pass any additional data
        },
        theme: {
          color: '#F37254',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment initiation failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div>
      <h1>Buy Course</h1>
      <button onClick={initiatePayment}>Pay Now</button>
    </div>
  );
};

export default PhonePay;*/
import React from "react";
import axios from "axios";

const PhonePay = () => {
  const handlePayment = async () => {
    try {
      // Step 1: Create order on the backend
      const orderResponse = await axios.post("http://localhost:5000/create-order", {
        amount: 500, // amount in INR
        currency: "INR",
        receipt: "receipt#1",
      });

      const { id: order_id, amount, currency } = orderResponse.data;

      // Step 2: Load Razorpay checkout
      const options = {
        key: "your_key_id", // Replace with your Razorpay Key ID
        amount,
        currency,
        name: "DhoopDhara", // Replace with your brand name
        description: "Payment for your order",
        image: "https://yourwebsite.com/logo.png", // Optional: your logo URL
        order_id,
        handler: async (response) => {
          // Step 3: Capture the payment response
          const paymentDetails = {
            order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          };

          console.log("Payment Successful", paymentDetails);
          alert("Payment Successful!");
        },
        prefill: {
          name: "John Doe", // Optional: prefilled user info
          email: "john.doe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254", // Theme color
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment failed", error.message);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay ₹500</button>
    </div>
  );
};

export default PhonePay;
