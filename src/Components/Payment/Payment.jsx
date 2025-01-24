import React, { useEffect } from 'react';
import './Payment.css';

const Payment = ({  }) => {
  const PaymentMethods = [
    {
      name: 'Credit Card',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg',
      description: 'Visa, MasterCard, American Express',
    },
    {
      name: 'PayPal',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
      description: 'Fast and secure online payments',
    },
    {
      name: 'Google Pay',
      icon: 'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png',
      description: 'Pay directly from your Google account',
      
    },
    {
      name: 'Apple Pay',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      description: 'Quick and secure payments with Apple Pay',
    },
    {
      name: 'Bank Transfer',
      icon: 'https://en.pimg.jp/057/985/314/1/57985314.jpg',
      description: 'Transfer directly from your bank account',
    },
  ];
  useEffect(() => {
    // Only load Google Pay once
    const paymentsClient = new window.google.payments.api.PaymentsClient({
      environment: 'TEST', // Use 'PRODUCTION' for live
    });

    // Configure Google Pay payment request
    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              'gateway': 'example', // Replace with your gateway (e.g., 'stripe', 'braintree')
              'gatewayMerchantId': 'your-merchant-id' // Replace with your merchant ID
            }
          }
        }
      ],
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: '10.00', // Replace with your dynamic amount
        currencyCode: 'USD', // Change to your currency code
      },
      merchantInfo: {
        merchantName: 'PRATHAM APP', // Your business name
        merchantId: 'your-merchant-id', // Your Google Pay merchant ID
      },
    };

    // Check if Google Pay is available
    paymentsClient.isReadyToPay(paymentDataRequest)
      .then(function(response) {
        if (response.result) {
          // Check if button already exists, if not, create it
          if (!document.getElementById('google-pay-button').hasChildNodes()) {
            const googlePayButton = paymentsClient.createButton({
              onClick: onGooglePayButtonClicked,
            });
            document.getElementById('google-pay-button').appendChild(googlePayButton);
          }
        } else {
          console.log('Google Pay not available');
        }
      })
      .catch(function(error) {
        console.error('Error checking if Google Pay is available', error);
      });

    // Handle the Google Pay button click
    function onGooglePayButtonClicked() {
      paymentsClient.loadPaymentData(paymentDataRequest)
        .then(function(paymentData) {
          // Handle payment data (send to your server for processing)
          console.log(paymentData);
        })
        .catch(function(error) {
          console.error('Payment failed: ', error);
        });
    }

    // Cleanup the button if the component unmounts
    return () => {
      const googlePayButton = document.getElementById('google-pay-button');
      if (googlePayButton) {
        googlePayButton.innerHTML = ''; // Remove the existing button on component unmount
      }
    };

  }, []);

  return (
    <>
    <div className="payment-methods-container">
      <h1>Payment Methods</h1>
      <div className="payment-methods-grid">
        {PaymentMethods.map((method, index) => (
          <div className="payment-method-card" key={index}>
            <img
              src={method.icon}
              alt={method.name}
              className="payment-method-icon"
            />
            <h3>{method.name}</h3>
            <p>{method.description}</p>
            {method.name === 'Google Pay' && (

              <div id="google-pay-button"></div>
              
            )}
            
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Payment;
