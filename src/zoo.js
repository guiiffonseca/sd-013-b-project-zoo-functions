const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find((specie) => specie.name === animal)
    .residents.every((residentAge) => residentAge.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animal) {
  // seu código aqui
  const countResidents = {};
  data.species.forEach(({ name, residents }) => {
    countResidents[name] = residents.length;
  });
  if (animal === undefined) {
    return countResidents;
  }
  return countResidents[animal];
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
