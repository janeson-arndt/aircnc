const express = require('express');
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')


//chamando o responsavel pelas rotas e separando dentro de uma variável
//dento dessa variável temos todos os metodos ex routes.post
const routes = express.Router();

routes.post('/users', (req, res) => { 
    return res.json(req.body) 
});


routes.put('/users/:id', (req, res) => { 
    return res.json({ id: req.params.id })
    
});

routes.post('/sessions', SessionController.store);

routes.post('/spots', SpotController.store);


module.exports = routes;