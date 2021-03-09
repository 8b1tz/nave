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
    //Método para ver um projeto especifico que tenha navers
    show(id, res){
        const sql = `SELECT p.id, p.name, n.name as naver
         from navers n join projects_navers np on np.np_navers = n.id join projects p on p.id = np.np_project where np.np_navers = ${id} `
        
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