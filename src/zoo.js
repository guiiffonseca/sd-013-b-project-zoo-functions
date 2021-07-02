// const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((value) => value.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((value) => value.name === animal).residents
    .every((value) => value.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return !data.employees.some((value) => value.id === id && value.managers.length > 1);
}

function addEmployee(id, firstName, lastName, man = [], res = []) {
  const personInfo = { id, firstName, lastName };
  const associate = { managers: man, responsibleFor: res };
  const employee = { ...personInfo, ...associate };
  data.employees.push(employee);
}

function countAnimals(species) {
  if (!species) {
    return data.species.reduce((accumulator, specie) => {
      const { name } = specie;
      accumulator[name] = specie.residents.length;
      return accumulator;
    }, {});
  }
  return data.species.find((specie) => specie.name === species).residents.length;
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
