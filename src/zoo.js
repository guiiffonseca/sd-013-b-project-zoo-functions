const { employees } = require('./data');
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
  const resul = employees.some((element) => element.managers.find((element1) => element1 === id));
  return resul;
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

function CalcEntry(entrada) {
  let nnAdult = 0;
  let nnChild = 0;
  let nnSenior = 0;
  if (entrada.Adult > 0) {
    nnAdult = data.prices.Adult * entrada.Adult;
  }
  if (entrada.Child > 0) {
    nnChild = data.prices.Child * entrada.Child;
  }
  if (entrada.Senior > 0) {
    nnSenior = data.prices.Senior * entrada.Senior;
  }
  return (nnAdult + nnChild + nnSenior);
}

function calculateEntry(entrants) {
  if ((entrants === undefined) || (Object.keys(entrants).length === 0)) {
    return 0;
  }
  return CalcEntry(entrants);
}

function getAnimalMap(options) {
  //
}


function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const specieId = data.employees.find((employee) =>  employee.id === id).responsibleFor[0];
  const relSpecie = data.species.find((specie) => specieId === specie.id).residents
  .reduce((velho, resident) => {
    if (velho.age < resident.age) {
      return resident;
    }
  return velho;
  });
return Object.values(relSpecie);
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
