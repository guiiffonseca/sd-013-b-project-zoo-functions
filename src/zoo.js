const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const identidade = (ids);
  return identidade.map((value) => species.find((bichos) => bichos.id === value));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((value) => value.name === animal).residents.every((value) => value.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  return (employeeName !== undefined) ? data.employees.find((value) =>
    value.firstName === employeeName || value.lastName === employeeName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const empregados = data.employees.map((empregado) => {
    const procura = empregado.managers.some((value) => value === id);
    return procura;
  });
  return empregados.some((value) => value === true);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return data.employees;
}

function countAnimals(species2) {
  // seu código aqui
  const objeto = {};
  if (species2 !== undefined) {
    return species.find((value) => value.name === species2).residents.length;
  }
  species.forEach((value, index, array) => {
    objeto[value.name.toString()] = value.residents.length;
    return objeto;
  });
  return objeto;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult = 0 } = entrants;
  const { Child = 0 } = entrants;
  const { Senior = 0 } = entrants;
  const { Adult: adulto } = data.prices;
  const { Child: crianca } = data.prices;
  const { Senior: velhos } = data.prices;
  const soma = (Adult * adulto) + (Child * crianca) + (Senior * velhos);
  return soma;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const colaborador = data.employees.find((value) => value.id === id);
  const animal = species.find((value2) => value2.id === colaborador.responsibleFor[0]);
  const maisVelho = animal.residents
    .reduce((acc, value) => ((value.age > acc) ? value.age : acc), 0);
  const xablau = animal.residents.find((value) => value.age === maisVelho);
  return [xablau.name, xablau.sex, maisVelho];
}

function increasePrices(percentage) {
  // seu código aqui
  function increase(pessoa) {
    let result = pessoa + (pessoa * percentage) / 100;
    result = Math.round(result * 100) / 100;
    return result;
  }
  data.prices.Adult = increase(data.prices.Adult);
  data.prices.Child = increase(data.prices.Child);
  data.prices.Senior = increase(data.prices.Senior);
  return data.prices;
}

function getEmployeeCoverage(idOrName) {
  if (idOrName !== undefined) {
    const objeto = {};
    const procura = data.employees.find((value) => value.id === idOrName
  || value.firstName === idOrName || value.lastName === idOrName);
    const animal = procura.responsibleFor.map((value) =>
      (species.find((value2) => value2.id === value)));
    const temp = animal.map((value) => value.name);
    objeto[`${procura.firstName} ${procura.lastName}`] = temp;
    return objeto;
  }
  const objeto2 = {};
  data.employees.map((value) => {
    const animal2 = value.responsibleFor.map((value2) =>
      (species.find((value3) => value3.id === value2))).map((value4) => value4.name);
    objeto2[`${value.firstName} ${value.lastName}`] = animal2;
    return objeto2;
  });
  return objeto2;
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
