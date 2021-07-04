const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const species = data.species.filter((specie) => ids.some((id) => id === specie.id));
  return species;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.species.find((specie) => specie.name === animal).residents;
  const olderThanAge = animals.every((element) => element.age >= age);
  return olderThanAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  let employee;

  if (employeeName === undefined) {
    employee = {};
  } else {
    employee = data.employees.find(
      (person) => person.firstName === employeeName || person.lastName === employeeName,
    );
  }

  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const employee = {
    ...personalInfo,
    ...associatedWith,
  };

  return employee;
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((person) => person.managers.some((manager) => manager === id));
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
