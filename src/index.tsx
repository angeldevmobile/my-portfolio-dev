import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Render the App component into the root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
