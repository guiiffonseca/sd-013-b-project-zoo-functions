const data = require('./data');
const managerList = require('./managerList');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return ids.map((id) => species.filter((specimen) => specimen.id === id)[0]);
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  // todos os animais daquela espécie possui a idade maior ou igual a age
  const animalSpecie = species.filter(
    (specimen) => specimen.name === animal,
  )[0];

  return animalSpecie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const { employees } = data;

  if (!employeeName) return {};

  return employees.filter(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  )[0];
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return managerList.some((managerId) => managerId === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // const { employees } = data;
  // employees.push({ id, firstName, lastName, managers, responsibleFor });
  // return employees;
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
