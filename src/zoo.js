const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids === undefined) return [];
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specieSelected = species.find(({ name }) => name === animal);
  const animmalsSelected = specieSelected.residents;
  const count = animmalsSelected.filter((animmalSelected) => animmalSelected.age >= age);
  if (count.length === animmalsSelected.length) return true;
  return false;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id: `${id}`,
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    managers: `${managers}`.split(/\s*,\s*/),
    responsibleFor: `${responsibleFor}`.split(/\s*,\s*/),
  };
}

function isManager(id) {
  // seu código aqui
  const employeeSelected = employees.find(({ id }) => id === id);
  console.log(employeeSelected);
  if(employeeSelected.managers === []) return false;
  return true;
}

isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83');

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciesParam) {
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
