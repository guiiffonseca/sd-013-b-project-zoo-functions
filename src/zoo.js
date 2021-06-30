const data = require('./data');
const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  // PODERIA TER SIDO FEITO COM O MAP
  const array = [];
  ids.forEach((id) => array.push(species.find((specie) => specie.id === id)));
  return array;
}

function getAnimalsOlderThan(animal, idade) {
  // seu código aqui
  const bicho = species.find((specie) => specie.name === animal);
  return bicho.residents.every((resident) => resident.age > idade);
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    // eslint-disable-next-line max-len
    return employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animals) {
  // seu código aqui
  const anCoun = species.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.residents.length;
    return accumulator;
  }, {});
  if (animals) {
    const animal = species.find((specie) => specie.name === animals);
    return animal.residents.length;
  }
  return anCoun;
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
