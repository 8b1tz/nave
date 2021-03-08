const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Navers{
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
    show(id, res){
        const sql = `SELECT n.id, n.name, n.birthdate, n.job_role, p.name as projects from navers n join naverprojects np on np.np_navers = n.id join projects p on p.id = np.np_project where n.id = ${id} `
        
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