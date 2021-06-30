const { employees, hours, prices, species } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
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
  return !!employees.find(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specie) {
  // seu código aqui
  return specie
    ? species.find(({ name }) => name === specie).residents.length
    : species.reduce((speciesCounter, { name, residents }) =>
      ({ ...speciesCounter, [name]: residents.length }),
    {});
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  // seu código aqui
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
  return dayName
    ? { [dayName]: formatDay(hours[dayName]) }
    : Object.keys(hours).reduce((schedule, day) => ({
      ...schedule,
      [day]: formatDay(hours[day]),
    }), {});
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpecies = employees
    .find(({ id: emId }) => emId === id)
    .responsibleFor[0];
  const oldestFirst = species
    .find(({ id: spcId }) => spcId === firstSpecies).residents
    .reduce((oldest, resident) => {
      if (resident.age > oldest.age) {
        return resident;
      }
      return oldest;
    });
  return Object.values(oldestFirst);
}

function increasePrices(percentage) {
  // seu código aqui
  prices.Adult = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  prices.Child = Math.ceil(prices.Child * (100 + percentage)) / 100;
  prices.Senior = Math.ceil(prices.Senior * (100 + percentage)) / 100;
}

const getSpeciesNamesInOrder = (...ids) => ids.map((id) =>
  species.find((specie) => specie.id === id).name);

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  return employees
    .filter(({ id, firstName, lastName }) =>
      !idOrName
      || idOrName === id
      || idOrName === firstName
      || idOrName === lastName)

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
