const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return data.species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const getAnimals = data.species.find((specie) => specie.name === animal);
  return getAnimals.residents.every((animalAge) => animalAge.age >= age);
}

function getEmployeeByName(employeeName) {
  const emp = data.employees;
  if (employeeName === undefined) {
    return {};
  }
  return emp.find((em) => (em.firstName === employeeName || em.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const employee = {
    id,
    firstName,
    lastName,
    managers: managers === undefined ? [] : managers,
    responsibleFor: responsibleFor === undefined ? [] : responsibleFor,
  };
  data.employees.push(employee);
}

function countAnimals(species) {
  const animalsList = {};
  data.species.forEach((specie) => {
    animalsList[specie.name] = specie.residents.length;
    return undefined;
  });
  if (species === undefined) {
    return animalsList;
  }
  return animalsList[species];
}

function calculateEntry(entrants) {
  const costs = data.prices;
  if (typeof (entrants) === 'undefined') {
    return 0;
  }

  if (typeof (entrants) === 'object') {
    if (Object.keys(entrants).length < 1) {
      return 0;
    }
    return Object.keys(entrants).reduce((sum, age) => (costs[age] * entrants[age]) + sum, 0);
  }
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const { hours } = data;
  const ans = Object.keys(hours).reduce((acc, act) => {
    const check = (typeof (dayName) === 'undefined') ? act : dayName;
    const stockMsg = `Open from ${hours[check].open}am until ${hours[check].close - 12}pm`;
    acc[check] = stockMsg;
    return acc;
  }, {});
  if (Object.keys(ans).includes('Monday')) {
    ans.Monday = 'CLOSED';
  }
  return ans;
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
