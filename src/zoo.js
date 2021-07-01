const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const specieId = species.filter((specie) => specie.id === ids[0] || specie.id === ids[1]);
  return specieId;
}

function getAnimalsOlderThan(animal, age) {
  const specieChosen = species.find((specie) => specie.name === animal);
  const nameAnimal = specieChosen.residents;
  return nameAnimal.every((nameA) => nameA.age > age);
}

const { employees } = require('./data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((p) => p.firstName === employeeName || p.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees.some((valor, index) => valor.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(speciees) {
  if (speciees !== undefined) {
    return species.find((specie) => specie.name === speciees).popularity;
  }
  return species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
}

const { prices } = require('./data');

// função para verificar se o obj está vazio.
// Link - https://www.horadecodar.com.br/2020/10/06/como-verificar-se-objeto-esta-vazio-em-javascript/
function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function calculeteValues(entrants) {
  let adult = 0;
  let child = 0;
  let senior = 0;
  if (entrants.Adult > 0) {
    adult = entrants.Adult * prices.Adult;
  }
  if (entrants.Child > 0) {
    child = entrants.Child * prices.Child;
  }
  if (entrants.Senior > 0) {
    senior = entrants.Senior * prices.Senior;
  }
  return adult + child + senior;
}

function calculateEntry(entrants) {
  if (entrants === undefined || isEmpty(entrants) === true) {
    return 0;
  }
  return calculeteValues(entrants);
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
