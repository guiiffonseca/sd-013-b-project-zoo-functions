const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const array = [];
  ids.forEach((id) => array.push(species.find((specie) => specie.id === id)));
  return array;
}

function getAnimalsOlderThan(animal, age) {
  const getAnimals = data.species.find((specie) => specie.name === animal);
  return getAnimals.residents.every((animalAge) => animalAge.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}
// Resolvido com a ajuda do Cajueiro
function countAnimals(speciess) {
  const animalsCount = {};
  species.forEach((specie) => { animalsCount[specie.name] = specie.residents.length; });
  if (animalsCount[speciess]) {
    return animalsCount[speciess];
  }
  return animalsCount;
}
// Video explicativo sobre Object.keys,  https://www.youtube.com/watch?v=CO29CxeRMx4
function calculateEntry(entrants) {
  if (!entrants) return 0;
  return Object.keys(entrants)
    .reduce((acc, curr) => acc + prices[curr] * entrants[curr], 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function daySchedule(day) {
  const object = {};

  object[day] = (day === 'Monday') ? 'CLOSED'
    : `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  console.log(object);
  return object;
}

function getSchedule(dayName) {
  const object = {};
  const week = Object.keys(hours);

  if (!dayName) {
    week.forEach((day) => {
      object[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
      if (hours[day].open === 0 && hours[day].close === 0) object[day] = 'CLOSED';
    });
    console.log(object);
    return object;
  }
  return daySchedule(dayName);
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
