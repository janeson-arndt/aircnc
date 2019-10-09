const express = require('express'); /*Importar uma dependeencia externa*/

const app = express();

/*Acessa a rota do usuário, rota é o que vem depois da porta :3333/Produtos/*/


app.get('/hello/', (req, res) => { /* req é a requisição que vem do front, e res a resposta que vai 
    para o front*/
    return res.json({ message: "Hello Omini" })
    
});
    
    app.listen(3333);
    /* para devolver a resposta, o tipo de resposta mais simples
    é o send para envio de um texto*/