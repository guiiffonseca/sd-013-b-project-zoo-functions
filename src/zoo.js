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

function byLocation(name) {
  return name;
}

function filtredBySex(residents, sex) {
  let filtredResidents = residents;
  filtredResidents = filtredResidents.filter((resident) => resident.sex === sex);
  return filtredResidents;
}

function filtredBySort(residents) {
  let filtredResidents = residents;
  filtredResidents = filtredResidents.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return filtredResidents;
}

function byName(name, residents, sex = false, sort = false) {
  let filtredResidents = residents;
  if (sex) {
    filtredResidents = filtredBySex(filtredResidents, sex);
  }
  if (sort) {
    filtredResidents = filtredBySort(filtredResidents);
  }
  return { [name]: filtredResidents.reduce((acc, resident) => {
    acc.push(resident.name);
    return acc;
  }, []) };
}

function categorized(callback, sex, sort) {
  return species.reduce((acc, specie) => {
    const { name, location, residents } = specie;
    if (Object.keys(acc).includes(location)) {
      acc[location].push(callback(name, residents, sex, sort));
    } else {
      acc[location] = [callback(name, residents, sex, sort)];
    }
    return acc;
  }, {});
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return categorized(byLocation);
  }
  const { sex, sorted } = options;
  return categorized(byName, sex, sorted);
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
