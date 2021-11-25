// Faz a importação do mysql
const mysql = require('mysql')
// Utiliza o método createConnection para fazer a conexão com o banco de dados
const conexao = mysql.createConnection({
    // Dados configurados do banco de dados
    host: 'xxxxxxxxxx', 
    port: 3306,
    user: 'xxxxx',
    password: 'xxxxxxxx',
    database: 'xxxxxx'
})

// Exportando funções do banco de dados
module.exports = conexao



