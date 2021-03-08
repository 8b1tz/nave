
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
}

module.exports = new NaverProjects()