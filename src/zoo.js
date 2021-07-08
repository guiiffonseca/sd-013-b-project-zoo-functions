const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  const speciesList = [];
  ids.forEach((speciesId) => {
    const findSpecies = species.find(({ id }) => id === speciesId);
    speciesList.push(findSpecies);
  });
  return speciesList;
}

function getAnimalsOlderThan(animal, age) {
  const { residents } = species.find(({ name }) => name === animal);
  return residents.every(({ age: animalAge }) => animalAge >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const findFirstName = employees.find(({ firstName }) => firstName === employeeName);
  if (findFirstName) return findFirstName;
  const findLastName = employees.find(({ lastName }) => lastName === employeeName);
  if (findLastName) return findLastName;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push(createEmployee({ id, firstName, lastName }, { managers, responsibleFor }));
}

function countAnimals(specie) {
  if (!specie) {
    const relatory = {};
    species.forEach(({ name, residents }) => {
      relatory[name] = residents.length;
    });
    return relatory;
  }
  const { residents } = species.find(({ name }) => name === specie);
  return residents.length;
}

function calculateEntry(entrants = 0) {
  return Object.entries(entrants).reduce((acc, [key, value]) => acc + (prices[key] * value), 0);
}

function getAnimalMap(options) {
}

function getSchedule(dayName) {
  const schedule = {};
  const days = Object.keys(hours);
  days.forEach((day, index) => {
    schedule[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    if (index === days.length - 1) schedule[day] = 'CLOSED';
  });

  if (!dayName) return schedule;
  return { [dayName]: schedule[dayName] };
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
