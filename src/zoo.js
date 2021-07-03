const { species, employees, prices } = require('./data');
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
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  // Se fizer o console.log(curr), vai ver que a saída é: [ 'Adult', 2 ],[ 'Child', 3 ],[ 'Senior', 1 ]. Logo :
  return Object.entries(entrants).reduce((acc, [ageGroup, value]) =>
    acc + prices[ageGroup] * value, 0);
  // OBS: Se não inicializar com zero, coisas bizarras acontecem.
}
// const teste = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
// console.log(calculateEntry(teste));

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
