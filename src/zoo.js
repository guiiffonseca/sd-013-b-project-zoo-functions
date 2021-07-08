const data = require('./data');
const { species, employees } = require('./data');

// Usei rest para que fosse possível passar vários parâmetros ao mesmo tempo.
// Usei o .filter pois retorna um novo array com os objetos que passam na regra de negócio
// O rest cria um novo array com os valores passados para ele(por isso usei o .includes)
// Desestruturei o id pois é uma chave dos objetos do array species
function getSpeciesByIds(...ids) {
  const filterSpecies = species.filter(({ id }) => ids.includes(id));
  return filterSpecies;
}

// Usei o .find para encontrar o nome da espécie passada no parâmetro animalName
// Depois que o nome for encontrado acesso a chave .residents do mesmo objeto ao qual o nome pertence
// Usei .every pois queria saber se todos os animais dessa espécie tem idade maios ou igual ao parâmetro animalAge
// .every retorna um boolean
function getAnimalsOlderThan(animalName, animalAge) {
  return species.find(({ name }) => name === animalName)
    .residents.every(({ age }) => age >= animalAge);
}

// Caso não seja passado um parâmetro a função deve retornar um obj vazio
// Usei o .find para encontrar o funcionário com um nome ou sobrenome igual ao parâmetro passado
// .find retorna um obj
function getEmployeeByName(name) {
  if (name === undefined) {
    return {};
  }
  return employees.find(({ firstName, lastName }) => firstName === name || lastName === name);
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

function countAnimals(animalsSpecies) {
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
