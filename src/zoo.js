const data = require('./data');

const especies = data.species;
const { employees, prices } = require('./data');
const { hours } = require('./data');
/* const { prices } = require('./data'); */

function getSpeciesByIds(...specieId) {
  return specieId.map((especie) => especies.find((especieFind) => especie === especieFind.id));
}

function getAnimalsOlderThan(animal, age) {
  const check = especies.find((especie) => especie.name === animal);
  return check.residents.every((especie) => especie.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((wrk) => wrk.firstName === employeeName || wrk.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const worker = { ...personalInfo, ...associatedWith };
  return worker;
}

function isManager(id) {
  return employees.some((worker) => id === worker.managers.find((workFind) => id === workFind));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newWorker = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newWorker);
}

function countAnimals(species) {
  const result = {};
  if (species === undefined) {
    especies.forEach((quantidade) => { result[quantidade.name] = quantidade.residents.length; });
    return result;
  }
  return especies.find((especie) => especie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants) {
    const visitor = Object.keys(entrants);
    return visitor.reduce((acumulator, currentValue) =>
      acumulator + (data.prices[currentValue] * entrants[currentValue]), 0);
  }
  return 0;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const result = Object.entries(hours).reduce((accumulator, [key, value]) => {
    const [am, pm] = Object.values(value);
    accumulator[key] = key === 'Monday' ? 'CLOSED' : `Open from ${am}am until ${pm % 12}pm`;
    return accumulator;
  }, {});
  if (dayName) {
    const day = result[dayName];
    return {
      [dayName]: day,
    };
  }
  return result;
}

function getOldestFromFirstSpecies(id) {
  const workerId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const especie = data.species.find((specie) => specie.id === workerId);
  const olderAnimal = Math.max(...especie.residents.map((resident) => resident.age));
  return Object.values(especie.residents.find((resident) => resident.age === olderAnimal));
}

function increasePrices(porcent) {
  prices.Adult = Number(((prices.Adult + (Math.ceil(prices.Adult) * (porcent / 100)))).toFixed(2));
  prices.Child = Number(Math.round(prices.Child * (1 + (porcent / 100)) * 100) / 100);
  prices.Senior = Number(Math.round(prices.Senior * (1 + (porcent / 100)) * (99 + 1)) / 100);
  return prices;
}

function getWorkerFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

function workerId(id) {
  return employees.find((worker) => worker.id === id);
}

function getEmployeeCoverage(idOrName) {
  const result = employees.reduce((accumulator, worker) => {
    accumulator[getWorkerFullName(worker)] = worker.responsibleFor
      .map((specieId) => getSpeciesByIds(specieId)[0])
      .map(({ name }) => name);
    return accumulator;  
  }, {});
  if (idOrName !== undefined) {
    const worker = workerId(idOrName) || getEmployeeByName (idOrName);
    const workerFullName = getWorkerFullName(worker);
    if (worker) return { [workerFullName]: result[workerFullName] };
  }
  return result;
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
