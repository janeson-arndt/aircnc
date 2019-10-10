const express = require('express');

//chamando o responsavel pelas rotas e separando dentro de uma variável
//dento dessa variável temos todos os metodos ex routes.post
const routes = express.Router();

routes.post('/users', (req, res) => { 
    return res.json(req.body) 
});

module.exports = routes;