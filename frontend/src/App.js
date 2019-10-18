import React from 'react';
import './App.css';

import logo from './assests/logo5.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnc" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa
    </p>

        <form>
          <label htmlFor="email">E_MAIL *</label>
          <input 
          type="email"  
          id="email" 
          placeholder="Seu melhor e-mail"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
