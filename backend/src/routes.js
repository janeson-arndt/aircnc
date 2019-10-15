const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const multer = require('multer');
const uploadConfig = require('./config/upload');

//chamando o responsavel pelas rotas e separando dentro de uma variável
//dento dessa variável temos todos os metodos ex routes.post
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/users', (req, res) => { 
    return res.json(req.body) 
});


routes.put('/users/:id', (req, res) => { 
    return res.json({ id: req.params.id })  
});

routes.post('/sessions', SessionController.store);

routes.post('/spot',upload.single('thumbnail'), SpotController.store);


module.exports = routes;