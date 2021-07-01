const data = require('./data');

function getSpeciesByIds(...ids) {
  const request = [];
  const arrayId = ids;
  arrayId.forEach((element) => {
    const animal = data.species.find((element2) => element2.id === element);
    request.push(animal);
  });
  return request;
}

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((element) => element.name === animal);
  const request = specie.residents.every((value) => value.age >= age);
  return request;
}

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    return data.employees
      .find((element) => element.firstName === employeeName || element.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  const newArr = {};
  if (species === undefined) {
    data.species.forEach((elements) => {
      newArr[elements.name] = elements.residents.length;
    });
    return newArr;
  }
  const animal = data.species.find((element) => element.name === species);
  return animal.residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  return Object.entries(entrants)
    .reduce((acc, [entrant, value]) => acc + data.prices[entrant] * value, 0);
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
