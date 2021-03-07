/* E3
  Dado o objeto `{4: ‘a’, 3: ‘e’, 1: ‘i’, 5: ‘s’}`,
  substitua os números na frase `‘T35t3 d3 35t4g1o’` conforme a sua respectiva letra
*/

window.exercise03 = function () {
  let objeto = { 4: "a", 3: "e", 1: "i", 5: "s" };
  let frase = "T35t3 d3 35t4g1o";
  let coisa = frase.split("");
  for (let i = 0; i < coisa.length; i++) {
    if (isFinite(coisa[i])) {
      coisa[i] = objeto[coisa[i]];
    }
  }
  console.log(coisa.join(""));
};
