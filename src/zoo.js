const { species, employees, prices, hours } = require('./data');
// const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...speciesIds) {
  return speciesIds.map((specieId) => species.find((specie) => specie.id === specieId));
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

function getAnimalsOlderThan(animal, age) {
  const specie = species.find((grup) => grup.name === animal).residents;
  // console.log(specie);
  return specie.every((specieGrup) => specieGrup.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((i) => i.firstName === employeeName || i.lastName === employeeName);
}

// console.log(getEmployeeByName('Emery'));

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

function isManager(id) {
  // return employees.forEach((employee) => (employee.managers.some((managerId) => managerId === id)));
  return employees.some(({ managers }) => managers.includes(id));
  // const managerId = employees.values(employees.managers);
  // console.log(managerId);
  // return managerId;
}

// console.log(isManager());

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function creatingArrayAnimalNames() {
  const array = [];
  species.map((specie) => array.push(specie.name));
  return array;
}
// ^^ funcao de dependecia do countAnimals ^^

function createArrayAnimalCount() {
  const array = [];
  species.map((specie) => array.push(specie.residents.length));
  return array;
}
// ^^ funcao de dependecia do countAnimals ^^

function countAnimals(species2) {
  // quando vazio retornar um objeto desse tipo: key = name ; value = residents.length for each
  if (species2 === undefined) {
    const arrayNames = creatingArrayAnimalNames();
    const arrayLength = createArrayAnimalCount();
    const animalCount = {};
    arrayNames.forEach((animalName, i) => {
      animalCount[animalName] = arrayLength[i];
    });
    return animalCount;
    // console.log(animalCount);
  }
  // resgatar o objeto da specie desejada pelo nome
  const eachSpecie = species.find((specie) => specie.name === species2).residents;
  // retornar o residents.length
  return eachSpecie.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || null) {
    return 0;
  }
  const { Adult: A = 0, Child: C = 0, Senior: S = 0 } = entrants;
  return ((prices.Adult) * A) + ((prices.Child) * C) + ((prices.Senior) * S);
}

// console.log(calculateEntry({ 'Adult': 4 }));

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const objOpenTimes = {};
  const arrayDay = Object.keys(hours);
  const arrayValues = Object.values(hours);
  const openTimes = arrayValues.map((i) => i.open);
  const closeTimes = arrayValues.map((i) => i.close);
  arrayDay.forEach((weekDay, i) => {
    if (weekDay === 'Monday') {
      objOpenTimes[weekDay] = 'CLOSED';
    } else {
      objOpenTimes[weekDay] = `Open from ${openTimes[i]}am until ${closeTimes[i] - 12}pm`;
    }
  });
  if (dayName === undefined) {
    return objOpenTimes;
  }
  const singleOpenTime = {};
  singleOpenTime[dayName] = objOpenTimes[dayName];
  return singleOpenTime;
}

function getOldestFromFirstSpecies(id) {
  const firtSpecie = employees.find((emp) => emp.id === id).responsibleFor[0];
  const specie = species.find((s) => s.id === firtSpecie).residents;
  const sorted = specie.sort((a, b) => b.age - a.age)[0];
  return Object.values(sorted);
  // console.log(sorted);
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

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
