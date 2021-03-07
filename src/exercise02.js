/* E2
  Dado a seguinte string `‘teste 1 de 2 string 3’`,
  substitua todas as ocorrências de números por `$`.
*/

window.exercise02 = function () {
  let string = "teste 1 de 2 string 3";
  let split = string.split(" ");
  for (let i = 0; i < split.length; i++) {
    if (split[i] === "1" || split[i] === "2" || split[i] === "3") {
      split[i] = "$";
    }
  }
  console.log(split.join(" "));
};
