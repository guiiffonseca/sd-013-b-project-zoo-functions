const { species, employees, prices, hours } = require('./data');
const data = require('./data');

const managerId = {
  stephanieId: '9e7d4524-363c-416a-8759-8aa7e50c0992',
  olaId: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  burlId: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
};
const { stephanieId, olaId, burlId } = managerId;

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const comparName = species.find((specie) => specie.name === animal);
  return comparName.residents.every((animalAge) => animalAge.age >= age);
}

function getEmployeeByName(employee) {
  if (employee === undefined) return {};
  return employees.find((people) => people.firstName === employee || people.lastName === employee);
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = Object.assign(personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  const arrayManagers = [stephanieId, olaId, burlId];
  return arrayManagers.filter((manage) => manage === id).some((person) => person === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(employee);
}

function countAnimals(speciesPar) {
  const animalResidents = species.find((animal) => animal.name === speciesPar);
  const animals = {};
  species.forEach((animal) => {
    animals[animal.name] = animal.residents.length;
  });
  if (speciesPar === undefined) {
    return animals;
  }
  return animalResidents.residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  const array = [Adult, Senior, Child];
  const pricesCop = Object.values(prices);
  const priceTotal = pricesCop.reduce((total, price, index) => total + array[index] * price, 0);
  return priceTotal;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const entriesHours = Object.entries(hours);
  const allHours = {};
  entriesHours.forEach((entry) => {
    if (entry[0] === 'Monday') {
      allHours[entry[0]] = 'CLOSED';
    } else {
      allHours[entry[0]] = `Open from ${entry[1].open}am until ${entry[1].close - 12}pm`;
    }
  });
  if (dayName !== undefined) {
    return { [dayName]: allHours[dayName] };
  }
  return allHours;
}

function getOldestFromFirstSpecies(id) {
  // achar funcionário pelo id
  // verificar qual o primeiro índice da chave responsabilityFor
  const firstAnimal = employees.find((people) => people.id === id).responsibleFor[0];
  // usar o id recebido no passo anterior para pegar a espécie com esse id.
  const animalSpecie = species.find((specie) => specie.id === firstAnimal).residents;
  // .reduce((old, resident) => resident.age > old.age ? old = resident : old = old);
  // verificar na chave residents desse id, qual índice tem a chave age com o valor mais alto.
  let residentOld = animalSpecie[0];
  console.log(residentOld);
  for (let index = 0; index < animalSpecie.length; index += 1) {
    if (animalSpecie[index].age > residentOld.age) {
      residentOld = animalSpecie[index];
    }
  }
  // retorna um object.values desse objeto.
  return Object.values(residentOld);
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
