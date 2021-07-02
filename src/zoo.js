const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

// map - vai percorrer o array e retorna outro array de acordo com a função passada.
// rest - pega strings e junta num array.
// find - procura o id do parâmetro no id de cada espécie
// se não passar nenhum parâmetro o map vai retornar o array vazio, visto q ele ja retorna um array, independente do parâmetro passado, por isso passa no primeiro teste.
// retorna um array com a espécie do id do parâmetro.

function getAnimalsOlderThan(animal, age) {
  return data.species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

// find - procura dentro das espécies o nome do animal passado no parâmetro (animal).
// every - verifica se TODOS os residentes tem a idade mínima passada no parâmetro (age).
// retorna true ou false.

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

// no if se não passar nenhum parâmetro retorna um objeto vazio.
// no array employees (array de objetos), procura o objeto com o firstName ou lastName passado no parâmetro.
// retorna um objeto com as informações do employee passado no parâmetro.

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// o spread junta os 2 objetos do parâmetro e retorna um objeto.

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

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
