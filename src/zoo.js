const data = require('./data');
// Com a ajuda da Mariana Nogueira, consegui fazer o primeiro requisito:
// Usei o rest para que independente de quantos parâmetros a função funcione;
// Coloquei a função para retornar o parâmetro com map;
// O map percorre o parametro e retorna ele como um array;
// Dentro do map coloquei um find para encontrar dentro de species o id que é igual a ao parametro;
function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

// 1- Encontrar o animal(animal);
// 2- Encontrar as idades;
// 3- Ver se as idades são maiores que a idade minima(age);
function getAnimalsOlderThan(animal, age) {
  return (data.species.find((specie) => specie.name === animal))
    .residents.every((minAge) => minAge.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
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
