const { species, employees, prices } = require('./data');
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
  return employees.some((employer) => employer.managers.includes(id));
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
  if (specie) {
    return species.find((especie) => especie.name === specie).residents.length;
  }
  const lista = {};
  species.forEach((especie) => {
    const { name, residents } = especie;
    lista[name] = residents.length;
  });
  return lista;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {

}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // console.log(prices);
  // const porcentagem = 1 + percentage / 100;
  // console.log(porcentagem);
  // return prices.reduce((idade, atual) => atual * porcentagem, 0);
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
