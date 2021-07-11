/* eslint-disable max-len */
const data = require('./data');

const { species, employees /* prices, hours */ } = data;

const getSpeciesByIds = (...ids) => ids.map((id) => species.find((specie) => specie.id === id));

const getAnimalsOlderThan = (animal, age) => species.find((specie) => specie.name === animal)
  .residents.every((resident) => resident.age >= age);

const getEmployeeByName = (employeeName) => ((employeeName === undefined) ? {}
  : employees.find((employee) => employee.firstName === employeeName
|| employee.lastName === employeeName));

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

function isManager(id) {}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {}

function countAnimals(spec) {}

function calculateEntry(entrants) {}

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
