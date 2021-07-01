const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...specieId) {
  // seu código aqui
  return species.filter((valor, index) => valor.id === specieId[index]);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.filter((ani) => ani.name === animal)
    .every((valor, index) => valor.residents[index].age > age);
}
function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((nome) => (
    nome.firstName === employeeName || nome.lastName === employeeName
  ));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}
function isManager(id) {
  // seu código aqui
  return employees.some((valor, index) => valor.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  // seu código aqui
  const objeto = {};
  species.forEach((valor, index) => {
    objeto[valor.name] = valor.residents.length;
  });
  if (specie === undefined) {
    return objeto;
  }
  let counter = 0;
  species.forEach((valor, index) => {
    if (valor.name === specie) counter = valor.residents.length;
  });
  return counter;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined) return 0;
  const { Child = 0, Senior = 0, Adult = 0 } = entrants;
  const { Child: ChilPrices, Senior: SeniorPrices, Adult: AdultPrices } = prices;
  const total = ChilPrices * Child + SeniorPrices * Senior + AdultPrices * Adult;
  return total;
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
