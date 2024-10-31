import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importing the main App component
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);