const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) { return []; }
  if (ids.length >= 1) {
    return ids.map((id) => data.species.find((animal) => animal.id === id));
  }
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animalName) => animal === animalName.name).residents
    .every((animalAge) => animalAge.age >= age);
}

function getEmployeeByName(findName) {
  if (findName === undefined) {
    return {};
  }
  return data.employees.find((name) => findName === name.firstName || findName === name.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return data.employees.some((idM) => idM.managers.find((idT) => idT === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specie) {
  if (specie === undefined) {
    const animals = data.species.reduce((acc, value) => {
      acc[value.name] = value.residents.length;
      return acc;
    }, {});
    return animals;
  }
  return data.species.find((animal) => animal.name === specie).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const adultPrice = data.prices.Adult;
  const childPrice = data.prices.Child;
  const seniorPrice = data.prices.Senior;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const total = (adultPrice * Adult) + (childPrice * Child) + (seniorPrice * Senior);
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const days = Object.entries(data.hours).reduce((acc, curr) => {
    if (curr[1].open === 0 && curr[1].close === 0) {
      acc[curr[0]] = 'CLOSED';
      return acc;
    }
    acc[curr[0]] = `Open from ${curr[1].open}am until ${curr[1].close - 12}pm`;
    return acc;
  }, {});
  if (!dayName) {
    return days;
  }
  const result = {};
  const objectOfParameter = Object.entries(days)
    .filter((elemento) => elemento[0] === dayName)[0];
  const [key, value] = objectOfParameter;
  result[key] = value;
  return result;
}

function getOldestFromFirstSpecies(id) {
  const idAnimal = data.employees.find((idP) => idP.id === id).responsibleFor[0];
  const animals = data.species.find((idA) => idA.id === idAnimal).residents;
  const findOld = animals.reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr));
  return [findOld.name, findOld.sex, findOld.age];
}

function increasePrices(percentage) {
  const price = data.prices;
  const key = Object.keys(price);
  key.forEach((keys) => {
    const newPrice = price[keys] + (price[keys] * (percentage / 100));
    price[keys] = Math.round(newPrice * 100) / 100;
    return price[keys];
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
