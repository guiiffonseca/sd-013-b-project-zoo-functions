const { species } = require('./data');
const data = require('./data');
const { employees } = require('./data');
const { prices } = require('./data');

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

const sum = (obj) => {
  const adulto = Number.isNaN(Number(obj.Adult)) ? 0 : obj.Adult * prices.Adult;
  const crianca = Number.isNaN(Number(obj.Child)) ? 0 : obj.Child * prices.Child;
  const idoso = Number.isNaN(Number(obj.Senior)) ? 0 : obj.Senior * prices.Senior;
  return adulto + crianca + idoso;
};

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const valor = sum(entrants);
  return valor;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((employee) => employee.id === id);
  const especieId = species.find((specie) => specie.id === funcionario.responsibleFor[0]);
  let age = 0;
  let arr;
  especieId.residents.forEach((element) => {
    if (age < element.age) {
      age = element.age;
      arr = [];
      arr.push(element.name);
      arr.push(element.sex);
      arr.push(element.age);
      return arr;
    }
  });
  console.log(arr);
  return arr;
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
