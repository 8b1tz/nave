const conexao = require('../infraestrutura/conexao')

class Projects{
    //Método para adicionar dados na tabela Projects
    store(projects, res){
      
        const sql = 'INSERT INTO Projects SET ?'

        conexao.query(sql, projects, (erro,resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }
    //Método para listar todos os projetos
    index(res){
        const sql = `SELECT * from projects `

        conexao.query(sql,(erro, resultados)=> {
            if (erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }
    //Método para ver um projeto especifico
    show(id, res){
        const sql = `SELECT * from projects p where p.id = ${id} `
        
        conexao.query(sql,(erro, resultados)=> {
            if (erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }
    //Método para deletar projeto pelo ID
    deleta(id, res) {
        const sql = 'DELETE FROM projects WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({resultados})
            }
        })
    }
}



module.exports = new Projects()