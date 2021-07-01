const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((valueIds) => data.species.find((animalSpecie) => animalSpecie.id === valueIds));
}

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((animalSpecie) => animalSpecie.name === animal);
  return specie.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const employeeObj = data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  return (employeeObj);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const employeeObj = data.employees.find((employee) => (employee.id === id));
  return (employeeObj.managers.length === 1);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  if (!species) {
    return data.species.reduce((acc, curr) => ({
      ...acc, ...{ [curr.name]: curr.residents.length } }), {});
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
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
