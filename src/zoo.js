const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find((specie) => specie.name === animal)
    .residents.every((residentAge) => residentAge.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animal) {
  // seu código aqui
  const countResidents = {};
  data.species.forEach(({ name, residents }) => {
    countResidents[name] = residents.length;
  });
  if (animal === undefined) {
    return countResidents;
  }
  return countResidents[animal];
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const visitants = Adult * data.prices.Adult
  + Senior * data.prices.Senior
  + Child * data.prices.Child;
  return visitants;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Senior, Child} = data.prices;
  data.prices.Adult = parseFloat((Adult * ((percentage / 100) + 1) + 0.001).toFixed(2));
  data.prices.Senior = parseFloat((Senior * ((percentage / 100) + 1) + 0.001).toFixed(2));
  data.prices.Child = parseFloat((Child * ((percentage / 100) + 1) + 0.001).toFixed(2));
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  if (idOrName === undefined) {
    return {};
  }
  const searchEmployee = data.employees.find(({ id, firstName, lastName }) =>
    id === idOrName || firstName === idOrName || lastName === idOrName);
  const searchAnimal = data.employees.responsibleFor.map((animal) =>
    data.species.find((animalInfo) => animal === animalInfo));
  const employeeName = `${searchEmployee.firstName} ${searchEmployee.lastName}`;
  return { [employeeName]: searchAnimal };
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
