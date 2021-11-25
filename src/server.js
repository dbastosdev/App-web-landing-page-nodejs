// Importação de módulos externos
const express = require('express')
const path = require('path')
const session = require('express-session')


// Módulos criados no projeto:
// Rotas
const routes = require('./routes/app')

// Instância do express
const app = express()

// Configuração de arquivos públicos e estáticos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname, 'public')))

// Permite decodificar informações de formulários
app.use(express.urlencoded({extended: true}))

/*
 * http://expressjs.com/en/resources/middleware/session.html - config
*/
 app.use(session({secret: 'mudeiSegredo', resave: false, saveUninitialized: false}));

 //Definindo as rotas
app.use('/', routes)

// Levantando o servidor 
const port = process.env.PORT || 1234
app.listen(port, () => console.log(`Servidor ouvindo na porta http://localhost:${port}`))