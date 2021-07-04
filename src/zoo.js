const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length <= 0) return [];
  const animalsArray = [];

  ids.forEach((uniqueId) => {
    const targetSpecie = species.find(({ id }) => id === uniqueId);
    animalsArray.push(targetSpecie);
  });
  return animalsArray;
}

function getAnimalsOlderThan(animalGiven, ageGiven) {
  const { residents } = species.find(({ name }) => name === animalGiven);
  return residents.every((stats) => stats.age >= ageGiven);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const getEmployee = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return getEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const person = {};
  return Object.assign(person, personalInfo, associatedWith);
}

// Checa se o manager que foi chamado tem o id que foi passado
function checkIfManager(managersId, id) {
  return managersId.some((managerId) => managerId === id);
}

function isManager(idGiven) {
  return employees.some(({ managers }) => checkIfManager(managers, idGiven));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// function chackAnimal(animalsName, name) {
//   return animalsName.some((animalName) => animalName === name);
// }

function countAnimals(speciesGiven) {
  if (speciesGiven) {
    const animalNumbers = species.find((specie) => specie.name === speciesGiven).residents.length;
    return animalNumbers;
  }

  const animalsObject = {};
  species.forEach(({ name, residents }) => {
    animalsObject[name] = residents.length;
  });
  return animalsObject;
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
