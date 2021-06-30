const data = require('./data');

const { species, employees } = data;

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) =>
    specie.name === animal).residents.every((resident) =>
    resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((employee) =>
    employee.firstName === employeeName
    || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAllAnimals() {
  const counter = {};
  species.forEach((specie) => {
    counter[specie.name] = specie.residents.length;
  });
  return counter;
}

function countAnimals(animalSpecies) {
  if (!animalSpecies) {
    return countAllAnimals();
  }
  return species.find((specie) =>
    (specie.name === animalSpecies)).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || !Object.keys(entrants).length) {
    return 0;
  }
  let { Adult = 0, Child = 0, Senior = 0 } = entrants;
  Adult *= data.prices.Adult;
  Child *= data.prices.Child;
  Senior *= data.prices.Senior;

  return Adult + Child + Senior;
}

function byLocation(name, _) {
  return name;
}

function byName(name, residents) {
  return { [name]: residents.reduce((acc, resident) => {
    acc.push(resident.name);
    return acc;
  }, []) };
}

function categorized(callback) {
  return data.species.reduce((acc, specie) => {
    const { name, location, residents } = specie;
    if (Object.keys(acc).includes(location)) {
      acc[location].push(callback(name, residents));
    } else {
      acc[location] = [callback(name, residents)];
    }
    return acc;
  }, {});
}

function filterAndSorted(sex, sorted) {
  const categorizedByName = categorized(byName);
  // if (sex) {

  // }
  // if (sorted) {

  // }
  return categorizedByName;
}

// { includeNames: true, sex: 'female', sorted: true }
function getAnimalMap(options) {
  if (!options) {
    return categorized(byLocation);
  }
  const { includeNames = false, sex = false, sorted = false } = options;
  if (!includeNames) {
    return categorized(byLocation);
  }
  if (includeNames) {
    filterAndSorted(sex, sorted);
  }
}
console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

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
