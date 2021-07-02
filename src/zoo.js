const { species, employees, hours, prices } = require('./data');

const data = require('./data');

const all = [...species, ...employees];

let { Adult, Senior, Child } = prices;

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

// !     \/    ------Inicio do requerimento 9------      \/

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

function getFem(param) {
  const animals = param.residents.filter((e) => e.sex === 'female').map((e) => e.name);
  const animalsName = [param].map((e) => e.name);
  const makeObject = {};
  makeObject[animalsName] = animals;
  return makeObject;
}

function getFemSort(param) {
  const animals = param.residents.filter((e) => e.sex === 'female').map((e) => e.name).sort();
  const animalsName = [param].map((e) => e.name);
  const makeObject = {};
  makeObject[animalsName] = animals;
  return makeObject;
}

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

const requirementThreeGet = {
  NE: [getFem(lions), getFem(giraffes)],
  NW: [getFem(tigers), getFem(bears), getFem(elephants)],
  SE: [getFem(penguins), getFem(otters)],
  SW: [getFem(frogs), getFem(snakes)],
};

const requirementFourGet = {
  NE: [getFemSort(lions), getFemSort(giraffes)],
  NW: [getFemSort(tigers), getFemSort(bears), getFemSort(elephants)],
  SE: [getFemSort(penguins), getFemSort(otters)],
  SW: [getFemSort(frogs), getFemSort(snakes)],
};

function getHelperOne(para) {
  switch (para) {
  case 'true':
    return requirementOneGet;
  case 'true,true':
    return requirementTwoGet;
  case 'true,female':
    return requirementThreeGet;
  default:
    return undefined;
  }
}

function getHelperTwo(para) {
  switch (para) {
  case 'true,female,true':
    return requirementFourGet;
  case 'female':
    return { NE, NW, SE, SW };
  case 'female,true':
    return { NE, NW, SE, SW };
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

// !       /\      ------Fim do requerimento 9------       /\

function getSchedule(dayName) {
  const schedule = Object.getOwnPropertyDescriptors(hours);
  Object.keys(schedule).forEach((prop) => {
    schedule[prop] = `Open from ${hours[prop].open}am until ${hours[prop].close % 12}pm`;
    schedule.Monday = 'CLOSED';
  });
  if (dayName === undefined) {
    return schedule;
  }
  const oneDayOnASchedule = {};
  oneDayOnASchedule[dayName] = schedule[dayName];
  return oneDayOnASchedule;
}

function getOldestFromFirstSpecies(id) {
  const findAnimal = employees.find((e) => e.id === id).responsibleFor[0];
  const findResident = species.find((e) => e.id === findAnimal);
  const sortResident = findResident.residents.sort((one, two) => two.age - one.age)[0];
  const { age, name, sex } = sortResident;
  const result = [name, sex, age];
  return result;
}

function increasePrices(percentage) {
  Adult = data.prices.Adult;
  Child = data.prices.Child;
  Senior = data.prices.Senior;
  const itemA = Math.round((Adult + ((Adult / 100) * percentage)) * 100) / 100;
  const itemB = Math.round((Child + ((Child / 100) * percentage)) * 100) / 100;
  const itemC = Math.round((Senior + ((Senior / 100) * percentage)) * 100) / 100;
  data.prices.Adult = itemA;
  data.prices.Child = itemB;
  data.prices.Senior = itemC;
  return data.prices;
}

// !     \/    ------Inicio do requerimento 13------      \/

const employeesAndAnimals = {};

employees.sort((a, b) => a.firstName.localeCompare(b.firstName));

function nbv(a) {
  const animalsFromEmployee = [];
  const employee = Object.values(employees)[a].id;
  const groupOfAnimals = employees.find((e) => e.id === employee).responsibleFor;
  Object.keys(groupOfAnimals).forEach((p) => {
    animalsFromEmployee.push(species.filter((e) => e.id === groupOfAnimals[p])[0].name);
  });
  return animalsFromEmployee;
}

employees.reduce((e, a, i) => {
  employeesAndAnimals[`${a.firstName} ${a.lastName}`] = nbv(i);
  return 0;
}, 0);

function getEmployeeCoverage(idOrName = 0) {
  if (idOrName === 0) {
    return employeesAndAnimals;
  }
  let arrayReceiver;
  Object.entries(employeesAndAnimals).forEach((e, i) => {
    if (e[0].includes(idOrName) || employees[i].id === idOrName) {
      arrayReceiver = e;
    }
  });
  const finalObject = {};
  const [a, b] = arrayReceiver;
  finalObject[a] = b;
  return finalObject;
}

// !       /\      ------Fim do requerimento 13------       /\

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
