const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const arr = [];

  ids.forEach((each) => {
    const specie = data.species.filter((x) => x.id === each);
    arr.push(specie[0]);
  });
  return arr;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const index = data.species.findIndex((x) => x.name === animal);
  for (let i = 0; i < data.species[index].residents.length; i += 1) {
    if (data.species[index].residents[i].age <= age) return false;
  }
  return true;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  // prettier-ignore
  const index = data.employees.findIndex(
    (x) => x.firstName === employeeName || x.lastName === employeeName,
  );
  return index === -1 ? {} : data.employees[index];
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmp = {};
  Object.assign(newEmp, personalInfo, associatedWith);
  return newEmp;
}

function isManager(id) {
  // seu código aqui
  const arr = [];
  for (let i = 0; i < data.employees.length; i += 1) {
    for (let j = 0; j < data.employees[i].managers.length; j += 1) {
      arr.push(data.employees[i].managers[j]);
    }
  }
  const set = new Set(arr);
  const index = [...set].findIndex((x) => x === id);
  return index !== -1;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
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
