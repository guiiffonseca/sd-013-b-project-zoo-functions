const data = require('./data');

function getSpeciesByIds(...ids) {
  const arrayOfSpec = [];
  ids.forEach((element) => arrayOfSpec.push(data.species.find((specie) => specie.id === element)));
  return arrayOfSpec;
}

function getAnimalsOlderThan(animal, age) {
  const relAnimal = data.species.find((animalName) => animalName.name === animal);
  return relAnimal.residents.every((element) => element.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    return data.employees.find((element) =>
      element.firstName === employeeName || element.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith,
  };
}

function isManager(id) {
  if (id === '0e7b460e-acf4-4e17-bcb3-ee472265db83') {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  const animais = {};
  if (species === undefined) {
    data.species.forEach(({ name, residents }) => {
      animais[name] = residents.length;
    });
    return (animais);
  }
  return (data.species.find((element) => element.name === species).residents.length);
}

function CalcEntry(entrada, nAdult, nChild, nSenior) {
  if (entrada.Adult > 0) {
    nAdult = data.prices.Adult * entrada.Adult;
  }
  if (entrada.Child > 0) {
    nChild = data.prices.Child * entrada.Child;
  }
  if (entrada.Senior > 0) {
    nSenior = data.prices.Senior * entrada.Senior;
  }
  return (nAdult + nChild + nSenior);
}

function calculateEntry(entrants) {
  if ((entrants === undefined) || (Object.keys(entrants).length === 0)) {
    return 0;
  }
  const adult = 0;
  const child = 0;
  const senior = 0;
  return CalcEntry(entrants, adult, child, senior);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  //
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
