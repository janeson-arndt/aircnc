const express = require('express'); /*Importar uma dependeencia externa*/
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://janeson_arndt:Melbourne1@omnistack-shard-00-00-f5ejz.mongodb.net:27017,omnistack-shard-00-01-f5ejz.mongodb.net:27017,omnistack-shard-00-02-f5ejz.mongodb.net:27017/semana9?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

/*Acessa a rota do usuário, rota é o que vem depois da porta :3333/Produtos/*/


/* req é a requisição que vem do front, e res a resposta que vai 
    para o front*/

// req.query = acessar os query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar o corpo da requisição  (para criação, edição)

app.use(cors());
app.use(express.json()); //por padrão o express nao entende o formato JSON, tenho que informar para ele
app.use(routes);

// para devolver a resposta, o tipo de resposta mais simples é o send para envio de um texto
    app.listen(3333);
