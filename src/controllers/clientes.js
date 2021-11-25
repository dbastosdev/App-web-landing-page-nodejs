const Cliente = require('../models/clientes')

// Recece o req da rota para cadastro de clientes no banco de dados
function cadastrar(req, res){
    // Passa o res para o model responder com o resultado se achar dados de cadastrar no banco
    Cliente.cadastrar(req, res)
}

// Busca a lista de clientes no banco de dados para exibição
function listar(req, res){
    Cliente.listar(req, res)
}

// Busca cliente específico no banco de dados e o deleta
function remover(req, res){
    const {id} = req.params // O ideal é sempre desestrutura e enviar a resposta aqui no controller
    Cliente.remover(req, res, id)
}

// Busca cliente específico no banco de dados e o edita
function editar(req, res){
    const {id} = req.params // O ideal é sempre desestrutura e enviar a resposta aqui no controller
    Cliente.editar(req, res, id)
}

// Busca cliente específico no banco de dados e o atualiza
function atualizar(req, res){
    const {id} = req.params // O ideal é sempre desestrutura e enviar a resposta aqui no controller
    const valores = req.body
    Cliente.atualizar(req, res, id, valores)
}

// Cria grupos de email para página de envio
function email(req, res){
    Cliente.email(req, res)
}


// Envia emails
function sendEmail(req, res){
    Cliente.sendEmail(req, res)
}

module.exports = {
    cadastrar, 
    listar,
    remover, 
    editar, 
    atualizar,
    email,
    sendEmail
}