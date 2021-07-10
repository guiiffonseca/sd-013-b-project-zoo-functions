/* eslint-disable max-len */
const data = require('./data');

const { species, employees, prices, hours } = data;

const getSpeciesByIds = (...ids) => ids.map((id) => species.find((specie) => specie.id === id));

const getAnimalsOlderThan = (animal, age) => species.find((sp) => sp.name === animal).residents.every((res) => res.age >= age);

function getEmployeeByName(employeeName) {}

function createEmployee(personalInfo, associatedWith) {}

function isManager(id) {}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {}

function countAnimals(species) {}

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
