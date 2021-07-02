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
  if (args === undefined || args === {}) {
    return 0;
  }
  return Object.entries(args).reduce((accumulator, currentValue, index) =>
    accumulator + currentValue[1] * data.prices[currentValue[0]], 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

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
      { [currentValue[0]]: Math.round((currentValue[1] + currentValue[1] * (percentage / 100))
        * 100) / 100 }), {});
  return Object.assign(data.prices, newPrices);
}

const getAnimalIdWithResponsibleFor = () => {
  // const responsable = employees.map((employee) => employee.responsibleFor);
  // const hadouken = species.filter((specie, index) => specie.id[index] === responsable);
  // console.log(hadouken);
};
getAnimalIdWithResponsibleFor();
function getEmployeeCoverage(idOrName) {
  if (idOrName) {
    const getEmployee = employees.find((employee) =>
      employee.id === idOrName || employee.firstName === idOrName
      || employee.lastName === idOrName);
    return { [`${getEmployee.firstName} ${getEmployee.lastName}`]: getEmployee.responsibleFor };
  }
  return employees.reduce((acc, value) =>
    Object.assign(acc, { [`${value.firstName} ${value.lastName}`]: value.responsibleFor }), {});
}
// console.log(getEmployeeCoverage());
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
