import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Payment from './Components/Payment/Payment.jsx';
import Product from './Components/Product/Product.jsx';
import PhonePay from './Components/PhonePay/PhonePay.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Contact" element={<Contact />}/>
      <Route path="Payment" element={<Payment />}/>
      <Route path="Product" element={<Product />}/>
      <Route path="PhonePay" element={<PhonePay />}/>
      <Route path="AboutUs" element={<AboutUs />}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
