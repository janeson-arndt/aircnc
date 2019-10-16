const mongoose = require('mongoose');

// na criacao do schema utiliza os tipos de dados nativos do JS
const SpotSchema = new mongoose.Schema({
    //name: String,
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' //informa que referencia o model User
    }
    //age: Number,
   //active: Boolean,
});

// agora precisa exportar esse model daqui de denrtro
module.exports = mongoose.model('Spot',SpotSchema); //nesse momento também criei o module
// a partir desse momento o mongoDB ja sabe que quando for criar um usuario, o usuario tem apenas um campo de email