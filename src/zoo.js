const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const testArray = [];
  species.forEach((atual) => {
    if (ids.includes(atual.id) === true) {
      testArray.push(atual);
    }
  });
  return testArray;
}

function getAnimalsOlderThan(animal, age) {
  const animalEcontrado = species.find((atual) => atual.name === animal);
  const resposta = animalEcontrado.residents.every((atual) => atual.age > age);
  return resposta;
}

function getEmployeeByName(employeeName) {
  const tst = (name) => name.firstName === employeeName || name.lastName === employeeName;
  let resposta = employees.find((atual) => tst(atual));
  const avaliator = resposta === undefined ? resposta = {} : resposta;
  return avaliator;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((crr) => crr.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEmployee);
}

function countAnimals(x) {
  let resp;
  if (x === undefined) {
    resp = {};
    species.forEach((acc) => {
      resp[acc.name] = acc.residents.length;
    });
  } else {
    const animal = species.find((crr) => crr.name === x);
    resp = animal.residents.length;
  }
  return resp;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const array = [];
  const adults = entrants.Adult * prices.Adult;
  const childs = entrants.Child * prices.Child;
  const seniors = entrants.Senior * prices.Senior;
  array.push(adults, childs, seniors);
  const filtro = array.filter((atual) => Number.isNaN(atual) !== true);
  return filtro.reduce((acumulator, atual) => acumulator + atual);
}
// funçoes pra 9

const neAnimals = species.filter((atual) => atual.location === 'NE');
const nwAnimals = species.filter((atual) => atual.location === 'NW');
const seAnimals = species.filter((atual) => atual.location === 'SE');
const swAnimals = species.filter((atual) => atual.location === 'SW');

function getNames(array) {
  const arrayNomes = [];
  array.forEach((atual) => arrayNomes.push(atual.name));
  return arrayNomes;
}

const noParameters = () => {
  const returnObject = {
    NE: getNames(neAnimals),
    NW: getNames(nwAnimals),
    SE: getNames(seAnimals),
    SW: getNames(swAnimals),
  };
  return returnObject;
};

const includeNames = () => {
  const resposta = {
    NE: neAnimals.forEach((crr) => { (getNames(crr.residents)); }),
    NW: [],
    SE: [],
    SW: [],
  };
  return resposta;
};
function getAnimalMap(options) {
  if (options === undefined) {
    return noParameters();
  }

  if (options === 'includeNames: true') {
    includeNames();
  }
}

function getSchedule(dayName) {
  const days = Object.keys(hours);
  const values = Object.values(hours);
  const object = {};
  for (let i = 0; i < days.length; i += 1) {
    object[days[i]] = `Open from ${values[i].open}am until ${values[i].close - 12}pm`;
  }
  object.Monday = 'CLOSED';
  const focus = { [dayName]: object[`${dayName}`] };
  return (dayName === undefined) ? object : focus;
}

function getOldestFromFirstSpecies(id) {
  const res = employees.find((crr) => crr.id === id).responsibleFor[0];
  const animals = species.find((crr) => crr.id === res).residents.sort((a, b) => b.age - a.age);
  // return animals.reduce((acumulator, crr) => {
  // if (crr.age > acumulator) { acumulator = crr; }
  // }, 0);
  return Object.values(animals[0]);
}
function increasePrices(percentage) {
  const percent = percentage / 100;
  const regra = (param) => Math.round(100 * (param * (1 + percent))) / 100;
  prices.Adult = regra(prices.Adult);
  prices.Child = regra(prices.Child);
  prices.Senior = regra(prices.Senior);
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
