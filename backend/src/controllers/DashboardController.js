const Spot = require('../models/Spot')

module.exports = {
   async show(req, res){
      const { user_id } = req.headers;
      
      const spots = await Spot.find({ user: user_id}); //retorna o usuario quando o campo user do banco (model user) for igual ao user_id que está vindo da requisição headers

      return res.json(spots);
   }
}