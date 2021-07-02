const data = require('./data');
const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  // PODERIA TER SIDO FEITO COM O MAP
  const array = [];
  ids.forEach((id) => array.push(species.find((specie) => specie.id === id)));
  return array;
}

function getAnimalsOlderThan(animal, idade) {
  // seu código aqui
  const bicho = species.find((specie) => specie.name === animal);
  return bicho.residents.every((resident) => resident.age > idade);
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    // eslint-disable-next-line max-len
    return employees.find(
      (employee) => employee.firstName === employeeName || employee.lastName === employeeName,
    );
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animals) {
  // seu código aqui
  const anCoun = species.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.residents.length;
    return accumulator;
  }, {});
  if (animals) {
    const animal = species.find((specie) => specie.name === animals);
    return animal.residents.length;
  }
  return anCoun;
}

function calculateEntry(entrants = {}) {
  // seu código aqui
  if (entrants === {}) return 0;
  return Object.entries(entrants)
    .reduce((accumulator, [key, value]) => accumulator + prices[key] * value, 0);
}

// const animals = {
//   NE: [],
//   NW: [],
//   SE: [],
//   SW: [],
// };
// const locations = Object.keys(animals);

// const searchIncludeName = () => {

// };

// const option1 = { includeNames: true };

// function getAnimalMap(options) {
//   // seu código aqui
//   const map = locations
//     .reduce((acc, currVal) => {
//       acc[currVal] = species
//         .filter((specie) => specie.location === currVal)
//         .map((animal) => animal.name);
//       return acc;
//     }, {});
//   if (options === option1) {
//     return searchIncludeName();
//   }
//   return map;
// }

function getSchedule(dayName) {
  // seu código aqui
}

function findOlder(animals) {
  let oldest = { name: '', sex: '', age: 0 };

  animals.forEach((animal) => {
    if (animal.age > oldest.age) {
      oldest = animal;
    }
  });
  return oldest;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const emp = employees.find((employee) => employee.id === id);
  const firstAnimal = species.find((specie) => specie.id === emp.responsibleFor[0]).residents;
  return Object.values(findOlder(firstAnimal));
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
  // getAnimalMap,
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
