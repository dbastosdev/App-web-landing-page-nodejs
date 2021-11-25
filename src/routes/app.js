// Importa o método router do express
const router = require('express').Router()

// Importa o controller de contatos
const UsuarioController = require('../controllers/usuarios')
const ClientesController = require('../controllers/clientes')

// rota 'landing page' para cadastro de usuário 
router.get('/', (req, res) => {
    res.render('landing') 
})

// rota 'landing page' para recebimento de emails, chama controller de clientes
router.post('/', (req, res) => {
    // Só cadastra se houver dado no email
    if(req.body.email){
        ClientesController.cadastrar(req, res)
    }else{
        res.send("Preencha todos os campos corretamente")
    }       
})

// rota 'página de sucesso' após o cadstro de email 
router.get('/sucesso', (req, res) => {
    res.render('sucesso') 
})

// rota 'erro ao cadastrar' após o envio do formulário de email 
router.get('/errocadastro', (req, res) => {
    res.render('errocadastro') 
})

// rota 'login' da página administrativa
router.get('/admin', (req, res) => {
    if(req.session.nome){
        res.redirect('dashboard') 
    } else {
        res.render('login') // redireciona para página de login caso não haja seção
    }
})

// Pega e trata envio do formulário
router.post('/admin', (req, res) => {
    UsuarioController.login(req, res)
})

//Rota da página de login
router.get('/loginerro', (req, res) => {
    if(req.session.nome){
        res.redirect('dashboard') 
    } else {
        res.render('loginerro') // redireciona para página de login caso não haja seção
    }    
})

// dashboard
router.get('/dashboard', (req, res) => {
    // Verifica se sessão está ativa. Se não estiver, redireciona para login
    if(req.session.nome){
        // Chama controller e model responsáveis por buscar os clientes cadastrados no banco
        ClientesController.listar(req, res)
        //res.render('dashboard', {usuario: req.session.nome }) 
    } else {
        res.redirect('/admin') // redireciona para página de login caso não haja seção
    }
})

// Renderiza a página de envio de e-mails 
router.get('/dashboard-mail', (req, res) => {
    // Verifica se sessão está ativa. Se não estiver, redireciona para login
    if(req.session.nome){
        // renderiza seção de envio de e-mails e envia para front dados dos grupos
       ClientesController.email(req, res)
    } else {
        res.redirect('/admin') // redireciona para página de login caso não haja seção
    }
    
})

// Recebimento dos dados e envio dos emails para grupos 
router.post('/dashboard-mail', (req, res) => {
    // Verifica se sessão está ativa. Se não estiver, redireciona para login
    if(req.session.nome){
       // recebe dados de email e passa ao controller para envio
       ClientesController.sendEmail(req, res)
       //res.send(req.body)
    } else {
        res.redirect('/admin') // redireciona para página de login caso não haja seção
    }
    
})

// Finalizando uma seção 
router.get('/sair', (req, res) => {
    req.session.destroy() 
    res.redirect('admin')
})

// Excluindo contato
router.get('/remove/:id', (req, res) => {
    // Verifica se sessão está ativa. Se não estiver, redireciona para login
    if(req.session.nome){
        // Chama controller e model responsáveis por deletar contato do banco
        ClientesController.remover(req, res)
        //res.render('dashboard', {usuario: req.session.nome }) 
    } else {
        res.redirect('/admin') // redireciona para página de login caso não haja seção
    } 
})

// Editando contato
router.get('/edit/:id', (req, res) => {
    // Verifica se sessão está ativa. Se não estiver, redireciona para login
    if(req.session.nome){
        // Chama controller e model responsáveis por deletar contato do banco
        ClientesController.editar(req, res)
        //res.render('dashboard', {usuario: req.session.nome }) 
    } else {
        res.redirect('/admin') // redireciona para página de login caso não haja seção
    } 
})

// Atualizando contato
router.post('/edit/:id', (req, res) => {
    // Verifica se sessão está ativa. Se não estiver, redireciona para login
    if(req.session.nome){
        // Chama controller e model responsáveis por deletar contato do banco
        ClientesController.atualizar(req, res)
        //res.render('dashboard', {usuario: req.session.nome }) 
    } else {
        res.redirect('/admin') // redireciona para página de login caso não haja seção
    } 
})

// Resposta padrão para rota não definida
router.use((req, res)=>{
    res.render("erro404")
})

// Exportamos o router para que seja usado em server.js
module.exports = router