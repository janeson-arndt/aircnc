const Spot = require('../models/Spot');
const User = require('../models/User')


module.exports = {
    async

    async store(req, res){
       // console.log(req.body); para mostrar o log no terminal
       // console.log(req.file);
       const { filename } = req.file; //chama o nome da propriedade dentro da requisição
       const { company, techs, price }  = req.body;
       const { user_id } = req.headers;

       const user = await User.findById(user_id);

       if (!user) {
           return res.status(400).json({ error: 'User does not exists' })
       }

       //cria o spot
        //techs esta vindo como string separado por virgula e no bd espera ele como array
        //split corta em pedaços separado por virgula, e map percorre o array e para cada tech 
        //ele aplica o trim ele tira os espaços antes e depois de uma string
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })
        //retorna o spot criado
    return res.json(spot);
    }
};