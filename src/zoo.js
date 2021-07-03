const { species } = require('./data');
const data = require('./data');
const { employees } = require('./data');

function getSpeciesByIds(...ids) {
  const arr = [];
  ids.map((id) => arr.push(species.find((specie) => specie.id === id)));
  return arr;
}

function getAnimalsOlderThan(animal, age) {
  const animalAge = species.find((specie) => specie.name === animal);
  const validator = animalAge.residents.every((resident) => resident.age >= age);
  return validator;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const obj = employees.find((em) => em.firstName === employeeName || em.lastName === employeeName);
  console.log(obj);
  return obj;
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  for (let index = 0; index < employees.length; index += 1) {
    const test = employees[index].managers.some((manager) => manager === id);
    if (test === true) {
      return test;
    }
  }
  return false;
}

function emptyArrayTest(arr) {
  if (arr === undefined) {
    return [];
  }
  return arr;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const identificador = id;
  const primeiroNome = firstName;
  const ultimoNome = lastName;
  employees.push({
    id: identificador,
    firstName: primeiroNome,
    lastName: ultimoNome,
    managers: emptyArrayTest(managers),
    responsibleFor: emptyArrayTest(responsibleFor),
  });
}

function countAnimals(especie) {
  const obj = {};
  species.map((specie) => {
    obj[specie.name] = specie.residents.length;
    return true;
  });
  if (especie === undefined) {
    return obj;
  }
  const newObj = species.find((specie) => specie.name === especie);
  return newObj.residents.length;
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
