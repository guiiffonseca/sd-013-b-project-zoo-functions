const { species, employees } = require('./data');
const data = require('./data');

// eslint-disable-next-line no-shadow
function getSpeciesByIds(...ids) {
  // Retorna o id das especies
  const idReturn = species.filter((specie) => ids.includes(specie.id));
  return idReturn;
}

function getAnimalsOlderThan(animal, age) {
  // Retorna a idade do animal
  const animalAge = species.find((specie) => specie.name === animal).residents
    .every((index) => index.age >= age);
  return animalAge;
}

function getEmployeeByName(employeeName) {
  // Retorna o empregado 
  if (employeeName === undefined) return {};
  return employees.find((thing) =>
    thing.firstName === employeeName || thing.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // Cria um employee
  const emptyArray = {};
  return Object.assign(emptyArray, personalInfo, associatedWith);
}

function isManager(id) {
  // Verifica se o employee e gerente
  return employees.some((employee) => employee.manager === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // Adiciona um novo empregado no fim do array
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
  return data.employees;
}

function countAnimals() {
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
