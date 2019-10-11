//controles de sessão tudo relacionado, login, logout
// metodos que podem ter em um controller:
// index - retorna uma listagem, nesse caso de sessões
// show - lista uma únida sessao
// store - criar uma sessao
// update - alterar uma sessao
// destroy - deletar uma sessao

module.exports = {
    store(req, res){
        return res.json({
            message: "Hello man sessions"
        })
    }
}; //agora no arquivo de rotas tem que importar o controller e cadastrar a rota