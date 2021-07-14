const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((element) => element.name === animal).residents
    .every((lions) => lions.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((name) =>
    (name.firstName === employeeName || name.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(speciesEach) {
  if (!speciesEach) {
    const speciesCount = { };
    species.forEach(({ name, residents }) => { speciesCount[name] = residents.length; });
    return speciesCount;
  }
  const findAnimal = species.find(({ name }) => name === speciesEach);
  return findAnimal.residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  return Object.entries(entrants).reduce((acc, [key, valor]) =>
    acc + prices[key] * valor, 0);
}

function getAnimalMap(options) {

}

function getSchedule(dayName) {
  const schedule = Object.entries(hours).reduce((acc, [day]) => {
    if (day === 'Monday') {
      acc[day] = 'CLOSED';
    } else {
      acc[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    } return acc;
  }, {});
  if (dayName in schedule) {
    return { [dayName]: schedule[dayName] };
  }
  return schedule;
}

function getOldestFromFirstSpecies(idOne) {
  const employeeOne = employees.find(({ id }) => id === idOne).responsibleFor[0];
  const animal = species.find((idAnimal) => idAnimal.id === employeeOne).residents;

  const oldestAnimal = animal.reduce((accAge, currtAge) =>
    ((accAge.age < currtAge.age) ? currtAge : accAge));

  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  Object.entries(prices).map(([string, price]) => {
    prices[string] = Math.round((price + (percentage / 100) * price) * 100) / 100;
    return prices;
  });
}

function getAssignedAnimals(animals) {
  return animals.map(
    (animalId) => species.find(({ id }) => id === animalId).name,
  );
}
function findByIdOrName({ id, firstName, lastName }, idOrName) {
  return id === idOrName || firstName === idOrName || lastName === idOrName;
}
function getEmployeeCoverage(idOrName) {
  const assignedAnimals = {};

  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    const key = `${firstName} ${lastName}`;
    assignedAnimals[key] = getAssignedAnimals(responsibleFor);
  });
  if (idOrName) {
    const { firstName, lastName } = employees
      .find((employee) => findByIdOrName(employee, idOrName));
    const key = `${firstName} ${lastName}`;
    return { [key]: assignedAnimals[key] };
  }
  return assignedAnimals;
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
