const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  const result = [];

  ids.forEach((id) => {
    const specie = species.find((animal) => animal.id === id);
    result.push(specie);
  });

  return result;
}

function getAnimalsOlderThan(animal, age) {
  const currentSpecies = species.find((specie) => specie.name === animal);

  const result = currentSpecies.residents.every((resident) => resident.age >= age);

  return result;
}

function getEmployeeByName(employeeName) {
  const result = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);

  return result !== undefined ? result : {};
}

function createEmployee(personalInfo, associatedWith) {
  const [id, firstName, lastName] = Object.values(personalInfo);
  const [managers, responsibleFor] = Object.values(associatedWith);

  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return newEmployee;
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(newEmployee);
}

function countAnimals(specie) {
  const currentSpecies = species.find((spc) => spc.name === specie);
  const allAnimals = {};
  
  species.forEach((spc) => allAnimals[spc.name] = spc.residents.length);

  return specie !== undefined ? currentSpecies.residents.length : allAnimals;
}

function calculateEntry(entrants) {
  // seu código aqui
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
