const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const identidade = (ids);
  return identidade.map((value) => species.find((bichos) => bichos.id === value));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((value) => value.name === animal).residents.every((value) => value.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  return (employeeName !== undefined) ? data.employees.find((value) =>
    value.firstName === employeeName || value.lastName === employeeName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const empregados = data.employees.map((empregado) => {
    const procura = empregado.managers.some((value) => value === id);
    return procura;
  });
  return empregados.some((value) => value === true);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return data.employees;
}

function countAnimals(species2) {
  // seu código aqui
  const objeto = {};
  if (species2 !== undefined) {
    return species.find((value) => value.name === species2).residents.length;
  }
  species.forEach((value, index, array) => {
    objeto[value.name.toString()] = value.residents.length;
    return objeto;
  });
  return objeto;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult = 0 } = entrants;
  const { Child = 0 } = entrants;
  const { Senior = 0 } = entrants;
  const { Adult: adulto } = data.prices;
  const { Child: crianca } = data.prices;
  const { Senior: velhos } = data.prices;
  const soma = (Adult * adulto) + (Child * crianca) + (Senior * velhos);
  return soma;
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
  data.prices.Adult += (data.prices.Adult * percentage) / 100;
  data.prices.Adult = Math.round(data.prices.Adult * 100) / 100;
  data.prices.Child += (data.prices.Child * percentage) / 100;
  data.prices.Child = Math.round(data.prices.Child * 100) / 100;
  data.prices.Senior += (data.prices.Senior * percentage) / 100;
  data.prices.Senior = Math.round(data.prices.Senior * 100) / 100;
  return data.prices;
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
