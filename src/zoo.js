const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  let animalsAge = species.find((animals) => animals.name === animal).residents;
  animalsAge = animalsAge.every((ages) => ages.age > age);
  return animalsAge;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const nameEmployees = employees.find((employe) =>
    employe.firstName === employeeName || employe.lastName === employeeName);
  return nameEmployees;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  const managers = employees
    .map((employee) => employee.managers)
    .reduce((employee, actual) => employee + actual
      .some((codigoId) => codigoId === id), 0) > 0;
  return managers;
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  const lastEmployee = { id,
    firstName,
    lastName,
    managers,
    responsibleFor };
  employees.push(lastEmployee);
}

function countAnimals(speciesP) {
  return speciesP
    ? species.find(({ name }) => name === speciesP).residents.length
    : species.reduce((counterSpe, { name, residents }) =>
      ({ ...counterSpe, [name]: residents.length }),
    {});
}

function calculateEntry({ Adult = 0, Senior = 0, Child = 0 } = {}) {
  const result = (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
  return result;
}

const OrdenandoMoradores = ({ residents, sorted, sex }) => {
  if (sorted) {
    return residents
      .filter(({ sex: moradoreGeneros }) => sex === '' || moradoreGeneros === sex)
      .map(({ name }) => name).sort();
  }
  return residents
    .filter(({ sex: moradoreGeneros }) => sex === '' || moradoreGeneros === sex)
    .map(({ name }) => name);
};

function getAnimalMap({ includeNames = false, sorted = false, sex = '' } = {}) {
  return species.reduce((mapeandoAnimais, { name, location, residents }) => {
    const mapeandoAnimaisAux = mapeandoAnimais;
    if (!mapeandoAnimaisAux[location]) { mapeandoAnimaisAux[location] = []; }
    if (includeNames) {
      mapeandoAnimaisAux[location].push({
        [name]: OrdenandoMoradores({ residents, sorted, sex }),
      });
    } else {
      mapeandoAnimaisAux[location].push(name);
    }
    return mapeandoAnimaisAux;
  }, {});
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  prices.Adult = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  prices.Child = Math.ceil(prices.Child * (100 + percentage)) / 100;
  prices.Senior = Math.ceil(prices.Senior * (100 + percentage)) / 100;
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
