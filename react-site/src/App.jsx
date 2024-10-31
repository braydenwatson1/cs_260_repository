import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header /> 
      <Login />
      <Footer />
    </div>
  );
};

export default App;