const data = require('./data');

const { species, employees, prices } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  const newSpecieis = ids.map((id) => species.find((specie) => specie.id === id));
  return newSpecieis;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(speciesParam) {
  // seu código aqui
  if (!speciesParam) {
    return species.reduce((accumulator, { name, residents }) => {
      accumulator[name] = residents.length;
      return accumulator;
    }, {});
  }
  return species.find((specie) => specie.name === speciesParam).residents.length;
}

const multiplyPrices = (price, entrants) => {
 let newPrice = price * entrants;
};

function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult = 0, Child = 0, Senior = 0} = entrants;
  if (Object.keys(entrants).length === 0) return 0;

  return ((Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior));

}
// console.log();
function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

const doPercentage = (price, percentage) => {
  return price + (price * percentage / 100)
}
function increasePrices(percentage) {
  // seu código aqui
  data.prices =  Object.values(data.prices).forEach(doPercentage);
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
