/* eslint-disable max-len */
const data = require('./data');

const { species, employees, prices /* hours */ } = data;

const getSpeciesByIds = (...ids) => ids.map((id) => species.find((specie) => specie.id === id));

const getAnimalsOlderThan = (animal, age) => species.find((specie) => specie.name === animal)
  .residents.every((resident) => resident.age >= age);

const getEmployeeByName = (employeeName) => ((!employeeName) ? {}
  : employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName));
console.log(getEmployeeByName());

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = (id) => employees.some((employee) => employee.managers.includes(id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => employees
  .push({ id, firstName, lastName, managers, responsibleFor });

const countAnimals = (spec) => {
  const empty = {};
  species.forEach((specie) => { empty[specie.name] = specie.residents.length; });
  if (!spec) {
    return empty;
  }
  return empty[spec];
  // atribuir um chave nova ou comparar se a chave ja existe (pegar o animal na chave passada);
};

const calculateEntry = (entrants = 0) => {
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const total = (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
  return total;
};

function getAnimalMap(options) {}

function getSchedule(dayName) {}

function getOldestFromFirstSpecies(id) {}

function increasePrices(percentage) {}

function getEmployeeCoverage(idOrName) {}

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
