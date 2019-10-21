import React from 'react';

import './App.css';

import logo from './assests/logo6.svg';
import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="AirCnc" />
      <div className="content">
        <Routes/>
      </div>
    </div>
  );
}

export default App;
