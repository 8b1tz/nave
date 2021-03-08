
const conexao = require('../infraestrutura/conexao')

class Projects{
    store(projects, res){
      
        const sql = 'INSERT INTO Projects SET ?'

        conexao.query(sql, projects, (erro,resultados) =>{
            if(erro){
                res.json(erro)
            }
            else{
                res.json(resultados)
            }
        })
    }
    index(res){
        const sql = `SELECT p.id, p.name , n.name as navers from navers n join naverprojects np on n.id = np_navers join 
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
    show(id, res){
        const sql = `SELECT * from project where id = ${id} `
        
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



module.exports = new Projects()