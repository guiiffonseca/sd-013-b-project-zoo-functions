const { species } = require('./data');
const { prices } = require('./data');
const { employees } = require('./data');
const { hours } = require('./data');

// const data = require('./data');
// Isso é algo que eu coloquei aqui??

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const specieId = species.filter((specie) => specie.id === ids[0] || specie.id === ids[1]);
  return specieId;
}

function getAnimalsOlderThan(animal, age) {
  const specieChosen = species.find((specie) => specie.name === animal);
  const nameAnimal = specieChosen.residents;
  return nameAnimal.every((nameA) => nameA.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((p) => p.firstName === employeeName || p.lastName === employeeName);
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
  return employees.some((valor, index) => valor.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(speciees) {
  if (speciees !== undefined) {
    return species.find((specie) => specie.name === speciees).popularity;
  }
  return species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
}

// função para verificar se o obj está vazio.
// Link - https://www.horadecodar.com.br/2020/10/06/como-verificar-se-objeto-esta-vazio-em-javascript/
function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function calculeteValues(entrants) {
  let adult = 0;
  let child = 0;
  let senior = 0;
  if (entrants.Adult > 0) {
    adult = entrants.Adult * prices.Adult;
  }
  if (entrants.Child > 0) {
    child = entrants.Child * prices.Child;
  }
  if (entrants.Senior > 0) {
    senior = entrants.Senior * prices.Senior;
  }
  return adult + child + senior;
}

function calculateEntry(entrants) {
  if (entrants === undefined || isEmpty(entrants) === true) {
    return 0;
  }
  return calculeteValues(entrants);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  if (dayName === undefined) {
    const schedules = {};
    Object.keys(hours).forEach((hour, index) => {
      if (hours[hour].open === 0) {
        schedules[hour] = 'CLOSED';
        return schedules;
      }
      schedules[hour] = `Open from ${hours[hour].open}am until ${hours[hour].close - 12}pm`;
      return schedules;
    });
    return schedules;
  }
  if (hours[dayName].close === hours[dayName].open) {
    return { Monday: 'CLOSED' };
  }
  return { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
}

function getOldestFromFirstSpecies(id) {
  const animal = employees.find((people) => people.id === id).responsibleFor[0];
  const idAnimal = species.find((value) => value.id === animal).residents;

  let bigger = 0;
  let returnArray = [];

  idAnimal.forEach((value) => {
    if (bigger < value.age) {
      bigger = value.age;
      returnArray = [value.name, value.sex, value.age];
      return returnArray;
    }
  });
  return returnArray;
}

function increasePrices(percentage) {
  prices.Adult = Number((prices.Adult + ((prices.Adult / 100) * percentage) + 0.005).toFixed(2));
  prices.Senior = Number((prices.Senior + ((prices.Senior / 100) * percentage) + 0.005).toFixed(2));
  prices.Child = Number((prices.Child + ((prices.Child / 100) * percentage) + 0.005).toFixed(2));

  // prices.Adult = prices.Adult + (prices.Adult / 100 * percentage) + 0.005;
  // prices.Senior = prices.Senior + (prices.Senior / 100 * percentage) + 0.005;
  // prices.Child = prices.Child + (prices.Child / 100 * percentage) + 0.005;
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
