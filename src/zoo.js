const { species, employees, prices } = require('./data');
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
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((crr) => crr.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEmployee);
}

function countAnimals(x) {
  let resp;
  if (x === undefined) {
    resp = {};
    species.forEach((acc) => {
      resp[acc.name] = acc.residents.length;
    });
  } else {
    const animal = species.find((crr) => crr.name === x);
    resp = animal.residents.length;
  }
  return resp;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const array = [];
  const adults = entrants.Adult * prices.Adult;
  const childs = entrants.Child * prices.Child;
  const seniors = entrants.Senior * prices.Senior;
  array.push(adults, childs, seniors);
  const filtro = array.filter((atual) => Number.isNaN(atual) !== true);
  return filtro.reduce((acumulator, atual) => acumulator + atual);
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
