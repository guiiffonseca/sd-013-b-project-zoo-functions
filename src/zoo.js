const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    return ids.map((idsIndex) => data.species.find((animal) => animal.id === idsIndex));
  }
  if (ids.length > 1) {
    return ids.map((idsIndex) => data.species.find((animal) => animal.id === idsIndex));
  }
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animalName) => animal === animalName.name).residents
    .every((animalAge) => animalAge.age >= age);
}

function getEmployeeByName(findName) {
  if (findName === undefined) {
    return {};
  }
  return data.employees.find((name) => findName === name.firstName || findName === name.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return data.employees.some((idM) => idM.managers.find((idT) => idT === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
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
