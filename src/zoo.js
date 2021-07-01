/* eslint-disable editorconfig/editorconfig */
const data = require("./data");

function getSpeciesByIds(...ids) {
  if (ids === null) {
    return [];
  }
  return data.species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = []
) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return data.species.find((specie) => specie.name === species).residents
    .length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  // const arrayPrices = Object.entries(data.prices);
  // const visits = Object.entries(entrants);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const animalId = data.employees
    .find((employee) => employee.id === id)
    .responsibleFor.find((animal) => animal);
  const olderAnimal = data.species
    .find((specie) => specie.id === animalId)
    .residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(olderAnimal);
}

function increasePrices(percentage) {
  const num = (percentage / 100);
  const costs = Object.values(data.prices);
  const newPrices = costs.map((cost) => (cost + (cost * num)));
  const [x, y, z] = newPrices;
  data.prices.Adult = Math.ceil(x * 100) / 100;
  data.prices.Senior = Math.ceil(y * 100) / 100;
  data.prices.Child = Math.ceil(z * 100) / 100;
  return data.prices;
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
