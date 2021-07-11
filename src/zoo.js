const data = require('./data');

const { species } = data; // dica do code review do panta(?, not sure)
const { employees } = data;

// devolve o novo array com todos os species.id
// o include testa se existe o parametro dentro do obj e retorna true;
function getSpeciesByIds(...ids) {
  return species.filter((specie) =>
    ids.includes(specie.id));
}

// devolve se todos os animais de uma mesma espécie(animal) que possuem idade superior ao input 'age'
// procura dentro do obj species o animal com nome igual ao input, que por sua vez procura dentro da struct/obj dentro de residents
function getAnimalsOlderThan(animal, age) {
  return species.find((specie) =>
    specie === animal.name)
    .residents.every((resident) =>
      resident.age > age);
}
// retorna o obj do empregado baseado em seu nome ou sobrenome, ou se não, devolve vazio
function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName
  || lastName === employeeName);
}
// acho que preciso de uma maneira mais esperta de fazer isso
function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
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
