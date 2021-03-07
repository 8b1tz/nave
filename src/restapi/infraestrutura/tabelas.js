const projects = require("../models/projects")
const conexao = require("./conexao")

class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarNavers()
        this.criarProjects()
        this.criarNaverProjects()

    }
    
    criarNavers(){
        const sql = `CREATE TABLE IF NOT EXISTS Navers (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, 
        job_role varchar(50), birthdate datetime NOT NULL, admission_date datetime NOT NULL, PRIMARY KEY(id))`
        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela navers criada com sucesso')
            }
        })
    }
    
    criarProjects(){
        const sql = `CREATE TABLE IF NOT EXISTS Projects (id int NOT NULL AUTO_INCREMENT, name varchar(50), PRIMARY KEY(id))`
        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela projects criada com sucesso')
            }
        })
    }

    criarNaverProjects(){
        const sql = `CREATE TABLE IF NOT EXISTS NaverProjects (np_id int NOT NULL AUTO_INCREMENT, np_navers int, np_project int, PRIMARY KEY(np_id),FOREIGN KEY (np_navers) REFERENCES Navers (id),FOREIGN KEY (np_project) REFERENCES Projects (id))`
        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela naverProjects criada com sucesso')
            }
        })

    }
   
}
module.exports = new Tabelas