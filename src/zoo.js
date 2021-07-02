// Imports
const { employees } = require('./data');
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

// //////////////////// 10ª Função ////////////////////

function formatHours(hour) {
  if (hour === 0) return 0;
  if (hour > 12) return `${hour % 12}pm`;
  return `${hour}am`;
}

function getSchedule(dayName) {
  const hoursTable = {};
  Object.keys(data.hours).forEach((key) => {
    const openHour = formatHours(data.hours[key].open);
    const closeHour = formatHours(data.hours[key].close);

    hoursTable[key] = `Open from ${openHour} until ${closeHour}`;
    if (key === 'Monday') hoursTable[key] = 'CLOSED';
  });
  if (dayName) return { [dayName]: hoursTable[dayName] };
  return hoursTable;
}

// //////////////////// 11ª Função ////////////////////
function getAnimalId(id) {
  let animalId;
  employees.forEach((employee) => {
    if (id === employee.id) [animalId] = employee.responsibleFor;
  });
  return animalId;
}

function getOldestFromFirstSpecies(id) {
  const animalId = getAnimalId(id);
  let residentsArray;
  let age = 0;
  let olderAnimal;

  data.species.forEach((specie) => {
    if (animalId === specie.id) residentsArray = specie.residents;
  });

  residentsArray.forEach((v, i) => {
    if (v.age > age) {
      age = v.age;
      olderAnimal = [v.name, v.sex, v.age];
    }
  });
  return olderAnimal;
}

// //////////////////// 12ª Função ////////////////////

function newPrice(value, percentage) {
  const priceIncreased = value * (1 + percentage / 100);
  return Math.round(priceIncreased * 100) / 100;
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((key) => {
    data.prices[key] = newPrice(data.prices[key], percentage);
  });
}

// //////////////////// 13ª Função ////////////////////
function getSearchTarget(idOrName) {
  let target;
  data.employees.forEach(({ id, firstName, lastName }) => {
    if (idOrName === id) target = `${firstName} ${lastName}`;
    if (idOrName === firstName) target = `${firstName} ${lastName}`;
    if (idOrName === lastName) target = `${firstName} ${lastName}`;
  });
  return target;
}

function getEmployeeCoverage(idOrName) {
  const employeesList = {};
  const animalsIds = {};
  const target = getSearchTarget(idOrName);

  data.species.forEach(({ name, id }) => { animalsIds[id] = name; });

  data.employees.forEach(({ firstName, lastName, responsibleFor }) => {
    employeesList[`${firstName} ${lastName}`] = responsibleFor.map((v) => animalsIds[v]);
  });

  if (target) return { [target]: employeesList[target] };
  return employeesList;
}
console.log(getEmployeeCoverage('Nigel'));

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
