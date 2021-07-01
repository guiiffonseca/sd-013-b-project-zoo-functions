const { species, employees, prices } = require('./data');

const data = require('./data');
//  Rest the parameter if there is more than one, using a map and find the same id as the 'idd' of map. 
function getSpeciesByIds(...ids) {
  return ids.map((idd) => species.find((specie) => (specie.id === idd)));
}

const getAnimalsOlderThan = (animal, age) => species
//  fining the specie name, same as the parameter.
  .find((specie) => specie.name === animal).residents
//  comparing if all the residents have at least the age parameter.
  .every((resident) => resident.age > age);

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(
    (eName) => eName.firstName === employeeName || eName.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

const isManager = (id) => employees
  .some((employee) => employee.managers
    .some((idsEmp) => idsEmp === id));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(speciespar) {
  if (!speciespar) {
    return species.reduce((accumulator, { name, residents }) => {
      accumulator[name] = residents.length;
      return accumulator;
    }, {});
  }
  return species.find((specie) => specie.name === speciespar).residents.length;
}

const calculateAllPeople = (entrants) => (prices.Adult * entrants.Adult || 0)
+ (prices.Child * entrants.Child || 0)
+ (prices.Senior * entrants.Senior || 0);

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) return 0;
  return calculateAllPeople(entrants);
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
