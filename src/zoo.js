const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const answer = [];
  ids.forEach((element) => answer.push(species.find((element2) => element2.id === element)));
  return answer;
}

function getAnimalsOlderThan(animal, age) {
  const animalObject = species.find((element) => element.name === animal);
  const verifyList = animalObject.residents.filter((element) => element.age >= age);
  if (verifyList.length === animalObject.residents.length) {
    return true;
  }
  return false;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const try1 = employees.find((element) => element.firstName === employeeName);
  const try2 = employees.find((element) => element.lastName === employeeName);
  if (try1 === undefined) {
    return try2;
  }
  return try1;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

const createManagerList = () => {
  const managerList = [];
  employees.forEach((element) => {
    for (let i = 0; i <= element.managers.length; i += 1) {
      if (managerList.includes(element.managers[i]) === false) {
        managerList.push(element.managers[i]);
      }
    }
  });
  return managerList;
};

function isManager(id) {
  let verify = 0;
  createManagerList().forEach((element) => {
    if (id === element) {
      verify += 1;
    }
  });
  if (verify > 0) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(animalName) {
  if (animalName === undefined) {
    const answer = {};
    species.forEach((element) => {
      answer[`${element.name}`] = element.residents.length;
    });
    return answer;
  }
  return species.find((element) => element.name === animalName).residents.length;
}

const normalizeAdult = (object) => {
  const entrants = object;
  if (entrants.Adult === undefined) {
    entrants.Adult = 0;
  }
};

const normalizeChild = (object) => {
  const entrants = object;
  if (entrants.Child === undefined) {
    entrants.Child = 0;
  }
};

const normalizeSenior = (object) => {
  const entrants = object;
  if (entrants.Senior === undefined) {
    entrants.Senior = 0;
  }
};

function calculateEntry(entrants = { Adult: 0, Child: 0, Senior: 0 }) {
  normalizeAdult(entrants);
  normalizeChild(entrants);
  normalizeSenior(entrants);
  const adultTotal = entrants.Adult * prices.Adult;
  const childTotal = entrants.Child * prices.Child;
  const seniorTotal = entrants.Senior * prices.Senior;
  return adultTotal + childTotal + seniorTotal;
}

function getAnimalMap(options) {
  // coisa
}

function returnAllSchedule() {
  return {
    Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
    Wednesday: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
    Thursday: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
    Friday: `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`,
    Saturday: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
    Sunday: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };
}

function getSchedule(dayName) {
  if (dayName === undefined) {
    return returnAllSchedule();
  }
  if (dayName === 'Monday') {
    const answer = {};
    answer[dayName] = 'CLOSED';
    return answer;
  }
  const day = Object.entries(hours).find((element) => element[0] === dayName);
  const schedule = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
  const answer = {};
  answer[dayName] = schedule;
  return answer;
}

const orderCrescent = (elementA, elementB) => elementB.age - elementA.age

function getOldestFromFirstSpecies(id) {
  const employeeObject = employees.find((element) => element.id === id);
  const firstAnimal = species.find((element) => element.id === employeeObject.responsibleFor[0]);
  const sortedAnimalsByAge = firstAnimal.residents.sort(orderCrescent);
  return Object.values(sortedAnimalsByAge[0])
}

function increasePrices(percentage) {
  const multiplier = (100 + percentage) / 100;
  const nPrices = prices;
  nPrices.Adult = parseFloat((Math.round(((prices.Adult * 100) * multiplier)) / 100).toFixed(2));
  nPrices.Child = parseFloat((Math.round(((prices.Child * 100) * multiplier)) / 100).toFixed(2));
  nPrices.Senior = parseFloat((Math.round(((prices.Senior * 100) * multiplier)) / 100).toFixed(2));
  return nPrices;
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
