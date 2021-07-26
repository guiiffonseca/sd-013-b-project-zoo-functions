const { species, employees, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const newArray = species.filter((specie) => ids.includes(specie.id));
  return newArray;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((specie) => specie.name === animal).residents
    .every((ageAnimals) => ageAnimals.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};

  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specieAnimals) {
  // seu código aqui
  const newObject = {};
  species.forEach((specie) => { newObject[specie.name] = specie.residents.length; });
  if (specieAnimals === undefined) {
    return newObject;
  }
  return newObject[specieAnimals];
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  const keys = Object.keys(entrants);
  return keys.reduce((acc, curr) => acc + data.prices[curr] * entrants[curr], 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  const horariosFuncionamento = {
    Tuesday: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close - 12}pm`,
    Wednesday: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close - 12}pm`,
    Thursday: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close - 12}pm`,
    Friday: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close - 12}pm`,
    Saturday: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close - 12}pm`,
    Sunday: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close - 12}pm`,
    Monday: `CLOSED`,
  };

  if(!dayName) {
    return horariosFuncionamento
  } else {
    return { [dayName]: horariosFuncionamento[dayName] }
  }
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
