const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(id1, id2) {
  return species.filter((especie) => especie.id === id1 || especie.id === id2);
}

function getAnimalsOlderThan(animal, minimumAge) {
  return species.some((especie, index) => especie.name === animal
   && especie.residents[index - 1].age >= minimumAge);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(() => id === '9e7d4524-363c-416a-8759-8aa7e50c0992'
  || id === 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
  || id === '0e7b460e-acf4-4e17-bcb3-ee472265db83');
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(especies) {
  const animais = {};
  species.forEach((especie) => {
    animais[especie.name] = especie.residents.length;
  });
  if (!especies) {
    return animais;
  }
  return animais[especies];
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return prices.Adult * Adult + prices.Child * Child + prices.Senior * Senior;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const newObject = {};
  if (!dayName) {
    Object.entries(hours).forEach((day) => {
      newObject[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
      if (day[0] === 'Monday') {
        newObject[day[0]] = 'CLOSED';
      }
    });
    return newObject;
  }
  const hourDay = Object.entries(hours).find((day) => day[0] === dayName);
  newObject[hourDay[0]] = `Open from ${hourDay[1].open}am until ${hourDay[1].close - 12}pm`;
  if (hourDay[0] === 'Monday') {
    newObject[hourDay[0]] = 'CLOSED';
  }
  return newObject;
}

function getOldestFromFirstSpecies(idEmployee) {
  const selectedIdSpecie = employees.find((employee) =>
    employee.id === idEmployee).responsibleFor[0];
  const selectedSpecie = species.find((specie) =>
    selectedIdSpecie === specie.id).residents
    .reduce((oldAnimal, resident) => {
      if (oldAnimal.age < resident.age) {
        return resident;
      }
      return oldAnimal;
    });
  return Object.values(selectedSpecie);
}

function increasePrices(percentage) {
  // seu código aqui
}

function idByName(arrayId) {
  return arrayId.map((especie) => species.find((specie) => specie.id === especie).name);
}

function nameFirst(idOrName) {
  const employResp = {};
  const nome = employees.find((employee) => employee.firstName === idOrName);
  if (idOrName === nome.firstName) {
    Object.entries(nome).forEach(() => {
      employResp[`${nome.firstName} ${nome.lastName}`] = idByName(nome.responsibleFor);
    });
    return employResp;
  }
}

function nameLast(idOrName) {
  const employResp = {};
  const nomeId = employees.find((employee) => employee.lastName === idOrName);
  if (idOrName === nomeId.lastName) {
    Object.entries(nomeId).forEach(() => {
      employResp[`${nomeId.firstName} ${nomeId.lastName}`] = idByName(nomeId.responsibleFor);
    });
    return employResp;
  }
}

function employeeId(idOrName) {
  const employResp = {};
  const nomeId = employees.find((employee) => employee.id === idOrName);
  if (idOrName === nomeId.id) {
    Object.entries(nomeId).forEach(() => {
      employResp[`${nomeId.firstName} ${nomeId.lastName}`] = idByName(nomeId.responsibleFor);
    });
    return employResp;
  }
}

function getEmployeeCoverage(idOrName) {
  const employResp = {};
  if (!idOrName) {
    employees.forEach((employee) => {
      employResp[`${employee.firstName} ${employee.lastName}`] = idByName(employee.responsibleFor);
    });
    return employResp;
  }
  const nomeId = employees.find((employee) => employee.firstName === idOrName
  || employee.lastName === idOrName || employee.id === idOrName);
  if (idOrName === nomeId.firstName) {
    return nameFirst(idOrName);
  }
  if (idOrName === nomeId.lastName) {
    return nameLast(idOrName);
  }
  if (idOrName === nomeId.id) {
    return employeeId(idOrName);
  }
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
