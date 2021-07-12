const data = require('./data');

const especies = data.species;
const empregados = data.employees;

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  const search = especies
    .filter((especie) => especie.id === ids
      .find((value) => especie.id === value));
  return search;
};

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalName = especies.find((especie) => especie.name === animal);
  const ehVelho = animalName.residents.every((resident) => resident.age >= age);
  return ehVelho;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const employeeSearch = empregados.find(
    (empregado) => empregado.firstName === employeeName || empregado.lastName === employeeName,
  );
  return employeeSearch;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return empregados.some(
    (empregado) => empregado.managers.includes(id),
  );
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  return empregados.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  // seu código aqui
  const contarAnimais = especies.reduce((accumulator, current) => {
    accumulator[current.name] = current.residents.length;
    return accumulator;
  });
  if (species) {
    const animal = especies.find((especie) => especie.name === species);
    return animal.residents.length;
  }
  return contarAnimais;
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
