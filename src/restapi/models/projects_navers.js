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
}

module.exports = new Projects_navers()