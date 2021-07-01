const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const arrayOfSpecies = [];
  ids.forEach((id, index, array) => {
    const specie = data.species.filter((tipo) => tipo.id === id);
    arrayOfSpecies.push(...specie);
  });
  return arrayOfSpecies;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const especies = data.species;
  const targetSpecie = especies.find((especie) => especie.name === animal);
  const { residents } = targetSpecie;
  return residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const { employees } = data;
  const employeeObj = employees.find(
    (employee) => employee.firstName === employeeName || employee.lastName === employeeName,
  );
  return employeeObj;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const destiny = { ...personalInfo, ...associatedWith };
  return destiny;
}

function isManager(id) {
  // seu código aqui
  const { employees } = data;
  const manager = employees.some((employee, index) => employee.managers[index] === id);
  console.log(id);
  return manager;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
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
