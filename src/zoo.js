// Dica recebida na sala de estudo
const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  if (typeof ids === 'undefined') {
    return [];
  }
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((specie) => specie.age > age);
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return employees.find(({ firstName, lastName }) =>
    (firstName === employeeName || lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
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

function countAnimals(input) {
  const count = {};
  species.forEach(({ name, residents }) => {
    count[name] = residents.length;
  });
  if (typeof input === 'undefined') {
    return count;
  }
  return count[input];
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return ((Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child));
}

function gender(animal, sex) {
  if (animal.sex === sex || typeof sex === 'undefined') {
    return animal.name;
  }
}

function sortAnimals(sort, animalsList) {
  if (sort) animalsList.sort();
}

function getAnimalMap(options = {}) {
  const location = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((animal) => {
    if (options.includeNames) {
      const animalName = animal.name;
      const animalObject = {};
      const animalListedNames = [];
      animal.residents.forEach((element) => {
        const sex = gender(element, options.sex);
        if (typeof sex !== 'undefined') {
          animalListedNames.push(sex);
        }
      });
      sortAnimals(options.sorted, animalListedNames);
      animalObject[animalName] = animalListedNames;
      location[animal.location].push(animalObject);
    } else { location[animal.location].push(animal.name); }
  });
  return location;
}

function getSchedule(dayName) {
  const hour = Object.keys(hours);
  const days = hour.reduce((acc, cValue) => {
    acc[cValue] = `Open from ${hours[cValue].open}am until ${hours[cValue].close - 12}pm`;
    return acc;
  }, {});
  days.Monday = 'CLOSED';
  if (typeof dayName !== 'undefined') {
    return { [dayName]: days[dayName] };
  }
  return days;
}

function getOldestFromFirstSpecies(id) {
  const responsibleFor = employees.filter((employee) => employee.id === id)
    .map((employeeMap) => employeeMap.responsibleFor);
  const oldest = species.find((animal) => animal.id === responsibleFor[0][0])
    .residents.sort((animal1, animal2) => animal2.age - animal1.age)[0];
  return [oldest.name, oldest.sex, oldest.age];
}

function increasePrices(percentage) {
  // Resolvido com a ajuda de João Franca em thread aberta no Slack
  prices.Adult = (Math.round(prices.Adult * ((percentage / 100) + 1) * 100)) / 100;
  prices.Child = (Math.round(prices.Child * ((percentage / 100) + 1) * 100)) / 100;
  prices.Senior = (Math.round(prices.Senior * ((percentage / 100) + 1) * 100)) / 100;
}

function getEmployeeCoverage(idOrName) {

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
