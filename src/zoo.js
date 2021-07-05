const data = require('./data');

const { employees } = data;
const { burlId } = data;
const { stephanieId } = data;
const { olaId } = data;

function getSpeciesByIds(...ids) {
  const seletor = data.species.filter(({ id }) => ids.includes(id));
  return seletor;
}

function getAnimalsOlderThan(animal, age) {
  const animalsSearch = data.species.find(({ name }) => animal.includes(name));
  const ageSearch = animalsSearch.residents.every((element) => element.age >= age);
  return ageSearch;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const seletor = data.employees.find(
    (element) => element.firstName === employeeName || element.lastName === employeeName,
  );
  return seletor;
}

function createEmployee(personalInfo, associatedWith) {
  const newObj = { ...personalInfo, ...associatedWith };
  return newObj;
}

function isManager(id) {
  const seletor = data.employees.find((element) => element.id.includes(id));
  const test = function a() {
    if (seletor.firstName === 'Burl'
    || seletor.firstName === 'Stephanie' || seletor.firstName === 'Ola') {
      return true;
    }
    return false;
  };
  console.log(burlId);
  return test();
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  console.log(newEmployee);
  return data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    const allAnimals = data.species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
    return allAnimals;
  }
  const qual = data.species.find((element) => element.name === species);
  const quant = qual.residents.length;
  return quant;
}

function calculateEntry(entrants) {
  if (!entrants || {}) {
    return 0;
  }
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

// // const countAnimal = data.species.map(
// //   (element) => element.residents.length,
// // );
// // const result = {};
// // const resultado = findAnimal.forEach((key, i) => result[key] = countAnimal[i])
// console.log(findAnimal, countAnimal);