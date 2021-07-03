const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => {
    if (!ids) {
      return [];
    }
    if (specie.id === ids[0] || specie.id === ids[1]) {
      return specie;
    }
  });
}

function getAnimalsOlderThan(animal, age) {
  //So conseguir fazer graças a o code review do amigo Rafael Ne da Turma 13-B
  // com isso aprendi a a juntar duas HOF para ter um resultado mais direto. Perdi 4hs sem sair do lugar antes de lembrar do code review.
  return species.find((specie) => specie.name === animal).residents.every((res) =>
  res.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employ) => employ.firstName === employeeName
 || employ.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employ) => employ.managers[0] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  
}

function calculateEntry(entrants) {

}

function getAnimalMap(options) {

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
