const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...idAnimal) {
  /* compara cada espécie com o id atual passado no parâmetro  */
  return species.filter((specie, index) => specie.id === idAnimal[index]);
}
/* -------------------------------------------------------------------- */
function getAnimalsOlderThan(animal, age) {
/* Verifica se o parâmentro passado está presente no obj, e verifica com o every se as idades em todas as posições atendem o paramentro mínimo solitado de idade */
  return species
    .filter((pet) => pet.name === animal)
    .every((bicho, index) => bicho.residents[index].age > age);
}
/* -------------------------------------------------------------------- */
function getEmployeeByName(employeeName) {
/* Se o parâmentro passado for vazio, retorna um obj vazio, caso contrário retorna o primeiro elemento que seja igual ao passado no parâmetro. */
  if (employeeName === undefined) {
    return {};
  } return employees
    .find((pessoa) => pessoa.firstName === employeeName || pessoa.lastName === employeeName);
}
/* -------------------------------------------------------------------- */

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

// function countAnimals(species) {
//   // seu código aqui
// }

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
  // countAnimals,
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
