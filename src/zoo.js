const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length <= 0) return [];
  const animalsArray = [];

  ids.forEach((uniqueId) => {
    const targetSpecie = species.find(({ id }) => id === uniqueId);
    animalsArray.push(targetSpecie);
  });
  return animalsArray;
}

function getAnimalsOlderThan(animalGiven, ageGiven) {
  const { residents } = species.find(({ name }) => name === animalGiven);
  return residents.every((stats) => stats.age >= ageGiven);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const getEmployee = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return getEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const person = {};
  return Object.assign(person, personalInfo, associatedWith);
}

// Checa se o manager que foi chamado tem o id que foi passado
function checkIfManager(managersId, id) {
  return managersId.some((managerId) => managerId === id);
}

function isManager(idGiven) {
  return employees.some(({ managers }) => checkIfManager(managers, idGiven));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// function checkAnimal(animalsName, name) {
//   return animalsName.some((animalName) => animalName === name);
// }

function countAnimals(speciesGiven) {
  if (speciesGiven) {
    const animalNumbers = species.find((specie) => specie.name === speciesGiven).residents.length;
    return animalNumbers;
  }

  const animalsObject = {};
  species.forEach(({ name, residents }) => {
    animalsObject[name] = residents.length;
  });
  return animalsObject;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const objectEntries = Object.entries(entrants);
  const valor = objectEntries.reduce(
    (acc, [priceTicket, totalPersons]) => acc + prices[priceTicket] * totalPersons, 0,
  );

  return valor;
}

//   let { Adult, Child, Senior } = entrants;
//   adultUnit = 49.99;
//   childUnit = 20.99;
//   seniorUnit = 24.99;
//   let soma = (Adult * adultUnit) + (Child * childUnit) + (Senior * seniorUnit) ;
//   return soma;
// test = {
//   Adult: 2,
// }
// console.log(calculateEntry(test));

function sexFilter(actualResidents, sexSearched) {
  return actualResidents.filter(({ sex }) => sex === sexSearched);
}

function sortByName(residents) {
  return residents.sort((name1, name2) => {
    if (name1.name > name2.name) return 1;
    if (name1.name < name2.name) return -1;
    return 0;
  });
}

function includeNames({ animalsRegions, sorted, sex }) {
  species.forEach(({ name, location, residents }) => {
    let actualResidents = [...residents];

    if (sorted) actualResidents = sortByName(actualResidents);

    if (sex) actualResidents = sexFilter(actualResidents, sex);

    animalsRegions[location].push({
      [name]: actualResidents.map((animal) => animal.name),
    });
  });
}

function getAnimalMap(options) {
  const animalsRegions = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  if (!options || !options.includeNames) {
    species.every(({ name, location }) => animalsRegions[location].push(name));
    return animalsRegions;
  }

  includeNames({ animalsRegions, sorted: options.sorted, sex: options.sex });

  return animalsRegions;
}

function getSchedule(dayName) {
  const newSchedule = {};

  const days = Object.keys(hours);
  days.forEach((day) => {
    const openTime = hours[day].open;
    const closeTime = hours[day].close - 12;

    if (openTime && closeTime) {
      newSchedule[day] = `Open from ${openTime}am until ${closeTime}pm`;
    } else {
      newSchedule[day] = 'CLOSED';
    }
  });

  if (!dayName) return newSchedule;

  return { [dayName]: newSchedule[dayName] };
}

function sortByAge(residents) {
  return residents.sort((age1, age2) => {
    if (age1.age > age2.age) return 1;
    if (age1.age < age2.age) return -1;
    return 0;
  });
}

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((person) => person.id === id);
  const firstAnimalId = employee.responsibleFor[0];
  const firstSpecies = species.find((specie) => specie.id === firstAnimalId);

  const ordenedByAge = sortByAge(firstSpecies.residents);
  const lastAnimal = ordenedByAge[ordenedByAge.length - 1];
  return [lastAnimal.name, lastAnimal.sex, lastAnimal.age];
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

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
