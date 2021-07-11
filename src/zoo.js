const { species, employees } = require('./data');
const data = require('./data');

  function getSpeciesByIds(...ids) { //... = Parâmetro REST => Faz com que a função receba n parâmetros. Como pega todos os animais, fica mais de 1 parâmetro, aí puxa tudo com o rest.
    const animalList = species.filter((species, index) => species.id === ids[index]);
    return animalList
  }
console.log(species);

function getAnimalsOlderThan(animal, age) {
  const animalsOlder = species.find((specie) => specie.name === animal);
  return animalsOlder.residents.every((resident) => resident.age >= age);
  
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const employeeObject = employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
    return employeeObject;
};

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith};
}

function isManager(id) {
  const getManager = employees.some((employee) => employee.managers.includes(id));
  return getManager;
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
