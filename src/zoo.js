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
  // species.find((specie) => specie.id === employees.find((employee) => employee.id === id ).responsibleFor[0])
  // employees.find((employee) => employee.id === id ).responsibleFor[0] -> Esta linha de código retorna exatamente o id da espécie do primeiro animal sob cuidados do funcionário cujo id foi passado por parâmetro
  const firstAnimalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  let result = {};
  species.find((specie) => specie.id === firstAnimalId).residents.reduce((acc, animals) => {
    if (animals.age > acc.age) {
      result = animals;
    }
    return result;
  }, { age: 0 });
  return Object.values(result);
}

function increasePrices(percentage) {
  const increase = 100 + percentage;
  prices.Adult = Math.ceil(prices.Adult * (increase)) / 100;
  prices.Child = Math.ceil(prices.Child * (increase)) / 100;
  prices.Senior = Math.ceil(prices.Senior * (increase)) / 100;
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
