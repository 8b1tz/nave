/* E3
  Dado o objeto `{4: ‘a’, 3: ‘e’, 1: ‘i’, 5: ‘s’}`,
  substitua os números na frase `‘T35t3 d3 35t4g1o’` conforme a sua respectiva letra
*/

window.exercise03 = function () {
  let objeto = { 4: "a", 3: "e", 1: "i", 5: "s" };
  let frase = "T35t3 d3 35t4g1o";
  let result = frase.replaceAll(/1|3|4|5/g, (x) => {
    return objeto[x];
  });
  console.log(result);
};
