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

function calculateEntry(entrants) {
  return (!entrants) ? 0
    : Object.entries(entrants).reduce(
      (total, [key, value]) => total + prices[key] * value,
      0,
    );
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
  return (!dayName) ? schedule
    : { [dayName]: schedule[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const firstSpecies = employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldestAnimal = species.find((specie) => specie.id === firstSpecies).residents
    .sort((animal1, animal2) => animal2.age - animal1.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((price) => {
    prices[price] = Math.round((prices[price] + (percentage / 100) * prices[price]) * 100) / 100;
  });
}

function getResponsibleAnimals(employeeName) {
  employees.find((employee) => employee === employeeName)
    .responsibleFor.map((animals) => animals.find((specie) => specie.id === animals).name);
}

function getEmployeeCoverage(idOrName) {
  if (!idOrName) {
    return employees.forEach((employee) => getResponsibleAnimals(employee));
  }
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
