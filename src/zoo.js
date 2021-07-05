const { prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...getId) {
  if (getId === 'undefined') return [];
  const getAnimal = data.species.filter((animal) => getId.includes(animal.id));
  return getAnimal;
}

function getAnimalsOlderThan(animal, age) {
  return data
    .species.find((id) => id.name === animal)
    .residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return data.employees.find((employee) => employee
    .firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data
    .employees.some((employee) => employee.managers
      .some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  const totalOfAnimals = {};
  if (typeof species === 'undefined') {
    data.species.forEach((specie) => {
      totalOfAnimals[specie.name] = specie.residents.length;
    });
    return totalOfAnimals;
  }
  return data.species.find((specie) => specie.name === species)
    .residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
}

function animalSex(animal, sex) {
  if (animal.sex === sex || sex === undefined) {
    return animal.name;
  }
}

function animalSort(sort, animalsList) {
  if (sort) animalsList.sort();
}

function getAnimalMap(options = {} ) {
  const location = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((animal) => {
    if (options.includeNames) {
      const animalName = animal.name;
      const animalObject = {};
      const animalListedNames = [];
      animal.residents.forEach((element) => {
        const checkAnimalSex = animalSex(element, options.sex);
        if (checkAnimalSex !== undefined) {
          animalListedNames.push(checkAnimalSex);
        }
      });
      animalSort(options.sorted, animalListedNames);
      animalObject[animalName] = animalListedNames;
      location[animal.location].push(animalObject);
    } else {
      location[animal.location].push(animal.name);
    }
  });
  return location;
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
