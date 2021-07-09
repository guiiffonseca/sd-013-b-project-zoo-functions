const data = require('./data');

const { employees, hours } = data;

function getSpeciesByIds(...ids) {
  const request = [];
  const arrayId = ids;
  arrayId.forEach((element) => {
    const animal = data.species.find((element2) => element2.id === element);
    request.push(animal);
  });
  return request;
}

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((element) => element.name === animal);
  const request = specie.residents.every((value) => value.age >= age);
  return request;
}

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    return employees
      .find((element) => element.firstName === employeeName || element.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  const newArr = {};
  if (species === undefined) {
    data.species.forEach((elements) => {
      newArr[elements.name] = elements.residents.length;
    });
    return newArr;
  }
  const animal = data.species.find((element) => element.name === species);
  return animal.residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  return Object.entries(entrants)
    .reduce((acc, [entrant, value]) => acc + data.prices[entrant] * value, 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getTime(hour) {
  if (hour <= 12) {
    return `${hour}am`;
  }
  return `${hour - 12}pm`;
}

function getSchedule(dayName) {
  const hour = Object.keys(hours);
  const dayMessage = {};
  hour.forEach((day) => {
    const response = `Open from ${getTime(hours[day].open)} until ${getTime(hours[day].close)}`;
    if (day !== 'Monday') {
      dayMessage[day] = response;
    } else {
      dayMessage[day] = 'CLOSED';
    }
  });
  if (dayName === undefined) {
    return dayMessage;
  }
  return {
    [dayName]: dayMessage[dayName],
  };
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
