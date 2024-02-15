import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PurchaseLanding from './purchase-landing';
import PrivacyPolicy from './PrivacyPolicy';
import Trial from './Trial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="purchase-landing" element={<PurchaseLanding />} />
    <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
    <Route path="Trial" element={<Trial />} />
  </Routes>
  </BrowserRouter>
);

reportWebVitals();
