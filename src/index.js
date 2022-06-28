import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './components/Calculator';
import './scss/base.scss';

const MathMagicians = () => (
  <div>
    <h1>
      Welcome to Math Magicians.
    </h1>
    <Calculator />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MathMagicians />);
