const mysql = require('mysql2')
//conexao com o banco mysql (mude se voce não tiver os mesmos dados.)
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234567',
    database: 'teste_navers'
})

module.exports = conexao;
