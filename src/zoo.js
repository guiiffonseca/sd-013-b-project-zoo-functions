const { species, employees, data, prices, hours } = require('./data');
// const data = require('./data');

function getSpeciesByIds(...ids) {
  const newArray = [];
  ids.forEach((id) => {
    const speciesFilter = species.filter((specie) => specie.id === id);
    newArray.push(...speciesFilter);
  });
  return newArray;
}

function getAnimalsOlderThan(animal, age) {
  const speciesFind = species.find((especie) => especie.name === animal);
  const residentsForEach = speciesFind.residents.every((resident) => {
    if (resident.age > age) {
      return true;
    }
    return false;
  });
  return residentsForEach;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return ({ ...personalInfo, ...associatedWith });
}

function isManager(id) {
  return employees.some((employee, index) => id === employee.managers[index]);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(animals) {
  if (!animals) {
    const newSpecies = {};
    species.forEach(({ name, residents }) => { newSpecies[name] = residents.length; });
    return newSpecies;
  }
  return (species.find((specie) => animals === specie.name)).residents.length;
}

function calculateEntry({ Adult = 0, Senior = 0, Child = 0 } = 0) {
  const priceAdult = prices.Adult * Adult;
  const priceSenior = prices.Senior * Senior;
  const priceChild = prices.Child * Child;
  return priceAdult + priceSenior + priceChild;
}

function getAnimalMap(options) {
  // seu código aqui
}

const getScheduleNoDay = () => {
  const newObject = {};
  Object.entries(hours).forEach((hour) => {
    // if (!dayName) {
    if (hour[1].close === hour[1].open) {
      newObject[hour[0]] = 'CLOSED';
    } else {
      newObject[hour[0]] = `Open from ${hour[1].open}am until ${hour[1].close - 12}pm`;
    }
  });
  return newObject;
};

function getSchedule(dayName) {
  const newObject = {};
  if (!dayName) {
    return getScheduleNoDay();
  }
  const day = Object.entries(hours).find((weekDay) => weekDay[0] === dayName);
  if (day[1].close === day[1].open) {
    newObject[day[0]] = 'CLOSED';
  } else {
    newObject[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
  }
  return newObject;
}

console.log(getSchedule('Friday'));

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((employee) => employee.id === id);
  const findEspecie = (species.find((specie) =>
    findEmployee.responsibleFor[0] === specie.id)).residents.sort((value1, value2) =>
    value2.age - value1.age)[0];
  return Object.values(findEspecie);
}

function increasePrices(percentage) {
  // prices.Adult = Math.ceil(100 * (prices.Adult + ((percentage / 100) * prices.Adult))) / 100;
  // prices.Senior = Math.ceil(100 * (prices.Senior + ((percentage / 100) * prices.Senior))) / 100;
  // prices.Child = Math.ceil(100 * (prices.Child + ((percentage / 100) * prices.Child))) / 100;
  Object.entries(prices).forEach((item) => {
    prices[item[0]] = Math.ceil(100 * (item[1] + ((percentage / 100) * item[1]))) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  const newEmployee = {};
  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    if (!idOrName) {
      newEmployee[`${firstName} ${lastName}`] = responsibleFor;
    }
  });
  return newEmployee;
}

// console.log(getEmployeeCoverage());

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
