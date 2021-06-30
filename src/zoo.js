const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const { species } = data;
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { species } = data;
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const { employees } = data;
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName)
    || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const { employees } = data;
  return !!employees.find(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const { employees } = data;
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  // seu código aqui
  const { species: allSpecies } = data;
  return species
    ? allSpecies.find(({ name }) => name === species).residents.length
    : allSpecies.reduce((speciesCounter, { name, residents }) =>
      ({ ...speciesCounter, [name]: residents.length }),
    {});
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  // seu código aqui
  const { prices } = data;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

const sortResidents = ({ residents, sorted, sex }) => {
  if (sorted) {
    return residents
      .filter(({ sex: resSex }) => sex === '' || resSex === sex)
      .map(({ name }) => name).sort();
  }
  return residents
    .filter(({ sex: resSex }) => sex === '' || resSex === sex)
    .map(({ name }) => name);
};

function getAnimalMap({ includeNames = false, sorted = false, sex = '' } = {}) {
  // seu código aqui
  const { species } = data;
  return species.reduce((animalMap, { name, location, residents }) => {
    const animalMapAux = animalMap;
    if (!animalMapAux[location]) { animalMapAux[location] = []; }
    if (includeNames) {
      animalMapAux[location].push({
        [name]: sortResidents({ residents, sorted, sex }),
      });
    } else {
      animalMapAux[location].push(name);
    }
    return animalMapAux;
  }, {});
}

const formatDay = ({ open, close }) => {
  if (open === close) {
    return 'CLOSED';
  }
  return `Open from ${open}am until ${close - 12}pm`;
};

function getSchedule(dayName) {
  // seu código aqui
  const { hours } = data;
  return dayName
    ? { [dayName]: formatDay(hours[dayName]) }
    : Object.keys(hours).reduce((schedule, day) => ({
      ...schedule,
      [day]: formatDay(hours[day]),
    }), {});
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const { species, employees } = data;
  const firstSpecies = employees
    .find(({ id: emId }) => emId === id)
    .responsibleFor[0];
  const oldestFirst = species
    .find(({ id }) => id === firstSpecies).residents
    .reduce((oldest, resident) => resident.age > oldest.age ? resident : oldest);
  return Object.values(oldestFirst);
}

function increasePrices(percentage) {
  // seu código aqui
  const { prices } = data;
  prices.Adult = Math.ceil(prices.Adult * (100 + percentage))/100;
  prices.Child = Math.ceil(prices.Child * (100 + percentage))/100;
  prices.Senior = Math.ceil(prices.Senior * (100 + percentage))/100;
}

const getSpeciesNamesInOrder = (...ids) => {
  const { species } = data;
  return ids.map((id) => species.find((specie) => specie.id === id).name);
};

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const { employees } = data;
  return employees
    .filter(({id, firstName, lastName }) => !idOrName || idOrName === id || idOrName === firstName || idOrName === lastName)
    .reduce((coverage, { firstName, lastName, responsibleFor }) => ({
    ...coverage,
    [`${firstName} ${lastName}`]: getSpeciesNamesInOrder(...responsibleFor),
    }), {});
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
