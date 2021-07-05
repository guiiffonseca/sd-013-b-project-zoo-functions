const { species } = require('./data');
const data = require('./data');

const { employees } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  const arrayOfSpecies = [];
  ids.forEach((id, index, array) => {
    const specie = data.species.filter((tipo) => tipo.id === id);
    arrayOfSpecies.push(...specie);
  });
  return arrayOfSpecies;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const especies = data.species;
  const targetSpecie = especies.find((especie) => especie.name === animal);
  const { residents } = targetSpecie;
  return residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const employeeObj = employees.find(
    (employee) => employee.firstName === employeeName || employee.lastName === employeeName,
  );
  return employeeObj;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const destiny = { ...personalInfo, ...associatedWith };
  return destiny;
}

function isManager(id) {
  // seu código aqui
  const manager = employees.some((employee, index) => employee.managers[index] === id);
  console.log(id);
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(especie) {
  // seu código aqui
  const speciesObj = {};
  if (!especie) {
    species.forEach((specie) => {
      speciesObj[`${specie.name}`] = specie.residents.length;
    });
    return speciesObj;
  }
  const foundSpecies = species.find((specie, index, array) => specie.name === especie);
  const countSpecies = foundSpecies.residents.reduce(
    (accumulator, currentValue, index) => index + 1, 0,
  );
  return countSpecies;
}

function price(entrants) {
  let finalPrice = 0;
  const entrantsArray = Object.entries(entrants);
  entrantsArray.forEach((entrant) => {
    if (entrant[0] === 'Adult') {
      finalPrice += (entrant[1] * 49.99);
    } else if (entrant[0] === 'Child') {
      finalPrice += (entrant[1] * 20.99);
    } else if (entrant[0] === 'Senior') {
      finalPrice += (entrant[1] * 24.99);
    }
  });
  return finalPrice;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  return price(entrants);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  // const schedule = {};
  // const { hours } = data;
  // console.log(Object.keys(hours));
  // console.log(Object.values(hours));
  // if (!dayName) {
  //   return hours;
  // }
  // const openHours;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const funcionario = employees.find((employee) => employee.id === id);
  const animal = funcionario.responsibleFor[0];
  const caredAnimals = species.find((specie) => specie.id === animal);
  let oldestAge = -Infinity;
  let oldestObj = {};
  caredAnimals.residents.forEach((caredAnimal) => {
    if (caredAnimal.age > oldestAge) {
      oldestAge = caredAnimal.age;
      oldestObj = caredAnimal;
    }
  });
  return Object.values(oldestObj);
}

function increasePrices(percentage) {
  // seu código aqui
  const { prices } = data;
  prices.Adult = Math.round(100 * (prices.Adult * (1 + (percentage / 100)))) / 100;
  prices.Child = Math.round(100 * (prices.Child * (1 + (percentage / 100)))) / 100;
  prices.Senior = Math.round(100 * (prices.Senior * (1 + (percentage / 100)))) / 100;
  console.log(prices);
}

function findEmployee(idOrName) {
  // console.log(employees);
  const foundEmployees = employees.find(
    (employee) => employee.firstName === idOrName
    || employee.lastName === idOrName
    || employee.id === idOrName,
  );
  const arrayOfSpecies = [];
  foundEmployees.responsibleFor.forEach((id) => {
    const specie = data.species.find((tipo) => tipo.id === id);
    arrayOfSpecies.push(specie.name);
  });
  const fullName = `${foundEmployees.firstName} ${foundEmployees.lastName}`;
  return { fullName, arrayOfSpecies };
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  if (!idOrName) {
    const allEmployees = {};
    employees.forEach((employee) => {
      const fullName = `${employee.firstName} ${employee.lastName}`;
      const arrayOfSpecies = [];
      employee.responsibleFor.forEach((id) => {
        const foundSpecie = species.find((specie) => specie.id === id);
        arrayOfSpecies.push(foundSpecie.name);
      });
      allEmployees[fullName] = arrayOfSpecies;
    });
    return allEmployees;
  }
  const { fullName, arrayOfSpecies } = findEmployee(idOrName);
  return (
    { [fullName]: arrayOfSpecies });
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
