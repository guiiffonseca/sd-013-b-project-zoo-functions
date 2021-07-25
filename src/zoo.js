const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const array = [];
  ids.forEach((id) => {
    const getSpecie = species.find((specie) => specie.id === id);
    array.push(getSpecie);
  });
  return array;
}

function getAnimalsOlderThan(animal, age) {
  return (species.find((specie) => specie.name === animal))
    .residents.every((specie) => specie.age > age);
}

function getEmployeeByName(employeeName) {
  return (employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName)) || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return Boolean(employees.find((employee) => employee.managers.find((manager) => manager === id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAll() {
  const object = {};
  species.forEach((specie) => {
    Object.assign(object, {
      [specie.name]: specie.residents.length,
    });
  });
  return object;
}

function countAnimals(specieName) {
  return (!specieName) ? countAll()
    : species.find((specie) => specie.name === specieName).residents.length;
}

function entry(entrants) {
}

function calculateEntry(entrants) {
  return (!entrants) ? 0
    : entry();
}

// function getAnimalsByLocation() {
//   return ({
//     NE: species.filter((specie) => specie.location === 'NE').map((specie) => specie.name),
//     NW: species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
//     SE: species.filter((specie) => specie.location === 'SE').map((specie) => specie.name),
//     SW: species.filter((specie) => specie.location === 'SW').map((specie) => specie.name),
//   });
// }
//
// function whatever(...options) {
//   const { includeNames, sorted, sex } = options;
//   if (includeNames) {
//     return ({
//       NE: species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
//       NW: species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
//       SE: species.filter((specie) => specie.location === 'SE').map((specie) => specie.name),
//       SW: species.filter((specie) => specie.location === 'SW').map((specie) => specie.name),
//     });
//   }
// }
//
function getAnimalMap(options) {
//   return (!options) ? getAnimalsByLocation()
//     : whatever();
}

function getSchedule(dayName) {
  const schedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName) {
    return { [dayName]: schedule[dayName] };
  } return schedule;
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
