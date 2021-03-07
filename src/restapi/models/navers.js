const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Navers{
    adiciona(navers, res){
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

    lista(res){
        const sql = `SELECT n.id, n.name, n.birthdate, n.admission_date, n.job_role, 
        p.name as projects from navers n join naverprojects np on n.id = np_navers join 
        projects p on p.id = np_project `

        conexao.query(sql,(erro, resultados)=> {
            if (erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Navers()