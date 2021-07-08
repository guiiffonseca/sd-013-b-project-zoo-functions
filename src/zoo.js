const data = require('./data');
const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return []; // retorna vazio se não entrar parametro
  return data.species.filter((specie) => ids.some((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName)
    || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return !!employees.find(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  data.employees.push(employee);
}

function countAnimals(speciess = {}) {
  let animals = {};
  if (typeof (speciess) === 'object') {
    data.species.forEach((specie) => {
      animals[specie.name] = specie.residents.length;
    });
  } else {
    const animalCategory = data.species.find((specie) => specie.name === speciess);
    animals = animalCategory.residents.length;
  }
  return animals;
}

function calculateEntry(entrants = {}) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // const schedule = {};
  // if (!dayName) {
  //   Object.keys(hours).forEach((day) => { schedule[day] = formatHour(hours[day]); });
  //   return schedule;
  // }
  // if (dayName === 'Monday') {
  // schedule[dayName] = 'CLOSED';
  // return schedule;
  // }
  // schedule[dayName] = formatHour(hours[dayName]);
  // return schedule;
}

function getOldestFromFirstSpecies(employeId) {
  // const employeAnimalId = employees.find(({ id }) => id === employeId).responsibleFor[0];
  // const animals = species.find(({ id: animalId }) => animalId === employeAnimalId).residents;
  //   return Object.values(oldestAnimal(animals));
}

function increasePrices(percentage) { // Feito na monitoria do Cajueiro
  prices.Adult = (Math.round((prices.Adult * (1 + (percentage / 100))) * 100)) / 100;
  prices.Child = (Math.round((prices.Child * (1 + (percentage / 100))) * 100)) / 100;
  prices.Senior = (Math.round((prices.Senior * (1 + (percentage / 100))) * 100)) / 100;
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
