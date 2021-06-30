const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  } return data.species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const arrayAnimal = data.species.filter((specie) => specie.name === animal);
  const arrayResidents = arrayAnimal[0].residents;
  return arrayResidents.every((resident) => resident.age >= age);
}

function getEmployeeByName(string) {
  if (string === undefined) {
    return {};
  } return data.employees.find((employee) => {
    const { firstName, lastName } = employee;
    return firstName === string || lastName === string;
  });
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (species === undefined) {
    const animalCounter = {};
    data.species.forEach((specie) => {
      animalCounter[specie.name] = specie.residents.length;
    });
    return animalCounter;
  } const animalObj = data.species.find((specie) => specie.name === species);
  return animalObj.residents.length;
}

const calculateTotalPrice = (object) => {
  let adultsPrice = 0;
  let childrenPrice = 0;
  let seniorsPrice = 0;
  if (object.Adult !== undefined) {
    adultsPrice = object.Adult * data.prices.Adult;
  }
  if (object.Child !== undefined) {
    childrenPrice = object.Child * data.prices.Child;
  }
  if (object.Senior !== undefined) {
    seniorsPrice = object.Senior * data.prices.Senior;
  }
  return adultsPrice + childrenPrice + seniorsPrice;
};

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return calculateTotalPrice(entrants);
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
