const data = require('./data');

const { species } = data;

const { employees } = data;
// seu código aqui
const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) return [];
  return species.filter((specie) => ids.includes(specie.id));
};

// seu código aqui
const getAnimalsOlderThan = (animal, age) =>
  species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);

// seu código aqui
const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return employees.find((employee) =>
    employeeName === employee.firstName || employeeName === employee.lastName);
};

// seu código aqui
const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
