import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header /> 
      <Login />
    </div>
  );
};

export default App;