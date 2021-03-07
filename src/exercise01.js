/* E1
  Crie uma função que recebe duas strings
  e retorna a de maior comprimento.
*/

window.exercise01 = function () {
  let string1 = prompt("insira uma string");
  let string2 = prompt("Insira outra string");
  let maior = string1.length > string2.length ? string1 : string2;
  console.log(`A string de maior comprimento é ${maior}`);
};
