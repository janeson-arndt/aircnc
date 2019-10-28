import React, { useState, useMemo } from 'react';
//useMemo ele fica observando o valor de outra variavel e toda vez que ele alterar ele gera um novo valor para uma variável

import camera from '../../assests/camera.svg';

import api from '../../services/api';

import './styles.css';


export default function New({ history }) {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    // Criar uma previu da imagem carregada
    // cria um estado da imagem
    const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    // enviar os dados para a API
    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        //toda vez que eu for mandar um spot, também tenho que dizer qul é o usuario logado no APP
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail); //adicionar uma informacao no objeto data criado acima
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots', data, { headers: { user_id } }) //informa o objeto como o segundo parametro e o usuário logado como terceiro parametro

        history.push('/dashboard'); //enviar o usuário de volta para a rota Dashboard
    }
    //<div id='idLogo'>
    // setThumbnail pega o valor 0, ou seja único arquivo que o usuário selecionou
    // className has-thumbnail, valida se tem imagem, caso sim ele retira o ícone da camera e a borda pontilhada do preview da imagem
    return (
        <form onSubmit={handleSubmit}>

            <label id='thumbnail'
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type='file' onChange={event => setThumbnail(event.target.files[0])} />
                <img className="logo" src={camera} alt="Select img" />
            </label>

            <label htmlFor="company">EMPRESA *</label>
            <input
                id='company'
                placeholder='Sua empresa incrível'
                value={company}
                onChange={event => setCompany(event.target.value)}
            />
            <label htmlFor="company">TECNOLOGIAS *</label>
            <input
                id='techs'
                placeholder='Quais tecnologias usam?'
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />
            <label htmlFor="company">VALOR DA DIÁRIA *<span> (em branco para GRATUITO)</span></label>
            <input
                id='price'
                placeholder='Valor cobrado por dia'
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type="submit" className='btn'>Cadastrar</button>
        </form>
    )

}