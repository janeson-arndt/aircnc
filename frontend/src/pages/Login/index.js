import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    // O react não permite que tenha elementos irmãos sem um elemento pai, abaixo os elementos p e form são irmãos, daria para utilizar uma div, mas isso
    // cria um elemento adicional que pode afetar a estilização, caso tenha alguma estilização aplicada ao p com uma div adicional não pega mais a estilização do p
    // Para resolver isso, o react permite utilizar tags vazias '<> </>'
    const [email, setEmail] = useState('');

    
    //funcionamento padrão do formulário quando clica em submit é enviar o usuário para outra tela, a parte de preventDefault é para prever isso
    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('./sessions', { email })//*** entender de onde está vindo esse e-mail e o _id ****

        const { _id } = response.data;

        //console.log(_id);

        localStorage.setItem('user', _id); //localStore banco de dados de nossa aplicacao, onde 'user' é '_id' no banco de dados

        history.push('/dashboard')

    }

    return (
        <>
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
        </>
    )
}