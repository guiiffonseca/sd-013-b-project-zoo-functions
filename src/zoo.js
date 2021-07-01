const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const testArray = [];
  species.forEach((atual) => {
    if (ids.includes(atual.id) === true) {
      testArray.push(atual);
    }
  });
  return testArray;
}

function getAnimalsOlderThan(animal, age) {
  const animalEcontrado = species.find((atual) => atual.name === animal);
  const resposta = animalEcontrado.residents.every((atual) => atual.age > age);
  return resposta;
}

function getEmployeeByName(employeeName) {
  const tst = (name) => name.firstName === employeeName || name.lastName === employeeName;
  let resposta = employees.find((atual) => tst(atual));
  const avaliator = resposta === undefined ? resposta = {} : resposta;
  return avaliator;
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

function countAnimals(x) {
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
