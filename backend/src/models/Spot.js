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
}, {
    // Essa parte precisa para que toda vez que um Spot é convertido para JSON eu quero que os Virtual sejam incluídos também
    toJSON: { 
        virtuals: true,
    }
});

//CRIAR UM CAMPO NO BANCO PELO JS, dentro do MongoDB isso é chamdo de VIRTUAL
SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})


// agora precisa exportar esse model daqui de denrtro
module.exports = mongoose.model('Spot',SpotSchema); //nesse momento também criei o module
// a partir desse momento o mongoDB ja sabe que quando for criar um usuario, o usuario tem apenas um campo de email