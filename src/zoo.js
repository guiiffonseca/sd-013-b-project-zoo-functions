// const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((value) => value.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((value) => value.name === animal).residents
    .every((value) => value.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return !data.employees.some((value) => value.id === id && value.managers.length > 1);
}

function addEmployee(id, firstName, lastName, man = [], res = []) {
  const personInfo = { id, firstName, lastName };
  const associate = { managers: man, responsibleFor: res };
  const employee = { ...personInfo, ...associate };
  data.employees.push(employee);
}

function countAnimals(species) {
  if (!species) {
    return data.species.reduce((accumulator, specie) => {
      const { name } = specie;
      accumulator[name] = specie.residents.length;
      return accumulator;
    }, {});
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const arrayOfEntrants = Object.entries(entrants);
  const arrayOfPrice = Object.entries(data.prices);
  let total = 0;
  arrayOfEntrants.forEach((entrant) => { // percorre e compara o primeiro índice dos arrays, caso iguais total é incrementado com a multiplicação do 2º índice dos arrays.
    arrayOfPrice.forEach((tableOfPrices) => {
      if (entrant[0] === tableOfPrices[0]) {
        total += entrant[1] * tableOfPrices[1];
      }
    });
  });
  return total;
}
const location = (loc) => data.species.filter((value) => value.location === loc);

const locationSpecieName = ((local) => location(local).map(({ name }) => name));

const locationAnimalName = ((local, sex) => location(local).map((specie) => {
  const newObject = {};
  if (sex !== undefined) {
    newObject[specie.name] = specie.residents
      .filter((sexos) => sexos.sex === sex).map((resident) => resident.name);
  } else {
    newObject[specie.name] = specie.residents.map((resident) => resident.name);
  }
  return newObject;
}));

const locationAnimalNameSorted = ((local, sex) => location(local).map((specie) => {
  const newObject = {};
  newObject[specie.name] = specie.residents.map((resident) => resident.name).sort();
  if (sex !== undefined) {
    newObject[specie.name] = specie.residents
      .filter((sexos) => sexos.sex === sex).map((resident) => resident.name).sort();
  }
  return newObject;
}));
const object = {
  NE: locationSpecieName('NE'),
  NW: locationSpecieName('NW'),
  SE: locationSpecieName('SE'),
  SW: locationSpecieName('SW'),
};
function getAnimalMap(options) {
  const newObject = { ...object };
  const objectKeys = Object.keys(newObject);
  if (!!options && Object.keys(options).includes('includeNames')) {
    objectKeys.forEach((value) => {
      newObject[value] = locationAnimalName(value, options.sex);
    });
    if (Object.keys(options).includes('sorted')) {
      objectKeys.forEach((value) => {
        newObject[value] = locationAnimalNameSorted(value, options.sex);
      });
    }
  }
  return newObject;
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
