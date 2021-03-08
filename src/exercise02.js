/* E2
  Dado a seguinte string `‘teste 1 de 2 string 3’`,
  substitua todas as ocorrências de números por `$`.
*/

window.exercise02 = function () {
  let frase = "teste 1 de 2 string 3"
  let resp = frase.replaceAll(/[0-9]/g,x=>{
    return '$'
  })
  console.log(resp)
};
