import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assests/logo6.svg';

function App() {
  const [email, setEmail] = useState('');
  //funcionamento padrão do formulário quando clica em submit é enviar o usuário para outra tela, a parte de preventDefault é para prever isso
  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('./sessions', { email })//*** entender de onde está vindo esse e-mail e o _id ****

    //e-mail que foi preenchido dentro do input
    const { _id, name, telefone } = response.data; //quero pegar apenas o id

    console.log(_id)
    console.log(name)
    console.log(telefone)



    console.log(_id);

    localStorage.setItem('user', _id); //localStore banco de dados de nossa aplicacao
  }
  return (
    <div className="container">
      <img className="logo" src={logo} alt="AirCnc" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa
    </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            id="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}//seta para o SetEmail o valor do email capturado na tela
          />
          <button className="btn" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
