/* eslint-disable editorconfig/editorconfig */
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === '') return [];
  let final = [];
  let acctual = '';
  const filtro = (valor) => valor.id === acctual;

  ids.forEach((atual) => {
    acctual = atual;
    final.push(data.species.filter(filtro)[0]);
  });
  return final;
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'))
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'))