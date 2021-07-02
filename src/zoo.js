const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((specie) => ids.some((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((specie) => specie.name === animal)
    .residents.every((resid) => resid.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employees.reduce((acc, employe) => {
    if (employe.firstName === employeeName || employe.lastName === employeeName) {
      return employe;
    } return acc;
  }, {});
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employe) => employe.managers.find((manage) => manage === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push(createEmployee({ id, firstName, lastName }, { managers, responsibleFor }));
}

function countAnimals(specie) {
  // seu código aqui
  if (!specie) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, { });
  }
  return species.find((value) => value.name === specie).residents.length;
}

function calculateEntry(entrants = {}) {
  return Object.entries(entrants).reduce((acc, [key, value]) => acc + prices[key] * value, 0);
}

function getAnimalMap(options) {
  // seu código aqui
  // return species.reduce((acc, curr) => {
  //  acc = { [curr.location]: [curr.name] }
  //  return acc;
  // }, {});
}

const auxShedule = () => Object.entries(hours).reduce((acc, [key, { open, close }]) => {
  acc[key] = `Open from ${open}am until ${close - 12}pm`;
  if (key === 'Monday') acc[key] = 'CLOSED';
  return acc;
}, {});

function getSchedule(dayName) {
  // seu código aqui
  return Object.entries(hours).reduce((acc, [key, { open, close }]) => {
    if (key === dayName && dayName !== 'Monday') {
      acc[key] = `Open from ${open}am until ${close - 12}pm`;
    } else if (dayName === 'Monday') {
      acc[dayName] = 'CLOSED';
    } else if (!dayName) {
      return auxShedule();
    }
    return acc;
  }, {});
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpec = employees.find((employe) => employe.id === id).responsibleFor[0];
  const selectSpec = species.find((spec) => spec.id === firstSpec).residents
    .sort((a, b) => b.age - a.age)[0];
  return [selectSpec.name, selectSpec.sex, selectSpec.age];
}

function increasePrices(percentage) {
  // seu código aqui
  Object.assign(prices, Object.entries(prices).reduce((acc, [key, value]) => {
    acc[key] = parseFloat((value * (percentage / 100 + 1) + 0.001).toFixed(2));
    console.log(percentage);
    return acc;
  }, {}));
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  return employees.reduce((acc, curr) => {
    if (!idOrName) {
      acc[`${curr.firstName} ${curr.lastName}`] = curr.responsibleFor
        .map((resp) => species.find((spec) => spec.id === resp).name);
    }
    if (curr.id === idOrName || curr.firstName === idOrName || curr.lastName === idOrName) {
      acc[`${curr.firstName} ${curr.lastName}`] = curr.responsibleFor
        .map((resp) => species.find((spec) => spec.id === resp).name);
    }
    return acc;
  }, {});
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
