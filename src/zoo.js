const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  let speciesArray = [];
  data.species.forEach((element) => {
    ids.forEach((id) => {
      if (element.id === id) {
        speciesArray = [...speciesArray, element];
      }
    });
  });

  return speciesArray;
}

function getAnimalsOlderThan(animal, age) {
  const especies = data.species.find((specie) => specie.name === animal);
  let todosVelhos = true;
  especies.residents.forEach((resident) => {
    if (resident.age < age) todosVelhos = false;
  });
  return todosVelhos;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...associatedWith,
    ...personalInfo,
  };
}

function isManager(id) {
  return data.employees.some((idManager) => idManager.managers.find((id2) => id2 === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id, firstName, lastName, managers, responsibleFor,
  });
}

function countAnimals(species) {
  if (species) return data.species.find(({ name }) => name === species).residents.length;
  const nDeAnimals = {};
  data.species.forEach(({ name, residents }) => {
    (nDeAnimals[name] = residents.length);
  });
  return nDeAnimals;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const preçoAdult = data.prices.Adult;
  const preçoChildP = data.prices.Child;
  const preçoSenior = data.prices.Senior;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const resultado = (preçoAdult * Adult) + (preçoChildP * Child) + (preçoSenior * Senior);

  return resultado;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const objeto = {};
  const { hours } = data;
  Object.keys(hours).forEach((day) => {
    if (hours[day].close - hours[day].open === 0) {
      objeto[day] = 'CLOSED';
      return;
    }
    objeto[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  });

  if (!dayName) {
    return objeto;
  }

  const total = {};
  total[dayName] = objeto[dayName];

  return total;
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
