const { employees } = require('./data');
const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((specie) => specie.name === animal);
  return animals.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specie) {
  // // deixar um default parameter
  const allAnimals = {};
  if (specie === undefined) {
    species.forEach((animalSpecie) => {
      allAnimals[animalSpecie.name] = animalSpecie.residents.length;
    });
    return allAnimals;
  }
  const animals = species.find((animalSpecie) => animalSpecie.name === specie);
  // dar um jeito de acessar residents.length
  return animals.residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || {}) {
    return 0;
  }
  // dar um jeito de acessar as chaves de entrants (talvez object.keys)
  // recuperar as 3 chaves de prices
  // somar cada uma delas
  // retornar a soma de todos eles
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // recuperar o funcionario pelo id
  // pegar a primeira especie com o find em responsibleFor
  // ordenar a lista de animais pela idade com o sort
  // retorna o ultimo da lista
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // deixar um default parameter com todos os funcionarios e seus responsible for
  // recuperar funcionario por id ou nome
  // retornar a chave responsible for
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
