const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((animal) => animal.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
    .find((person) => person.firstName === employeeName || person.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((person) => person.managers.includes(id));
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmp = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEmp);
}

function countAnimals(especies) {
  const quantity = {};
  species.forEach(({ name, residents }) => { quantity[name] = residents.length; });
  if (!especies) return quantity;
  return quantity[especies];
}

function calculateEntry(entrants) {
  const adPrice = prices.Adult;
  const senPrice = prices.Senior;
  const chiPrice = prices.Child;

  if (!entrants || Object.entries(entrants).length === 0) return 0;
  {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return Adult * adPrice + Child * chiPrice + Senior * senPrice;
  }
}

const getNamesLoc = (info) => species.filter((animal) => animal.location === info)
  .map((obj) => obj.name);

const getAnimalName = (info) => species
  .reduce((acc, { name, location, residents }) => {
    if (location === info) { acc.push({ [name]: residents
      .map((animal) => animal.name) }) };
    return acc;
  }, []);

const sortedNames = (info) => species
  .reduce((acc, { name, location, residents }) => {
    if (location === info) { acc.push({ [name]: residents
      .map((animal) => animal.name).sort() }) };
    return acc;
  }, []);

const femaleNames = (info) => species
  .reduce((acc, { name, location, residents }) => {
    if (location === info) { acc.push({ [name]: residents
      .filter(({ sex }) => sex === 'female')
      .map((animal) => animal.name) }) };
    return acc;
  }, []);


const femaleSort = (info) => species
  .reduce((acc, { name, location, residents }) => {
    if (location === info) { acc.push({ [name]: residents
      .filter(({ sex }) => sex === 'female')
      .map((animal) => animal.name).sort() }) };
    return acc;
  }, []);


function getAnimalMap(options) {
  const location = ['NE', 'NW', 'SW', 'SE'];
  return location.reduce((acc, curr) => {
    if (!options) { acc[curr] = getNamesLoc(curr);
      return acc };
    {
      const { includeNames, sorted, sex } = options;
      if (includeNames === true && !sorted && !sex) { acc[curr] = getAnimalName(curr);
        return acc };
      if (includeNames === true && sorted === true && !sex) { acc[curr] = sortedNames(curr);
        return acc };
      if (includeNames === true && sex === 'female' && !sorted) { acc[curr] = femaleNames(curr);
        return acc };
      if (includeNames === true && sorted === true && sex === 'female') { 
        acc[curr] = femaleSort(curr); return acc; }
      acc[curr] = getNamesLoc(curr);
      return acc;
    };
  }, {});
};

function getSchedule(dayName) {
  const schedule = Object.entries(hours).reduce((acc, [day, hour]) => {
    if (day === 'Monday') {
      acc[day] = 'CLOSED';
      return acc;
    }
    acc[day] = `Open from ${hour.open}am until ${hour.close - 12}pm`;
    return acc;
  }, {});
  if (!dayName) return schedule;
  return { [dayName]: schedule[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const getResp = employees.find((person) => person.id === id).responsibleFor[0];
  const animals = species.find((specie) => specie.id === getResp);
  const ordened = animals.residents.sort((an1, an2) => an2.age - an1.age);
  return Object.values(ordened[0]);
}

function increasePrices(percentage) {
  prices.Adult = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  prices.Child = Math.ceil(prices.Child * (100 + percentage)) / 100;
  prices.Senior = Math.ceil(prices.Senior * (100 + percentage)) / 100;
}

const getName = (...idAnimal) => idAnimal.map((id) => species
  .find((specie) => specie.id === id).name);

function getEmployeeCoverage(idOrName) {
  if (!idOrName) {
    return employees.reduce((acc, { firstName, lastName, responsibleFor }) => {
      acc[`${firstName} ${lastName}`] = getName(...responsibleFor);
      return acc;
    }, {});
  }
  {
    const found = employees.find(({ firstName, lastName, id }) =>
      firstName === idOrName || lastName === idOrName || id === idOrName);
    return {
      [`${found.firstName} ${found.lastName}`]: getName(...found.responsibleFor),
    };
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
