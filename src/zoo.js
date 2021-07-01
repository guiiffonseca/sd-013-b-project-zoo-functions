const data = require('./data');

const { prices } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((especie) => ids.includes(especie.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getAnimal = data.species.find((especie) => especie.name === animal);
  return getAnimal.residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) { // "!employeeName" sugestao dada no plantao do baeta.
    return {};
  }
  return data.employees.find((element) =>
    employeeName === element.firstName || employeeName === element.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const checkManager = data.employees.find((element) => element.managers.includes(id));
  if (checkManager) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const addingEmploye = data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return addingEmploye;
}

function countAnimals(especies) {
  // seu código aqui
  const creatList = data.species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
  if (!especies) {
    return creatList;
  }
  return creatList[especies];
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  const time = Object.keys(data.hours);
  const eachDay = time.reduce((acc, curr) => {
    acc[curr] = `Open from ${data.hours[curr].open}am until ${data.hours[curr].close - 12}pm`;
    return acc;
  }, {});
  eachDay.Monday = 'CLOSED';
  if (time.includes(dayName) === true) {
    return { [dayName]: eachDay[dayName] };
  }
  return eachDay;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const getId = data.employees.find((element) => element.id === id);
  const getResposible = getId.responsibleFor;
  const speciesOfId = (...responsibleFor) => data.species
    .filter((element) => responsibleFor.includes(element.id));
  const specie = speciesOfId(...getResposible).reduce((acc, curr) => {
    const { residents } = curr;
    acc.push(...residents);
    return acc;
  }, []);
  specie.sort((a, b) => b.age - a.age);
  return Object.values(specie[0]);
}

function increasePrices(percentage) {
  // seu código aqui
  const porcentage = 1 + (percentage / 100);
  const value = Object.keys(prices);
  value.forEach((element) => {
    const valorInicial = prices[element] * porcentage;
    const numberRounded = Math.round(valorInicial * 100) / 100;
    prices[element] = numberRounded;
  });
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
