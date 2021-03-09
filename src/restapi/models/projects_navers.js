const conexao = require('../infraestrutura/conexao')

class Projects_navers{

    //Método para fazer inserir na tabela projects_navers, logo fazendo uma ligção entre navers e projetos
    store(projects_navers, res){
      
        const sql = 'INSERT INTO projects_navers SET ?'

        conexao.query(sql, projects_navers, (erro,resultados) =>{
            if(erro){
                res.json(erro)
            }
            else{
                res.json(resultados)
            }
        })
    }
    //Método que mostra os ids ligados entre navers e projects
    index(res){
        const sql = `SELECT * from projects_navers `

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

module.exports = new Projects_navers()