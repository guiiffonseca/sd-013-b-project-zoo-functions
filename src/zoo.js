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
    specie.name === animal)
    .residents.every((resident) =>
      resident.age > age);
}
// retorna o obj do empregado baseado em seu nome ou sobrenome, ou se não, devolve vazio
function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
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
// procura em ids dos employees se algum deles pertence a um manager nos outros employees
function isManager(id) {
  return employees.some((managerId) =>
    managerId.managers.find((identity) =>
      identity === id));
}

// troquei para array os dois para passar no teste.
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animal) {
  const overallAnimalsCount = {};

  if (!animal) {
    species.forEach((animals) => {
      overallAnimalsCount[animals.name] = animals.residents.length;
    });
    return overallAnimalsCount;
  }
  const animalCount = species.find(({ name }) => (name === animal));
  // nao entendi a necessidade desses () no fim da linha anterior
  return animalCount.residents.length;
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
