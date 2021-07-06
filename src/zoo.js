// const { removeListener } = require('process');
const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.find((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const verifyAgeAnimal = species.find((specie) =>
    specie.name === animal)
    .residents.every((resident) =>
      resident.age >= age);
  return verifyAgeAnimal;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employeedName = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return employeedName;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const thatIsTheManager = employees.find((employee) => employee.id)
    .managers.some((manager) => manager.includes(id));
  return thatIsTheManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function countAnimals(args) {
  // if criado com ajuda de Ygor Lage e Allan Oliveira;
  if (args) {
    const animalsWithArgs = species.find((specie) => specie.name === args).residents.length;
    return animalsWithArgs;
  }
  const animalsWhitoudArgs = species.reduce((accumulator, currentValue) =>
    Object.assign(accumulator, { [currentValue.name]: currentValue.residents.length }), {});
  return animalsWhitoudArgs;
}

function calculateEntry(args) {
  // ! negação geral, impede que seja qualquer coisa que não seja um
  // valor válido.
  if (args === undefined || args === {}) {
    return 0;
  }
  return Object.entries(args).reduce((accumulator, currentValue, index) =>
    accumulator + currentValue[1] * data.prices[currentValue[0]], 0);
}

const filterAnimalLocation = (arg) => species.filter((specie) =>
  specie.location === arg).reduce((acc, value) =>
  acc.concat(value.name), []);

const animalsName = (arg) =>
  species.filter((specie) =>
    specie.location === arg).map((specie) =>
    ({ [specie.name]: specie.residents.map((resident) => resident.name) }));

const animalsSeparatedByNamesAndSex = (arg, sex) =>
  species.filter((specie) =>
    specie.location === arg).map((specie) => {
    const residentNames = specie.residents.filter((resident) => resident.sex === sex);
    return ({ [specie.name]: residentNames.map((residentName) => residentName.name) });
  });

const includeTrueMap = species.reduce((acc, value) =>
  Object.assign(acc, { [value.location]: animalsName(value.location) }), {});

const animalsNameSorted = (arg) => species.filter((specie) =>
  specie.location === arg).map((specie) =>
  ({ [specie.name]: specie.residents.map((resident) => resident.name).sort() }));

const sortedAnimalsMap = species.reduce((acc, value) =>
  Object.assign(acc, { [value.location]: animalsNameSorted(value.location) }), {});

const animalsLocationWithoutArgs = species.reduce((acc, value) =>
  Object.assign(acc, { [value.location]: filterAnimalLocation(value.location) }), {});

function getAnimalMap({ includeNames = false, sex, sorted = false } = {}) {
  if (includeNames && sorted) {
    return sortedAnimalsMap;
  }
  if (sex) {
    return species.reduce((acc, value) =>
      Object.assign(acc, { [value.location]: animalsSeparatedByNamesAndSex(value.location, sex) }),
    {});
  }
  if (includeNames) {
    return includeTrueMap;
  }
  return animalsLocationWithoutArgs;
}
console.dir(getAnimalMap({ sex: 'male' }), { depth: null });
const { hours } = data;
const suportGetSchedule = (dayName) =>
  Object.entries(hours).find((day, index) =>
    day[0] === dayName).reduce((count, _, index, array) => {
    if (array[0] === 'Monday') {
      return Object.assign(count, { [array[0]]: 'CLOSED' });
    }
    return Object.assign(count,
      { [array[0]]: `Open from ${array[1].open}am until ${array[1].close - 12}pm` });
  }, {});

function getSchedule(dayName) {
  if (dayName) {
    return suportGetSchedule(dayName);
  }
  return Object.entries(hours).reduce((count, actual, index) => {
    if (actual[0] === 'Monday') {
      return Object.assign(count, { [actual[0]]: 'CLOSED' });
    }
    return Object.assign(count,
      { [actual[0]]: `Open from ${actual[1].open}am until ${actual[1].close - 12}pm` });
  }, {});
}

function getOldestFromFirstSpecies(id) {
  const responsable = employees.find((employee) => employee.id === id)
    .responsibleFor.find((responsible) => responsible[0]);
  const oldestAnimalIntoSpecie = species.find((specie) => specie.id === responsable)
    .residents.sort((residenteAgeA, residentAgeB) => residentAgeB.age - residenteAgeA.age)
    .find((resident) => resident.name[0]);
  return [oldestAnimalIntoSpecie.name, oldestAnimalIntoSpecie.sex, oldestAnimalIntoSpecie.age];
}

function increasePrices(percentage) {
  const newPrices = Object.entries(data.prices).reduce((accumulator, currentValue, index) =>
    Object.assign(accumulator,
      // conta para arredondamento do valor com ajuda de Lucas Caribé;
      { [currentValue[0]]: Math.round((currentValue[1] + currentValue[1] * (percentage / 100))
        * 100) / 100 }), {});
  return Object.assign(data.prices, newPrices);
}

const responsable = employees.map((employee) => {
  const findNameAnimals = employee.responsibleFor.map((resp) => {
    const animals = species.find((specie) => specie.id === resp);
    return animals.name;
  });
  return findNameAnimals;
});

const getEmployeeWithDatas = (idOrName) => {
  const getEmployee = employees.find((employee) =>
    employee.id === idOrName || employee.firstName === idOrName
    || employee.lastName === idOrName);
  const getAnimalsName = getEmployee.responsibleFor.map((resp) => {
    const animals = species.find((specie) => specie.id === resp);
    return animals.name;
  });
  return getAnimalsName;
};

function getEmployeeCoverage(idOrName) {
  if (idOrName) {
    const getEmployee = employees.find((employee) =>
      employee.id === idOrName || employee.firstName === idOrName
      || employee.lastName === idOrName);
    return { [`${getEmployee.firstName} ${getEmployee.lastName}`]: getEmployeeWithDatas(idOrName) };
  }
  return employees.reduce((acc, value, index) =>
    Object.assign(acc, { [`${value.firstName} ${value.lastName}`]: responsable[index] }), {});
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
