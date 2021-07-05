const data = require('./data');

function getSpeciesByIds(...ids) {
  const speciesById = ids.map((id) => data.species.find((specie) => specie.id === id));
  return speciesById;
}
function getAnimalsOlderThan(animal, age) {
  const getAnimals = data.species.find((specie) => specie.name === animal);
  const olders = getAnimals.residents.every((ageAnimal) => ageAnimal.age > age);
  return olders;
}

function getEmployeeByName(employeeName) {
  const employeesNames = data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  if (employeeName === undefined) {
    return {};
  }
  return employeesNames;
}
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const managers = data.employees.map((managerList) => managerList.managers).flat();
  return managers.some((manager) => manager === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employeeAdd = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(employeeAdd);
}

function countAnimals(species) {
  if (species === undefined) {
    const counts = {};
    data.species.forEach((array) => {
      counts[array.name] = array.residents.length;
    });
    return counts;
  }
  if (typeof (species) === 'string') {
    const check = data.species.find((count) => count.name === species);
    const countSpecie = check.residents.length;
    return countSpecie;
  }
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
