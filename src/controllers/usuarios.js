const Usuario = require('../models/usuarios')

// Recece o res da rota
function login(req, res){
    // Passa o res para o model responder com o resultado se achar dados de login no banco
    Usuario.login(req, res)
}

module.exports = {
    login
}