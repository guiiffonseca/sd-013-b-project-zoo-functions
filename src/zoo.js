const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === '') {
    return [];
  } return data.species.filter((ide) => ids.includes(ide.id));
}

function getAnimalsOlderThan(animal, age) {
  const animalArray = data.species.filter((bicho) => bicho.name === animal);
  const resid = animalArray[0].residents;
  return resid.every((resi) => resi.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  } return data.employees.find((pessoa) => pessoa.firstName === employeeName
  || pessoa.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {

}

function isManager(id) {
  const manager = data.employees.find((procura) => procura.id === id);
  const gerente = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  if (manager.id === gerente) {
    return true;
  } return false;
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
