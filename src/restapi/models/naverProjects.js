
const conexao = require('../infraestrutura/conexao')

class NaverProjects{
    adiciona(naverprojects, res){
      
        const sql = 'INSERT INTO NaverProjects SET ?'

        conexao.query(sql, naverprojects, (erro,resultados) =>{
            if(erro){
                res.json(erro)
            }
            else{
                res.json(resultados)
            }
        })
    }
    lista(res){
        const sql = `SELECT p.id, p.name from navers n join naverprojects np on n.id = np_navers join 
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

module.exports = new NaverProjects()