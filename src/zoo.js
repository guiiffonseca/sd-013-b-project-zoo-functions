const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((specie) => ids.some((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((specie) => specie.name === animal)
    .residents.every((resid) => resid.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employees.reduce((acc, employe) => {
    if (employe.firstName === employeeName || employe.lastName === employeeName) {
      return employe;
    } return acc;
  }, {});
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employe) => employe.managers.find((manage) => manage === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push(createEmployee({ id, firstName, lastName }, { managers, responsibleFor }));
}

function countAnimals(specie) {
  // seu código aqui
  if (!specie) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, { });
  }
  return species.find((value) => value.name === specie).residents.length;
}

function calculateEntry(entrants = {}) {
  return Object.entries(entrants).reduce((acc, [key, value]) => acc + prices[key] * value, 0);
}

function getAnimalMap(options) {
  // seu código aqui
  // return species.reduce((acc, curr) => {
  //  acc = { [curr.location]: [curr.name] }
  //  return acc;
  // }, {});
}

function getSchedule(dayName) {
  // seu código aqui
  const schedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return schedule;
  return { [dayName]: schedule[dayName] };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpec = employees.find((employe) => employe.id === id).responsibleFor[0];
  const selectSpec = species.find((spec) => spec.id === firstSpec).residents
    .sort((a, b) => b.age - a.age)[0];
  return [selectSpec.name, selectSpec.sex, selectSpec.age];
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
