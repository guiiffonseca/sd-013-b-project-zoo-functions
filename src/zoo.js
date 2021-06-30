const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((especie) => especie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const animais = species.find((especie) => animal === especie.name);
  const trueOfFalse = animais.residents.every((especie) => especie.age >= age);
  return trueOfFalse;
}

function getEmployeeByName(employeeName) {
  const condicao = (firstName, lastName) => employeeName === firstName || employeeName === lastName;
  if (employeeName) {
    return employees.find(({ firstName, lastName }) => condicao(firstName, lastName));
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(idN, firstNameN, lastNameN, managersN = [], responsibleForN = []) {
  return employees.push({
    id: idN,
    firstName: firstNameN,
    lastName: lastNameN,
    managers: managersN,
    responsibleFor: responsibleForN,
  });
}

function countAnimals(specie) {
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
