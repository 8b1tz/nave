/* E4
 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada,
 imprima o seu endereço no formato `‘ENDERECO, NUMERO, CIDADE/ESTADO’`.
 Utilize a fetch API (https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) para realizar a requisição.
*/

window.exercise04 = function () {
  async function getCEP(url) {
    const response = await fetch(url);
    const json = await response.json();
    showContent(json);
  }

  function showContent(cep) {
    console.log(
      `ENDERECO: ${cep.logradouro} CIDADE: ${cep.localidade}/${cep.uf}`
    );
  }
  getCEP("https://viacep.com.br/ws/58035170/json");
};
