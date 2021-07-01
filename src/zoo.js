const data = require('./data');

const { species, employees } = data;

const getSpeciesByIds = (...idSpecies) =>
  idSpecies.map((id) => species.find((specie) => specie.id === id));

// species[0].residents[0].age;
// Array.isArray(species.find((specie) => specie.name === animal));
// |======| RETORNOS |======|
// filter, map, sort -> array
// some, every -> boolean
// find -> object

const getAnimalsOlderThan = (animal, age) => species
  .find((specie) => specie.name === animal).residents.every((resident) => resident.age >= age);

const getEmployeeByName = (...employeeName) => (employeeName.length !== 0 ? employees
  .find((employee) => `${employee.firstName} ${employee.lastName}`
    .includes(employeeName.join())) : {});

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(paramSpecies) {
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
