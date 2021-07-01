// Imports
const data = require('./data');

// //////////////////// 1ª Função ////////////////////
function getSpeciesByIds(...ids) {
  return data.species.reduce((pv, cv) => {
    ids.forEach((id) => {
      if (id === cv.id) pv.push(cv);
    });
    return pv;
  }, []);
}

// //////////////////// 2ª Função ////////////////////
function getAnimalsOlderThan(animal, age) {
  const animalData = data.species.filter((v) => v.name === animal)[0];
  const requiredAge = animalData.residents.every((v) => v.age > 5);
  if (animalData && requiredAge) return true;
  return false;
}

// //////////////////// 3ª Função ////////////////////

function getEmployeeByName(employeeName) {
  let employee = {};
  data.employees.forEach((v) => {
    if (v.firstName === employeeName || v.lastName === employeeName) employee = v;
  });
  return employee;
}

// //////////////////// 4ª Função ////////////////////
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// //////////////////// 5ª Função ////////////////////
function isManager(id) {
  const repeatedIds = [];
  data.employees.forEach((cv) => repeatedIds.push(...cv.managers));
  const cleanedIds = repeatedIds.reduce((pv, cv) => {
    if (pv.indexOf(cv) === -1) pv.push(cv);
    return pv;
  }, []);
  return cleanedIds.includes(id);
}

// //////////////////// 6ª Função ////////////////////
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// //////////////////// 7ª Função ////////////////////
function countAnimals(species) {
  const allSpecies = {};
  data.species.forEach((v) => { allSpecies[v.name] = v.residents.length; });
  if (!species) return allSpecies;
  return allSpecies[species];
}

// //////////////////// 8ª Função ////////////////////
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
