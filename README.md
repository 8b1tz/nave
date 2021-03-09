<h1>Teste Nave.rs</h1>
<b>Nome</b>: Yohanna de Oliveira Cavalcanti
<hr>
<h2>Desafio:</h2>
<ul>
  <li>para ver os códigos apenas precisa acessar o src, lá estará os exércicios do 1 até 10.</li>
</ul>
pode ver o código em funcionamento do desafio (APENAS OS EXERCICIOS DE 1 A 10) no site: https://codesandbox.io/s/teste-estagio-template-forked-v2x9p?file=/src/exercise03.js

<h2>Desafio Backend:</h2>
 <ul>
   <li>para testar é recomendado usar o <b>postman</b>, existe url para utilizar GETS e POSTS, como por exemplo para criar as tabelas e listar as mesmas.</li>
   <li>para montar a API utilizei a biblioteca <b>express</b>, e para o banco de dados foi utilizado <b>MySql.</b></li>
</ul>
<h3>Projects:</h3>
<ul>
<b><h4>Métodos:</h4></b>
<li><b>Store</b>: Insere itens na tabela, se utilizar o postman necessita ir usar a url localhost:(porta)/projects, utilizando o método <b>POST.</b></li>
<li><b>Index</b>: Lista todos os projetos, se utilizar o postman necessita utilizar a url localhost:(porta)/projects, poré m utilizando o método <b>GET.</b></li>
<li><b>Show</b>: Mostra um projeto de ID especifico caso ele tenha algum navers nele, se utilizar o post necessita usar a url localhost:(porta)/projects/(id do projeto que você quer o retorno), utilizando método <b>GET.</b></li>
</ul>

<h3>Navers:</h3>
<ul>
<b><h4>Métodos:</h4></b>
<li><b>Store</b>: Insere itens na tabela, se utilizar o postman necessita ir usar a url localhost:(porta)/navers, utilizando o método <b>POST.</b></li>
<li><b>Index</b>: Lista todos os navers, se utilizar o postman necessita utilizar a url localhost:(porta)/navers, poré m utilizando o método <b>GET.</b></li>
<li><b>Show</b>: Mostra um naver de ID especifico caso ele tenha projeto, se utilizar o post necessita usar a url localhost:(porta)/navers/(id do naver que você quer o retorno), utilizando método <b>GET.</b></li>
</ul>
</ul>
<h3>Projects_navers</h3>
<ul>
<li>Tabela criada para ligar os navers com os projetos, apenas contém o método de inseri, utilizando a url localhost:(porta)/projects_navers, utilizando método <b>POST.</b></li>
</ul>

<hr>
<h3>Dificuldades:</h3>
<ul>
<li>Tive dificuldades pois não sou acostumada a utilizar as bibliotecas que utilizei, tive que pesquisar a maioria das coisas.</li>
</ul>
<h2>ATENÇÃO!!</h3>
<ul>
<li>Necessário no árquivo conexao dentro da pasta infraestrutura colocar os dados do seu banco, pois dados diferentes podem acarretar erros. </li>
<li>Todos os arquivos da parte de backend se localizam dentro da pasta <b>restapi.</b></li>
</ul>

