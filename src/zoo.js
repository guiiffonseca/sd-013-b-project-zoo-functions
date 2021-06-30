const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  let animalsAge = species.find((animals) => animals.name === animal).residents;
  animalsAge = animalsAge.every((ages) => ages.age > age);
  return animalsAge;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const nameEmployees = employees.find((employe) =>
    employe.firstName === employeeName || employe.lastName === employeeName);
  return nameEmployees;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  const managers = employees
    .map((employee) => employee.managers)
    .reduce((employee, actual) => employee + actual
      .some((frase) => frase === id), 0) > 0;
  return managers;
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  const lastEmployee = { id,
    firstName,
    lastName,
    managers,
    responsibleFor };
  employees.push(lastEmployee);
}

function countAnimals(speciesP) {
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
