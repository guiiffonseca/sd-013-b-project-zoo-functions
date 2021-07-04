const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const getSpecies = [];
  ids.forEach((id) => {
    getSpecies.push(data.species.find((specimen) => specimen.id === id));
  });
  return getSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const selectedAnimal = data.species.find((specimen) => specimen.name === animal);
  return selectedAnimal.residents.every((specimenAge) => specimenAge.age >= age);
}

function getEmployeeByName(employeeName) {
  const emList = employees;
  if (employeeName === undefined) {
    return {};
  }
  return emList.find((emp) => (emp.firstName === employeeName || emp.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

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
