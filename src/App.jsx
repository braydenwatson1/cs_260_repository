import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import History from './components/History';
import Settings from './components/Settings';
import CreateAccount from './components/CreateAccount';
import About from './components/About';
import ProtectedRoute from './components/ProtectedRoute';  // Import ProtectedRoute
import './components/App.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app"> 
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Protect the Dashboard route */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;