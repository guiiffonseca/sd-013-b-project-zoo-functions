const { species, prices } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const idSpecies = ids;
  const returnSpecies = [];
  species.forEach((currentValue, index) => {
    const verificaId = idSpecies.filter((animalId) => currentValue.id === animalId);
    if (verificaId[0] === species[index].id) returnSpecies.push(species[index]);
  });
  return returnSpecies;
}

function getAnimalsOlderThan(animal, age) {
  let returnBollean = true;
  species.forEach((currentValue) => {
    if (currentValue.name === animal) {
      currentValue.residents.forEach((currentValueResidents) => {
        if (currentValueResidents.age <= age) returnBollean = false;
      });
    }
  });
  return returnBollean;
}

function getEmployeeByName(employeeName) {
  let retorno = {};
  employees.forEach((currentValue) => {
    const { firstName, lastName } = currentValue;
    if (firstName === employeeName || lastName === employeeName) retorno = currentValue;
  });
  return retorno;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  let retorno = false;
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  if (id === stephanieId || id === olaId || id === burlId) {
    retorno = true;
  }
  return retorno;
}

function addEmployee(id, firstName, lastName, newManagers = [], newResponsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id: `${id}`,
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    managers: newManagers,
    responsibleFor: newResponsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(especies = '') {
  // seu código aqui
  const retorno = {};
  species.forEach((currentValue) => {
    let contador = 0;
    currentValue.residents.forEach(() => {
      contador += 1;
    });
    retorno[`${currentValue.name}`] = contador;
  });
  if (especies === '') {
    return retorno;
  }
  return retorno[`${especies}`];
}

function calculateEntry(entrants = 0) {
  if (entrants.length === 0 || entrants === 0) { return 0; }

  const pricesZoo = [prices.Adult, prices.Child, prices.Senior];
  const entrantsZoo = [entrants.Adult, entrants.Child, entrants.Senior];
  let totalToPay = 0;
  entrantsZoo.forEach((currentValue, index) => {
    if (currentValue >= 0) { totalToPay += currentValue * pricesZoo[index]; }
  });
  return totalToPay;
}

function getAnimalsByLocation() {
  const retorno = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((currentValue) => {
    retorno[`${currentValue.location}`].push(currentValue.name);
  });
  return retorno;
}

function getAnimalsNames(sorted = false, sex = '') {
  const retorno = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((currentValue) => {
    const { name, location, residents } = currentValue;
    const nameAnimal = {}; nameAnimal[name] = [];
    retorno[`${location}`].push(nameAnimal);
    residents.forEach((Resident) => {
      if (sex === '') { nameAnimal[name].push(Resident.name); }
      if (sex === Resident.sex) { nameAnimal[name].push(Resident.name); }
    });
    if (sorted === true) { nameAnimal[currentValue.name].sort(); }
  });
  return retorno;
}

function getAnimalMap(options = '') {
  const { sorted = false, sex = '', includeNames = false } = options;
  if (includeNames === true) { return getAnimalsNames(sorted, sex); }
  return getAnimalsByLocation();
}

function getSchedule(dayName = '') {
  const dayAndHour = {};
  const lintCor = 'Open from 10am until 8pm';
  const retorno = {
    Tuesday: lintCor,
    Wednesday: 'Open from 8am until 6pm',
    Thursday: lintCor,
    Friday: lintCor,
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  dayAndHour[dayName] = retorno[dayName];
  if (dayName === '') { return retorno; }
  return dayAndHour;
}

function getOldestFromFirstSpecies(id) {
  let oldest = 0;
  const getEmployee = employees.find((value) => value.id === id);
  const firstSpecie = getEmployee.responsibleFor[0];
  const animal = getSpeciesByIds(firstSpecie);
  animal[0].residents.forEach((value) => { if (value.age > oldest) { oldest = value.age; } });
  const animalOldest = animal[0].residents.find((residents) => residents.age === oldest);
  return [animalOldest.name, animalOldest.sex, animalOldest.age];
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
