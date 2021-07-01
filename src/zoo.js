const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const compare = ids;
  const result = [];
  species.filter((curr, index) => {
    if (curr.id === compare[index]) {
      result.push(curr);
    }
    return 0;
  });
  return result;
}

function getAnimalsOlderThan(animal, minAge) {
  let result = true;
  species.forEach((element) => {
    if (element.name === animal) {
      element.residents.forEach((obj) => {
        if (obj.age >= minAge) {
          result = true;
        } else {
          result = false;
          return result;
        }
      });
    }
  });
  return result;
}

function getEmployeeByName(employeeName) {
  let result = {};
  employees.forEach((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      result = employee;
    }
  });
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployees = { ...personalInfo, ...associatedWith };
  return newEmployees;
}

function isManager(id) {
  let result = false;
  employees.forEach((employee) => {
    if (employee.managers.some((managerId) => managerId === id)) {
      result = true;
    }
  });
  return result;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animals) {
  if (animals) return species.find(({ name }) => name === animals).residents.length;

  const animal = {};
  species.forEach(({ name, residents }) => { animal[name] = residents.length; });
  return animal;
}

function calculateEntry(entrants) {
  // seu código aqui
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
