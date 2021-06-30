const data = require('./data');

const especies = data.species;
const { employees } = require('./data');
/* const { hours } = require('./data');
const { prices } = require('./data'); */

function getSpeciesByIds(...specieId) {
  return specieId.map((especie) => especies.find((especieFind) => especie === especieFind.id));
}

function getAnimalsOlderThan(animal, age) {
  const check = especies.find((especie) => especie.name === animal);
  return check.residents.every((especie) => especie.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((wrk) => wrk.firstName === employeeName || wrk.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const worker = { ...personalInfo, ...associatedWith };
  return worker;
}

function isManager(id) {
  return employees.some((worker) => id === worker.managers.find((workFind) => id === workFind));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newWorker = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newWorker);
}

function countAnimals(species) {
  const result = {};
  if (species === undefined) {
    especies.forEach((quantidade) => { result[quantidade.name] = quantidade.residents.length; });
    return result;
  }
  return especies.find((especie) => especie.name === species).residents.length;
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
