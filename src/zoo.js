const data = require('./data');
const { species } = require('./data');

// Utilizei a feature rest para que fosse possível passar vários parâmetros ao mesmo tempo.
// Usei o .filter pois retorna um novo array com os objetos que passam na regra de negócio
// O rest cria um novo array com os valores passados para ele(por isso usei o .includes)
// Desestruturei o id pois é uma chave de um objeto do array species
function getSpeciesByIds(...ids) {
  const filterSpecies = species.filter(({ id }) => ids.includes(id));
  return filterSpecies;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
}

function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(animalsSpecies) {
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
