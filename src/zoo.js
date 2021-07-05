const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...idAnimal) {
  /* compara cada espécie com o id atual passado no parâmetro  */
  return species.filter((specie, index) => specie.id === idAnimal[index]);
}
/* -------------------------------------------------------------------- */
function getAnimalsOlderThan(animal, age) {
/* Verifica se o parâmentro passado está presente no obj, e verifica com o every se as idades em todas as posições atendem o paramentro mínimo solitado de idade */
  return species
    .filter((pet) => pet.name === animal)
    .every((bicho, index) => bicho.residents[index].age > age);
}
/* -------------------------------------------------------------------- */
function getEmployeeByName(employeeName) {
/* Se o parâmentro passado for vazio, retorna um obj vazio, caso contrário retorna o primeiro elemento que seja igual ao passado no parâmetro. */
  if (employeeName === undefined) {
    return {};
  } return employees
    .find((pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName);
}
/* -------------------------------------------------------------------- */
function createEmployee(personalInfo, associatedWith) {
  // Combina dois parametros com base Spread Operator (...), criando um novo objeto.
  return { ...personalInfo, ...associatedWith };
}
/* -------------------------------------------------------------------- */
function isManager(id) {
  return employees.some((func, index) => id === func.managers[index]);
}
/* -------------------------------------------------------------------- */
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}
/* -------------------------------------------------------------------- */
function countAnimals(specie) {
  const obj = {};
  species.forEach((animal) => {
    obj[animal.name] = animal.residents.length;
  });
  // se o parametro passado for vazio, retorna o um obj com o nome e quant de cada espécie, objeto esse preenchido pelo forEach acima.
  if (specie === undefined) {
    return obj;
  }
  let cont = 0;
  // percorre o obj Species e seta em cont a quantidade de cada espécie.
  species.forEach((bicho) => {
    if (specie === bicho.name) {
      cont = bicho.residents.length;
    }
  });
  return cont;
}
/* -------------------------------------------------------------------- */
function calculateEntry(entrants = 0) {
  const { Child = 0, Senior = 0, Adult = 0 } = entrants;
  const { Child: priceC, Senior: priceS, Adult: priceA } = prices;
  const sum = priceC * Child + priceS * Senior + priceA * Adult;
  return sum;
}
function getAnimalMap(options) {
  // seu código aqui
}
/* -------------------------------------------------------------------- */
function getSchedule(dayName) {
  // seu código aqui
}
/* -------------------------------------------------------------------- */
function getOldestFromFirstSpecies(id) {
  // pega o id do 1º animal q o func cuida, através da comparação do id do funcionário passado como  como parâmetro.
  const specieId = employees.find((func) => func.id === id).responsibleFor[0];
  // Seleciona a animal pelo id da espécie que o funcionário cuida.
  const selectedSpecie = species.find((specie) => specie.id === specieId);
  // Selecina o primeiro animal daquela espécie.
  let oldest = selectedSpecie.residents[0];
  // compara qual animais mais velho.
  selectedSpecie.residents.forEach((resident) => {
    if (resident.age > oldest.age) {
      oldest = resident;
    }
  });
  // Desctructuring o obj animail mais velho.
  const { name, sex, age } = oldest;
  return [name, sex, age];
}
/* -------------------------------------------------------------------- */
function increasePrices(percentage) {
  prices.Adult = Math.round(prices.Adult * (percentage + 100)) / 100;
  prices.Senior = Math.round(prices.Senior * (percentage + 100.01)) / 100;
  prices.Child = Math.round(prices.Child * (percentage + 100.01)) /100;
}
/* -------------------------------------------------------------------- */
function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
