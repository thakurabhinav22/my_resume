import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home/Home';
import SecurePay from './Pages/Projects/securepay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/securepay" element={<SecurePay />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
