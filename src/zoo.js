const data = require('./data');

const { species, employees, hours, prices } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  // species.filter((specie) => specie === ids.some((id) => specie.id === id))
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const searchedSpecies = species.find((animals) => (animals.name === animal));
  return searchedSpecies.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName = '') {
  // seu código aqui
  if (employeeName === '') {
    return {};
  }
  return employees.find((p) => (p.firstName === employeeName || p.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  const managers = employees.reduce((result, managerId) => [...result, ...managerId.managers], []);
  return managers.includes(id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(speciesToCount) {
  // seu código aqui
  const animalCount = {};
  species.forEach((specie) => { animalCount[specie.name] = specie.residents.length; });
  if (animalCount[speciesToCount]) {
    return animalCount[speciesToCount];
  }
  return animalCount;
}

function calculateEntry(entrants = {}) {
  // seu código aqui
  let finalPrice = 0;
  if (entrants.Adult) {
    finalPrice += entrants.Adult * prices.Adult;
  }
  if (entrants.Child) {
    finalPrice += entrants.Child * prices.Child;
  }
  if (entrants.Senior) {
    finalPrice += entrants.Senior * prices.Senior;
  }
  return finalPrice;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  // const schedule = {};
  // hours.forEach((day) => { schedule[day] = `Open from ${day.open} until ${day.close}`});
  // console.log(schedule);
  // schedule.forEach((day === 0) ? 'CLOSED' : day);
  // if (schedule[dayName]) {
  //   return schedule[dayName];
  // }
  // return schedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  // const speciesId = employees
  // .find((employee) => (employee.id === id))
  // .responsibleFor[0];
  // const specieObj = species.find((specie) => specie.id === speciesId);
  // currentAge = 0;
  // specieObj.residents.forEach((ind) => {
  //   if (ind.age > currentAge) {
  //     currentAge = ind.age;
  //   }
  // });
  // Oldest = specieObj.find((animal) => animal.age === currentAge);
  // return [...Oldest]
}

function increasePrices(percentage) {
  // seu código aqui
  // prices.forEach((category) => prices[category] *= (1 + (percentage/100)));
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  // const employee =
  // if (idOrName) {
  //   employees.find((employee) => (employee.id === idOrName));
  // }
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
