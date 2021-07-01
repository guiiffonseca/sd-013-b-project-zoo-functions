const { species } = require('./data');
const { employees } = require('./data');

const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((idd) => species.find((specie) => (specie.id === idd)));
}

const getAnimalsOlderThan = (animal, age) => species
  .find((specie) => specie.name === animal).residents
  .every((resident) => resident.age > age);

const employeesFunction = (empName) => employees
  .map((employee) => employee)
  .find((eName) => eName.firstName === empName || eName.lastName === empName);

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employeesFunction(employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

const isManager = (id) => employees
  .some((employee) => employee.managers
    .some((idsEmp) => idsEmp === id));

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciespar) {
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
