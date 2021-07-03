const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie, index) => specie.id === ids[index]);
}
function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  return employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName)
     || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(animals) {
  if (!animals) {
    return species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
  }
  return species.find((specie) => specie.name === animals).residents.length;
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
