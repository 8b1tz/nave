const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Navers{

    //Metodo para adicionar dados na tabelas.
    store(navers, res){
        const birthdate = moment(navers.birthdate ).format('YYYY-MM-DD HH:MM:SS')
        const admission_date = moment(navers.admission_date, 'YYYY-NN-SS' ).format('YYYY-MM-DD HH:MM:SS')
        const SQLDatado ={...navers, birthdate, admission_date}
        const sql = 'INSERT INTO Navers SET ?'

        conexao.query(sql, SQLDatado, (erro,resultados) =>{
            if(erro){
                res.json(erro)
            }
            else{
                res.json(resultados)
            }
        })
    }

    //Método para buscar todos os dados da tabela
    index(res){
        const sql = `SELECT * from navers `

        conexao.query(sql,(erro, resultados)=> {
            if (erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }

    //Método pra buscar dado de id especifico
    show(id, res){
        const sql = `SELECT * from navers n where n.id = ${id} `
        
        conexao.query(sql,(erro, resultados)=> {
            if (erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }
    //Método para deletar navers
    deleta(id, res) {
        const sql = 'DELETE FROM navers WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({resultados})
            }
        })
    }
}

module.exports = new Navers()