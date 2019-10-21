import React, { useEffect } from 'react';
import api from '../../services/api';

export default function Dashboard() {
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user'); // pega o user do locaStorage, conforme localStorage.setItem('user', _id) do Login> index.js
            const response = await api.get('/dashboard', {
                headers: { user_id }
            })
            console.log(response.data);
        }
        loadSpots();

    }, [] ); 

    return <h1>Dashboard</h1>
}