const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...specieId) {
  // seu código aqui
  return species.filter((valor, index) => valor.id === specieId[index]);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.filter((ani) => ani.name === animal)
    .every((valor, index) => valor.residents[index].age > age);
}
function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((nome) => (
    nome.firstName === employeeName || nome.lastName === employeeName
  ));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}
function isManager(id) {
  // seu código aqui
  return employees.some((valor, index) => valor.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  // seu código aqui
  const objeto = {};
  species.forEach((valor, index) => {
    objeto[valor.name] = valor.residents.length;
  });
  if (specie === undefined) {
    return objeto;
  }
  let counter = 0;
  species.forEach((valor, index) => {
    if (valor.name === specie) counter = valor.residents.length;
  });
  return counter;
}
function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined) return 0;
  const { Child = 0, Senior = 0, Adult = 0 } = entrants;
  const { Child: ChilPrices, Senior: SeniorPrices, Adult: AdultPrices } = prices;
  const total = ChilPrices * Child + SeniorPrices * Senior + AdultPrices * Adult;
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const value1 = 1;
  const newObj = {};
  Object.entries(hours).forEach((valor, index) => {
    newObj[Object
      .values(valor)[0]] = `Open from ${Object.values(valor[1])[0]}am until ${Object
      .values(valor[1])[1] - 12}pm`;
  });
  newObj.Monday = 'CLOSED';
  if (dayName === undefined) {
    return newObj;
  }
  const obj = {};
  Object.entries(newObj).forEach((valor, index) => {
    if (dayName === Object.values(valor)[0]) {
      obj[Object.values(valor)[0]] = Object.values(valor)[value1];
    }
  });
  return obj;
}

let rep;
let array = '';
function getOldestFromFirstSpecies(id) {
  let cont = 0;
  const post = 0;
  const array2 = [];
  employees.forEach((valor) => { if (valor.id === id) rep = valor.responsibleFor[post]; });
  species.forEach((animal) => {
    if (rep === animal.id) {
      animal.residents.forEach((idade, lugar) => {
        if (idade.age > cont) {
          cont = idade.age;
          array = `${idade.name} ${idade.sex} ${idade.age}`;
        }
      });
    }
  });
  array = array.split(' ');
  array2.push(array[0], array[1], parseInt(array[2], Number));
  return array2;
}

function increasePrices(percentage) {
  // seu código aqui
  prices.Adult = Math.round(prices.Adult * (100 + percentage)) / 100;
  prices.Senior = Math.round(prices.Senior * (100.01 + percentage)) / 100;
  prices.Child = Math.round(prices.Child * (100.01 + percentage)) / 100;
}

function getByIds(...ids) {
  return ids.map((id, index) => species.find((specie) => id === specie.id).name);
}

function getEmployeeCoverage(idOrName) {
  const zero = 0;
  const um = 1;
  const obj = {};
  employees.forEach(({ firstName, lastName, responsibleFor }, index) => {
    obj[`${firstName} ${lastName}`] = getByIds(...employees[index].responsibleFor);
  });
  if (idOrName === undefined) return obj;
  const newObj = {};
  Object.entries(obj).filter((name, index) => name[0].includes(idOrName) === true)
    .forEach((acc) => { newObj[acc[zero]] = acc[um]; });
  if (idOrName.length > 15) {
    const findForId = employees.find((nome) => nome.id === idOrName);
    Object.entries(obj).filter((name, index) => name[0].includes(findForId.firstName) === true)
      .forEach((acc) => { newObj[acc[zero]] = acc[um]; });
  }
  return newObj;
}
console.log(getEmployeeCoverage('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
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
