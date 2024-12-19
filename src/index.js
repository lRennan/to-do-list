import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated to use React 18 API
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
