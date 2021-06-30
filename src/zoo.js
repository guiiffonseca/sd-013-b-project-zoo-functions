const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, minAge) {
  const animalFound = data.species.find((specie) => specie.name === animal);
  return animalFound.residents.every((resident) => resident.age > minAge);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const managers = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83'];
  return managers.some((manager) => manager === id);
}

function addEmployee(...employeeDetails) {
// id, firstName, lastName, managers, responsibleFor
  const [idValue,
    firstNameValue,
    lastNameValue,
    managersValue = [],
    responsibleForValue = []] = employeeDetails;

  const newEmployee = { id: idValue,
    firstName: firstNameValue,
    lastName: lastNameValue,
    managers: managersValue,
    responsibleFor: responsibleForValue,
  };

  data.employees.push(newEmployee);
}

function countAnimals(species) {
  const result = {};
  if (species === undefined) {
    data.species.forEach((specie) => {
      result[specie.name] = specie.residents.length;
    });
    return result;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  let entryTotal = 0;
  Object.keys(entrants).forEach((personType) => {
    entryTotal += data.prices[personType] * entrants[personType];
  });

  return entryTotal;
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
