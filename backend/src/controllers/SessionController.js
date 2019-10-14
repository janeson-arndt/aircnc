//controles de sessão tudo relacionado, login, logout
// metodos que podem ter em um controller:
// index - retorna uma listagem, nesse caso de sessões
// show - lista uma únida sessao
// store - criar uma sessao
// update - alterar uma sessao
// destroy - deletar uma sessao

const User = require('../models/User');

module.exports = {
    async store(req, res){
        const email = req.body.email;

        let user = await User.findOne ({email : email}); //user recebe o email

        if (!user) {
            user = await User.create({email}); 
        }

        //const user = await User.create({email}); // await aguarda alguma instrução ser executada, para então seguir para a proxima linha
        //por isso temos que informar que a função é assincrona
     
        return res.json(user);
    }
}; //agora no arquivo de rotas tem que importar o controller e cadastrar a rota