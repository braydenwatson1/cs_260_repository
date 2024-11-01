import React from 'react';
import Login from './Login';
import Dashboard from './components/Dashboard';
import History from './components/History';
import Settings from './components/Settings';
import CreateAccount from './components/CreateAccount';
import './App.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app"> 
 
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>

    </div>
  );
};

export default App;