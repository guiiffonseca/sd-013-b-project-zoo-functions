const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === '') return [];
  const final = [];
  let acctual = '';
  const filtro = (valor) => valor.id === acctual;

  ids.forEach((atual) => {
    acctual = atual;
    final.push(data.species.filter(filtro)[0]);
  });
  return final;
}

function getAnimalsOlderThan(animal, age) {
  const filtro = (valor) => valor.name === animal;
  const filtroIdade = (valor) => valor.age > age;

  const especie = data.species.filter(filtro)[0].residents;
  const acima = especie.filter(filtroIdade);

  if (especie.length === acima.length) {
    return true;
  }

  return false;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const filtro = (atual) => employeeName === atual.firstName || employeeName === atual.lastName;

  return data.employees.filter(filtro);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
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
