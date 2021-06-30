const data = require('./data');

const { species } = data;

const { employees } = data;

const { prices } = data;

const { hours } = data;

// seu código aqui
const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) return [];
  return species.filter((specie) => ids.includes(specie.id));
};

// seu código aqui
const getAnimalsOlderThan = (animal, age) =>
  species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);

// seu código aqui
const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return employees.find((employee) =>
    employeeName === employee.firstName || employeeName === employee.lastName);
};

// seu código aqui
const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

// seu código aqui
const isManager = (id) => employees.some((employee) => employee.managers.some((ids) => ids === id));

// seu código aqui
const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  employees.push({ id, firstName, lastName, managers, responsibleFor });

// seu código aqui
const countAnimals = (animalSpecie) => {
  if (!animalSpecie) {
    const allSpecies = {};
    species.forEach((specie) => {
      allSpecies[specie.name] = specie.residents.length;
    });
    return allSpecies;
  }
  const count = species.find((specie) => specie.name === animalSpecie).residents.length;
  return count;
};

// seu código aqui
const calculateEntry = (entrants) => {
  if (!entrants || entrants === {}) return 0;
  const { Adult: adult = 0, Child: child = 0, Senior: senior = 0 } = entrants;
  const total = ((adult * prices.Adult) + (child * prices.Child) + (senior * prices.Senior));
  return total;
};

// seu código aqui
const getAnimalMap = (options) => {
};

// seu código aqui
const getSchedule = (dayName) => {
  const days = Object.keys(hours);
  const week = days.reduce((accumulator, curr) => {
    accumulator[curr] = `Open from ${hours[curr].open}am until ${hours[curr].close - 12}pm`;
    return accumulator;
  }, {});
  week.Monday = 'CLOSED';
  if (days.includes(dayName) === true) {
    return { [dayName]: week[dayName] };
  }
  return week;
};

// seu código aqui
const getOldestFromFirstSpecies = (id) => {
  const employeeId = employees.filter((employee) => employee.id === id);
  const employeeLeader = employeeId[0].responsibleFor;
  const speciesId = (...responsibleFor) => species.filter((specie) =>
    responsibleFor.includes(specie.id));
  const specieId = speciesId(...employeeLeader).reduce((accumulator, curr) => {
    const { residents } = curr;
    accumulator.push(...residents);
    return accumulator;
  }, []).sort((value1, value2) => value2.age - value1.age);
  return Object.values(specieId[0]);
};

// seu código aqui
const increasePrices = (percentage) => {
  const number = 1 + (percentage / 100);
  const value = Object.keys(prices);
  value.forEach((key) => {
    const priceIncreased = prices[key] * number;
    const priceRounded = Math.round(priceIncreased * 100) / 100;
    prices[key] = priceRounded;
  });
};

// seu código aqui
const getEmployeeCoverage = (idOrName) => {
};

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
