const { species, employees } = require('./data');
const data = require('./data');

const managersIds = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8', '0e7b460e-acf4-4e17-bcb3-ee472265db83'];

function getSpeciesByIds(...ids) {
  return ids.map((specieId) =>
    species.find((specie) => specie.id === specieId));
}

function getAnimalsOlderThan(animal, age) {
  return !!species
    .find((anm) => anm.name === animal)
    .residents.every((anm) => anm.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(
    (employee) =>
      employeeName === employee.firstName || employeeName === employee.lastName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  // Consultado em: https://stackoverflow.com/questions/39121695/merge-two-objects-with-es6
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return !!managersIds.find((managerId) => managerId === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specie) {
  // Consultado em: https://stackoverflow.com/questions/19874555/how-do-i-convert-array-of-objects-into-one-object-in-javascript
  if (specie === undefined) {
    return species
      .reduce((obj, animal) => ({ ...obj, [animal.name]: animal.residents.length }), {});
  }
  return species.find((animal) => animal.name === specie).residents.length;
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
