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
  if (!entrants) return 0;
  return Object.keys(entrants).reduce((pv, cv) => pv + data.prices[cv] * entrants[cv], 0);
}

// //////////////////// 9ª Função ////////////////////
function sexFilter(sex, residentsArray) {
  return residentsArray.filter((resident) => resident.sex === sex);
}

function sortMap(residentsArray) {
  return residentsArray.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}

function namedMap(obj, sorted, sex) {
  data.species.forEach(({ location, name, residents }) => {
    let residentsArray = [...residents];
    if (sex) residentsArray = sexFilter(sex, residentsArray);
    if (sorted) residentsArray = sortMap(residentsArray);
    obj[location].push({
      [name]: residentsArray.map((resident) => resident.name),
    });
  });
  return obj;
}

function getAnimalMap(options) {
  const locationObj = {};
  data.species.forEach(({ location, name }) => { locationObj[location] = []; });

  if (!options || !options.includeNames) {
    data.species.forEach(({ location, name }) => locationObj[location].push(name));
    return locationObj;
  }

  namedMap(locationObj, options.sorted, options.sex);
  return locationObj;
}

console.log(getAnimalMap({ includeNames: true, sorted: true, sex: 'female' }));

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
