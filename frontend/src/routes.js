import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from  './pages/Login'
import Dashboard from  './pages/Dashboard'
import New from  './pages/New'

export default function Routes() {
    return (
        // comportamento padrão do react, permite que mais de uma rota seja chamada ao mesmo tempo
        // o Switch garante que apenas uma rota seja chamada por vez

        // O react-router-dom por padrão procura rotas 'que contém' algum termo, nesse caso a primeira rota que possuí apenas "/" vai chamar todas as outras rotas
        // porque estas também possuem "/", para resolver isso informa exact ao lado da rota
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = { Login } ></Route> 
                <Route path="/dashboard" component = { Dashboard } ></Route> 
                <Route path="/new" component = { New } ></Route> 
            </Switch>
        </BrowserRouter>
    );
}




