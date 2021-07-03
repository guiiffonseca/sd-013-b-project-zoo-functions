const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((currentId) => {
    const searchSpeciesByIds = species.find(({ id }) => id === currentId);
    result.push(searchSpeciesByIds);
  });

  return result;
}

function getAnimalsOlderThan(animal, old) {
  const oldAnimals = species.find(({ name }) => name === animal);
  return oldAnimals.residents.every(({ age }) => age >= old);
}

function getEmployeeByName(employeeName) {
  const employeeToSearch = employees.find(
    (currentEmployee) =>
      currentEmployee.firstName === employeeName
      || currentEmployee.lastName === employeeName,
  );

  return employeeToSearch || {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some(({ managers }) =>
    managers.some((manager) => manager === id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(speciess) {
  return speciess
    ? species.find(({ name }) => name === speciess).residents.length
    : species.reduce((totalBySpecie, { name, residents }) =>
      ({ ...totalBySpecie, [name]: residents.length }), {});
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
}

function filterBySex(aux, sexForFilter) {
  return aux.filter(({ sex }) => sex === sexForFilter);
}

function animalMap(animals, sex) {
  species.forEach(({ name, location, residents }) => {
    let aux = [...residents];
    if (sex) {
      aux = filterBySex(aux, sex);
    }
    animals[location].push({ [name]: aux.map((animal) => animal.name) });
  });
}

function sortAnimals(animals) {
  return Object.values(animals).forEach((animal) => {
    animal.forEach((element) => {
      Object.values(element).map((animalForSort) => animalForSort.sort());
    });
  });
}

function getAnimalMap({ includeNames, sorted, sex } = {}) {
  const map = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  if (!includeNames) {
    species.forEach(({ name, location }) => map[location].push(name));
    return map;
  }
  animalMap(map, sex);
  if (sorted) {
    sortAnimals(map);
  }
  return map;
}

function formatHour({ open, close }) {
  if (open === 0 && close === 0) {
    return ('CLOSED');
  }

  return `Open from ${open}am until ${close - 12}pm`;
}

function getSchedule(dayName) {
  const schedule = {};
  if (!dayName) {
    Object.keys(hours).forEach((day) => { schedule[day] = formatHour(hours[day]); });
    return schedule;
  }

  if (dayName === 'Monday') {
    schedule[dayName] = 'CLOSED';
    return schedule;
  }
  schedule[dayName] = formatHour(hours[dayName]);

  return schedule;
}

function oldestAnimal(animal) {
  const oldAnimal = animal.reduce((oldest, actual) => {
    if (actual.age > oldest.age) {
      return actual;
    }
    return oldest;
  });
  return oldAnimal;
}

function getOldestFromFirstSpecies(employeId) {
  const employeAnimalId = employees.find(({ id }) => id === employeId).responsibleFor[0];
  const animals = species.find(({ id: animalId }) => animalId === employeAnimalId).residents;
  return Object.values(oldestAnimal(animals));
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
