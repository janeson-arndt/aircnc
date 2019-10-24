import React, { useEffect, useState } from 'react'; //useState para usar o localStorage
import api from '../../services/api';

import { Link } from 'react-router-dom'

import './styles.css';

export default function Dashboard() {
    //cria um estado
    // const [ nomeDoEstado, funcaoParaAtualizarEstado ] = useStage([]), como a info vem do meu back em formato de lista/array é recomendado iniciar com uma lista vazia
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user'); // pega o user do locaStorage, conforme localStorage.setItem('user', _id) do Login> index.js
            const response = await api.get('/dashboard', {
                headers: { user_id }
            })
            // console.log(response.data);
            setSpots(response.data); //onde estão os dados que vem de nossa API
        }
        loadSpots();

    }, []);

    return (
        <>
            <ul className="spot-list">

                {spots.map(spot => ( // percore toda  a lista de spots e retorna um HTML
                    //tag header em vez da tag img para deixar as imagens pequenas e no mesmo tamanho padrão
                    //tag strong retorna a empresa
                    //tag span retorna o preço
                    // tag header a primeira { indica que quero incluir um codigo JS no meu codigo e a segunda { indica que estou querendo incluir um objeto
                    // tag span com IF ternario > IF = <span>{spot.price > THEN = ? `R$${spot.price}/dia` > ELSE = : `GRATUITO`}</span>
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})`}}> 
                        </header>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia` : `GRATUÍTO`}</span>
                    </li> 
                ))}
            </ul>

            <Link to='/new'>
                <button className='btn'>Cadastrar novo spot</button> 
            </Link>
        </>
    )
}