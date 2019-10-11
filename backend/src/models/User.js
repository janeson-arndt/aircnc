const mongoose = require('mongoose');

// na criacao do schema utiliza os tipos de dados nativos do JS
const UserSchema = new mongoose.Schema({
    //name: String,
    email: String,
    //age: Number,
   //active: Boolean,
});

// agora precisa exportar esse model daqui de denrtro
module.exports = mongoose.model('User',UserSchema); //nesse momento também criei o module
// a partir desse momento o mongoDB ja sabe que quando for criar um usuario, o usuario tem apenas um campo de email