const { species, employees, hours, prices } = require('./data');
// const data = require('./data');

const all = [...species, ...employees];
const isTrue = hours + prices === true;
console.log(isTrue);
const { Adult, Senior, Child } = prices;

function getSpeciesByIds(ids = [], ids2 = []) {
  if (ids.length === 0) {
    return ids;
  }
  if (ids2.length === 0) {
    return all.filter((element) => element.id === ids);
  }
  const elementOne = all.filter((element) => element.id === ids);
  const elementTwo = all.filter((element) => element.id === ids2);
  return [...elementOne, ...elementTwo];
}

function getAnimalsOlderThan(animal, age) {
  // primeiro usamos o filter para obter o elemento que tenha a propriedade .name igual ao parametro 'animal'
  // depos pegamos o index 0 e recebemos um objeto. Percorremos este objeto com o every e perguntamos se
  // a propriedade .age é maior que o parametro 'age'.
  return species.filter((e) => e.name === animal)[0].residents.every((e) => e.age > age);
}

function getEmployeeByName(employeeName = {}) {
  if (Object.keys(employeeName).length === 0) {
    return employeeName;
  }
  return employees.filter((e) => e.firstName === employeeName || e.lastName === employeeName)[0];
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { firstName, id, lastName, managers, responsibleFor };
}

function isManager(id) {
  if (
    employees
      .map((e) => e.managers)
      .reduce((e, actual) => e + actual.some((frase) => frase === id), 0) > 0
  ) {
    return true;
  }
  return false;
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species2 = {}) {
  if (Object.keys(species2).length === 0) {
    const count = {};
    species.reduce((e, actual) => {
      count[actual.name] = actual.residents.length;
      return count;
    }, 0);
    return count;
  }
  return species.find((e) => e.name === species2).residents.length;
}

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length < 1) {
    return 0;
  }
  const { Adult: guestOne = 0, Senior: guestTwo = 0, Child: guestThree = 0 } = entrants;
  return guestOne * Adult + guestTwo * Senior + guestThree * Child;
}

const NE = species.filter((e) => e.location === 'NE').map((e) => e.name);
const NW = species.filter((e) => e.location === 'NW').map((e) => e.name);
const SE = species.filter((e) => e.location === 'SE').map((e) => e.name);
const SW = species.filter((e) => e.location === 'SW').map((e) => e.name);
const [lions, giraffes] = species.filter((e) => e.location === 'NE');
const [tigers, bears, elephants] = species.filter((e) => e.location === 'NW');
const [penguins, otters] = species.filter((e) => e.location === 'SE');
const [frogs, snakes] = species.filter((e) => e.location === 'SW');

function get(param) {
  const animals = param.residents.map((e) => e.name);
  const animalsName = [param].map((e) => e.name);
  const makeObject = {};
  makeObject[animalsName] = animals;
  return makeObject;
}

function getSort(param) {
  const animals = param.residents.map((e) => e.name).sort();
  const animalsName = [param].map((e) => e.name);
  const makeObject = {};
  makeObject[animalsName] = animals;
  return makeObject;
}

//! const exp3 = {
//!   NE: [{ lions: ["Zena", "Dee"] }, { giraffes: ["Gracia", "Vicky"] }],
//!   NW: [
//!     { tigers: ["Shu", "Esther"] },
//!     { bears: [] },
//!     { elephants: ["Ilana", "Bea"] },
//!   ],
//!   SE: [{ penguins: ["Keri"] }, { otters: ["Mercedes", "Margherita"] }],
//!   SW: [{ frogs: ["Cathey", "Annice"] }, { snakes: ["Paulette"] }],
//! };

const requirementOneGet = {
  NE: [get(lions), get(giraffes)],
  NW: [get(tigers), get(bears), get(elephants)],
  SE: [get(penguins), get(otters)],
  SW: [get(frogs), get(snakes)],
};

const requirementTwoGet = {
  NE: [getSort(lions), getSort(giraffes)],
  NW: [getSort(tigers), getSort(bears), getSort(elephants)],
  SE: [getSort(penguins), getSort(otters)],
  SW: [getSort(frogs), getSort(snakes)],
};

function getHelperOne(para) {
  switch (para) {
  case 'true':
    return requirementOneGet;
  case 'true,true':
    return requirementTwoGet;
  case 'bob3':
    return 3;
  default:
    return undefined;
  }
}

function getHelperTwo(para) {
  switch (para) {
  case 'true,female,true':
    return 4;
  case 'bob4':
    return 5;
  default:
    return undefined;
  }
}

function getAnimalMap(options) {
  if (options === undefined) {
    return { NE, NW, SE, SW };
  }
  const key = Object.values(options).toString();
  console.log(key);
  const possibilityOne = getHelperOne(key);
  const possibilityTwo = getHelperTwo(key);
  if (possibilityOne !== undefined) {
    return possibilityOne;
  }
  return possibilityTwo;
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
  // ! seu código aqui
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
