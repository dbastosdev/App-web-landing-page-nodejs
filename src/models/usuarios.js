// Banco de dados
const conexao = require('../database/bd')

class Usuario {
    login(req, res){

        const sql = `SELECT * FROM usuarios WHERE email='${req.body.email}'`
        conexao.query(sql, (erro, resultados) => { 
            
            if(resultados){
                //console.log(typeof resultados[0])
                //res.send(resultados)
                if(resultados[0] == undefined){
                    //res.send('usuário não encontrado')
                    res.render('loginerro', {erro: 'usuário não encontrado'})
                } else {
                    // Pega os dados do formulário e avalia a seção
                    if(req.body.email == resultados[0].email && req.body.senha == resultados[0].senha){
                        // inicializa a seção com o nome do usuário
                        req.session.nome = resultados[0].nome
                        res.redirect('dashboard') 
                    } else {
                        //res.send('usuário ou senha incorretas')
                        res.render('loginerro', {erro: 'Senha incorreta'})
                    }
                }
            } else {
                res.render('loginerro', {erro: 'usuário não encontrado'})
            }       
        })
    }

}

module.exports = new Usuario