const { species, employees, prices } = require('./data');
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
  let managerList = [];
  employees.forEach((element) => {
    for (let i = 0; i <= element.managers.length; i += 1) {
      if (managerList.includes(element.managers[i]) === false) {
        managerList.push(element.managers[i]);
      }
    }
  });
  return managerList;
}

function isManager(id) {
  let verify = 0;
  createManagerList().forEach((element) => {
    if (id === element) {
      verify += 1
    }
  })
  if (verify > 0) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  let newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor
  };
  data.employees.push(newEmployee)
}

function countAnimals(animalName) {
  if (animalName === undefined) {
    let answer = {}
    species.forEach((element) => {
      answer[`${element.name}`] = element.residents.length
    })
    return answer
  }
  return species.find((element) => element.name === animalName).residents.length
}

const normalizeAdult = (entrants) => entrants.Adult === undefined? entrants.Adult = 0 : 0;
const normalizeChild = (entrants) => entrants.Child === undefined? entrants.Child = 0 : 0;
const normalizeSenior = (entrants) => entrants.Senior === undefined? entrants.Senior = 0 : 0;

function calculateEntry(entrants = { 'Adult': 0, 'Child': 0, 'Senior': 0}) {
  normalizeAdult(entrants);
  normalizeChild(entrants);
  normalizeSenior(entrants);
  let adultTotal = entrants.Adult * prices.Adult;
  let childTotal = entrants.Child * prices.Child;
  let seniorTotal = entrants.Senior * prices.Senior;
  return adultTotal + childTotal + seniorTotal;
}

function getAnimalMap(options) {
  // seu código aqui
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
