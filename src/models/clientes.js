// Banco de dados
const conexao = require('../database/bd')

// Módulo de envio de emails
const email = require('../utils/sendMail') 

class Clientes {
    cadastrar(req, res){
        //const {nome, email} = req.body (NÃO DESESTRUTUROU DADOS COLOCOU DIRETO)
        const data = Date.now()
        const {nome, email} = req.body
        // prepara a query
        const sql = `INSERT INTO clientes SET ?`
        // executa a query -> o segundo parâmetro é o email do req.body
        conexao.query(sql, {nome, email, data}, (erro, resultados) => { 
            if(erro){
                console.log(erro)
                res.render('errocadastro', {erro: 'Erro ao cadastrar cliente'})
            } else {
                res.redirect('sucesso') 
            }      
        })
    }

    listar(req, res){
        // prepara a query
        const sql = `SELECT * FROM clientes`
        // executa a query 
        conexao.query(sql, (erro, resultados) => { 
            if(erro){
                console.log(erro)
                res.send('erro ao buscar lista de clientes')
            } else {
                
                // Faz o somatório de cadastros por dia da semana
                let semana = [0, 0, 0, 0, 0, 0]
                for(let i=0; i < resultados.length; i++){
                   let diaSemana = new Date(Number(resultados[i].data)).getDay()
                   switch(diaSemana){
                       case 0:
                           semana[0] += 1
                           break
                       case 1:
                           semana[1] += 1
                           break
                       case 2:
                           semana[2] += 1
                           break
                       case 3:
                           semana[3] += 1
                           break
                       case 4:
                           semana[4] += 1
                           break
                       case 5:
                           semana[5] += 1
                           break
                       case 6:
                           semana[6] += 1
                           break
                   }
                   // (teste) console.log(diaSemana)
               }

               // (teste) console.log(semana)
                
                // Faz a conversão de datas de ms para string
                for(let i=0; i < resultados.length; i++){
                    let dia = new Date(Number(resultados[i].data)).getDate()
                    let mes = new Date(Number(resultados[i].data)).getMonth() + 1
                    let ano = new Date(Number(resultados[i].data)).getFullYear()                     
                    resultados[i].data = `${dia}/${mes}/${ano}`
                    // (teste) console.log(resultados[i].data)
                }          
                // Envia resposta
                res.render('dashboard', {resultados, semana, usuario: req.session.nome}) 
            }      
        })
    }

    remover(req, res, id){
        // prepara a query
        const sql = 'DELETE FROM clientes WHERE id=?'
        // executa a query 
        conexao.query(sql, id, (erro, resultados) => { 
            if(erro){
                console.log(erro)
                res.send('cliente não encontrado em nossa base de dados')
            } else {
                res.redirect('/dashboard') 
            }      
        })
    }

    editar(req, res, id){
        // prepara a query
        const sql = `SELECT * FROM clientes WHERE id=${id}`
        // executa a query 
        conexao.query(sql, (erro, resultados) => { 
            if(erro){
                console.log(erro)
                res.send('cliente não encontrado em nossa base de dados')
            } else {
                res.render('dashboard-edit', {resultados, usuario: req.session.nome }) 
            }      
        })
    }

    atualizar(req, res, id, valores){
        // prepara a query
        const sql = `UPDATE clientes SET ? WHERE id=${id}`
        // executa a query 
        conexao.query(sql, valores, (erro, resultados) => { 
            if(erro){
                console.log(erro)
                res.send('cliente não encontrado em nossa base de dados')
            } else {
                res.redirect('/dashboard') 
            }      
        })
    }

    email(req, res){
        // prepara a query
        const sql = `SELECT * FROM clientes`
        // executa a query 
        conexao.query(sql, (erro, resultados) => { 
            if(erro){
                console.log(erro)
                res.send('Não encontrado dados no banco')
            } else {

                // Filtrando os grupos
                let grupos = []
                // Criando um array de grupos
                for(let i = 0; i < resultados.length; i++){
                    grupos.push(resultados[i].grupo)
                }

                // Removendo repetidos
                const gruposSemRepeticao = grupos.filter((elemento, index) => {
                    return grupos.indexOf(elemento) === index
                })

                // [teste] console.log(gruposSemRepeticao)

                res.render('dashboard-mail',{gruposSemRepeticao, resultados, usuario: req.session.nome}) 
            }      
        })
    }

    sendEmail(req, res){
        // Faz recebimento de dados do formulário de envio de emails
        const {titulo, grupo, mensagem} = req.body
        if(!grupo || !titulo || !mensagem){
            res.send("Preencha todos os campos corretamente para enviar o e-mail")
        } else {
            // prepara a query
        const sql = `SELECT * FROM clientes WHERE grupo='${grupo}'`
        // executa a query 
        conexao.query(sql, (erro, resultados) => { 
            if(erro){
                console.log(erro)
                res.send('Não encontrado dados no banco')
            } else {

                // Selecionando todos os emails de um determinado grupo
                let emails = []
                // Criando um array de grupos
                for(let i = 0; i < resultados.length; i++){
                    emails.push(resultados[i].email)
                }

                // [teste] console.log(emails)

                // Enviando email
                try{
                    email.main(titulo, emails, mensagem)
                }catch(erro){
                    console.log(erro)
                }
                res.send('email enviado com sucesso') 
            }      
        })
        }
    }
        
}

module.exports = new Clientes