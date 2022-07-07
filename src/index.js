import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quotes from './pages/Quotes';
import './scss/base.scss';

const MathMagicians = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/math-magicians" element={<Home />} />
        <Route path="/math-magicians/calculator" element={<CalculatorPage />} />
        <Route path="/math-magicians/quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MathMagicians />);
