const { species, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const arr = [];
  ids.forEach((id) => arr.push(species.find((specie) => specie.id === id)));
  return arr;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const selected = species.find((specie) => specie.name === animal);
  return selected.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return data.employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return !!data.employees.find(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(speciesP) {
  // seu código aqui
  const count = {};
  species.forEach((specie) => {
    count[specie.name] = specie.residents.length;
  });
  if (speciesP) {
    return count[speciesP];
  }
  return count;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = { }) {
  // seu código aqui
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  const schedule = Object.getOwnPropertyDescriptors(data.hours);
  Object.keys(schedule).forEach((prop) => {
    schedule[prop] = `Open from ${data.hours[prop].open}am until ${data.hours[prop].close % 12}pm`;
    schedule.Monday = 'CLOSED';
  });
  if (dayName === undefined) {
    return schedule;
  }
  const oneDayOnASchedule = {};
  oneDayOnASchedule[dayName] = schedule[dayName];
  return oneDayOnASchedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const idEmployee = data.employees.find((idP) => idP.id === id).responsibleFor[0];
  const animals = data.species.find((idA) => idA.id === idEmployee).residents;
  const findOld = animals.reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr));
  return [findOld.name, findOld.sex, findOld.age];
}

function increasePrices(percentage) {
  // seu código aqui
  data.prices.Adult = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  data.prices.Child = Math.ceil(prices.Child * (100 + percentage)) / 100;
  data.prices.Senior = Math.ceil(prices.Senior * (100 + percentage)) / 100;
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
