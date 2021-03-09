const projects = require("../models/projects")
const conexao = require("./conexao")

class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarNavers()
        this.criarProjects()
        this.criarProjects_navers()
    }

//Criação das tabelas 

    criarNavers(){
        const sql = `CREATE TABLE IF NOT EXISTS navers (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, 
        job_role varchar(50), birthdate date NOT NULL, admission_date date NOT NULL, PRIMARY KEY(id))`
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
        const sql = `CREATE TABLE IF NOT EXISTS projects (id int NOT NULL AUTO_INCREMENT, name varchar(50), PRIMARY KEY(id))`
        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela projects criada com sucesso')
            }
        })
    }

    criarProjects_navers(){
        const sql = `CREATE TABLE IF NOT EXISTS projects_navers (np_id int NOT NULL AUTO_INCREMENT, np_navers int, np_project int, PRIMARY KEY(np_id),FOREIGN KEY (np_navers) REFERENCES Navers (id),FOREIGN KEY (np_project) REFERENCES Projects (id))`
        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela projects_navers criada com sucesso')
            }
        })
    }
}
module.exports = new Tabelas