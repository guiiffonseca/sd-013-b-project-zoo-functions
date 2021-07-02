const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // if (!ids) return [];
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age > age);
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
  return employees.find((employee) => employee.id)
    .managers.some((manager) => manager === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesAnimals) {
  const animals = {};
  species.forEach((specie) => { animals[specie.name] = specie.residents.length; });
  if (!speciesAnimals) {
    return animals;
  }
  return animals[speciesAnimals];
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const { Adult: adulto, Senior: idoso, Child: crianca } = prices;
  return (adulto * Adult) + (idoso * Senior) + (crianca * Child);
}

function getAnimalMap(options) {
  // const local = {};
  // species.forEach((specie) => { local[specie.location] = specie.name; });
  // return local;
}

function getSchedule(dayName) {
  const daysAndTime = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return daysAndTime;
  return { [dayName]: daysAndTime[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const info = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animais = species.find((specie) => specie.id === info).residents;
  const animalVelho = animais.sort((age1, age2) => age2.age - age1.age)[0];

  return [`${animalVelho.name}`, `${animalVelho.sex}`, animalVelho.age];
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
//   const list = {};
//   employees.forEach((employee) => {
//     list[employee.name] = employee.responsibleFor;
//   });
//   console.log(list);
}

getEmployeeCoverage();

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
