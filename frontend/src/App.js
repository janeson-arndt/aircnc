import React from 'react';
import api from './services/api';
import './App.css';

import logo from './assests/logo6.svg';

function App() {
  //funcionamento padrão do formulário quando clica em submit é enviar o usuário para outra tela, a parte de preventDefault é para prever isso
  function handleSubmit(event) { 
    event.preventDefault();

    console.log('Hello');
  }
  return (
    <div className="container">
      <img className="logo" src={logo} alt="AirCnc" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa
    </p>

        <form onSubmit = {handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
          type="email"  
          id="email" 
          placeholder="Seu melhor e-mail"
          />
          <button className="btn" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
