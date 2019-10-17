const mongoose = require('mongoose');

// na criacao do schema utiliza os tipos de dados nativos do JS
const BookingSchema = new mongoose.Schema({
    //name: String,
    date: String,
    approved: Boolean,
    //relacionamentos, porque a reserva é feita por um usuário dentro de um spot
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' //relacionamento para identificar qual usuario solicitou a reserva
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot' //relacionamento para identificar para qual spot o usuario esta querendo umna reserva
    }

    //age: Number,
   //active: Boolean,
});

// agora precisa exportar esse model daqui de denrtro
module.exports = mongoose.model('Booking', BookingSchema); //nesse momento também criei o module
// a partir desse momento o mongoDB ja sabe que quando for criar um usuario, o usuario tem apenas um campo de email