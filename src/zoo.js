const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.find((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const verifyAgeAnimal = species.find((specie) =>
    specie.name === animal)
    .residents.every((resident) =>
      resident.age >= age);
  return verifyAgeAnimal;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employeedName = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return employeedName;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const thatIsTheManager = employees.find((employee) => employee.id)
    .managers.some((manager) => manager.includes(id));
  return thatIsTheManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function countAnimals(args) {
  // if criado com ajuda de Ygor Lage e Allan Oliveira;
  if (args) {
    const animalsWithArgs = species.find((specie) => specie.name === args).residents.length;
    return animalsWithArgs;
  }
  const animalsWhitoudArgs = species.reduce((accumulator, currentValue) =>
    Object.assign(accumulator, { [currentValue.name]: currentValue.residents.length }), {});
  return animalsWhitoudArgs;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  // começar essa aqui
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
