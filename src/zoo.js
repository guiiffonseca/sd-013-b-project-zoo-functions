const data = require('./data');

const { species, employees, hours, prices } = data;

// 1
function getSpeciesByIds(...ids) {
  // seu código aqui
  const searchResult = [];
  ids.forEach((id) => searchResult.push(species.find((specie) => specie.id === id)));
  return searchResult;
}

// 2
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const searchedSpecies = species.find((animals) => (animals.name === animal));
  return searchedSpecies.residents.every((resident) => resident.age > age);
}

// 3
function getEmployeeByName(employeeName = '') {
  // seu código aqui
  if (employeeName === '') {
    return {};
  }
  return employees.find((p) => (p.firstName === employeeName || p.lastName === employeeName));
}

// 4
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

// 5
function isManager(id) {
  // seu código aqui
  const managers = employees.reduce((result, managerId) => [...result, ...managerId.managers], []);
  return managers.includes(id);
}

// 6
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

// 7
function countAnimals(speciesToCount) {
  // seu código aqui
  const animalCount = {};
  species.forEach((specie) => { animalCount[specie.name] = specie.residents.length; });
  if (animalCount[speciesToCount]) {
    return animalCount[speciesToCount];
  }
  return animalCount;
}

// 8
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

// 9
function getAnimalMap(options) {
  // seu código aqui
}

// 10
function getSchedule(dayName = '') {
  // seu código aqui
  const schedule = {};
  const weekday = Object.keys(hours);
  const time = Object.values(hours);
  for (let index = 0; index < time.length; index += 1) {
    schedule[weekday[index]] = `Opens at ${time[index].open}am until ${time[index].open}pm`;
    if (time[index].open === 0 && time[index].close === 0) {
      schedule[weekday[index]] = 'CLOSED';
    }
  }
  if (dayName === '') {
    return schedule;
  }
  return { dayName: schedule[dayName] };
}

// 11
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const speciesId = employees
    .find((employee) => (employee.id === id))
    .responsibleFor[0];
  const animalObj = species
    .find((specie) => specie.id === speciesId);
  let oldestAge = 0;
  animalObj.residents.forEach((ind) => {
    if (ind.age > oldestAge) {
      oldestAge = ind.age;
    }
  });
  const Oldest = animalObj.residents.find((ind) => ind.age === oldestAge);
  const final = [Oldest.name, Oldest.sex, Oldest.age];
  return final;
}

// 12
function increasePrices(percentage) {
  // seu código aqui
  prices.Adult = (Math.round((prices.Adult * (1 + (percentage / 100))) * 100)) / 100;
  prices.Child = (Math.round((prices.Child * (1 + (percentage / 100))) * 100)) / 100;
  prices.Senior = (Math.round((prices.Senior * (1 + (percentage / 100))) * 100)) / 100;
}

// 13
function getEmployeeCoverage(idOrName = '') {
  // seu código aqui
  // if (idOrName === '') {
  //   const fin = employees
  //   .reduce((acc, emp) => acc[`${emp.firstName} ${emp.lastName}`] = emp.responsibleFor, {});
  //   return fin;
  // }
  // const employee = employees
  //   .find((p) => (p.firstName === idOrName || p.lastName === idOrName || p.id === idOrName));
  // const finalArray = {};
  // finalArray[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor;
  // return finalArray;
}

console.log(getEmployeeCoverage());

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
