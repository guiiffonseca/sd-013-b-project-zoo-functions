const { species } = require('./data');
const data = require('./data');

// A colega de turma Mayu fez um code review e indicou usar o Rest no 1º Desafio
function getSpeciesByIds(...ids) { // 1º Filtrar as espécies de acordo com o ID especificado;
  return species.filter(({ id }) => ids.includes(id)); // Verificar se o IDS está incluído no ID;
}

function getAnimalsOlderThan(animal, age) {
  // 1º Acessar o objeto do animal especificado
  return species.find((element) => element.name === animal).residents
    .every((penguins) => penguins.age >= age); // 2º Verificar se todos os animais possui a idade mínima específicada
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

function countAnimals(species1) {
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
