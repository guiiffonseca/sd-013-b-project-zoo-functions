const data = require('./data');

const { species } = data;

const getSpeciesByIds = (...ids) => species.filter((specie, index) => specie.id === ids[index]);

// console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((specie) => specie.name === animal);
  return animals.residents.every((resident) => resident.age >= age);
}

const { employees } = data;
function getEmployeeByName(employeeName) {
  return employees.find((e) => e.firstName === employeeName || e.lastName === employeeName) || {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

const isManager = (id) => employees.some((emp, index) => Object.values(emp.managers)[index] === id);

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
  return employees;
}

function countAnimals(speciesParam) {
  if (speciesParam !== undefined) {
    return species.find((specie) => specie.name === speciesParam).residents.length;
  }
  const allAnimals = {
    lions: species.find((specie) => specie.name === 'lions').residents.length,
    tigers: species.find((specie) => specie.name === 'tigers').residents.length,
    bears: species.find((specie) => specie.name === 'bears').residents.length,
    penguins: species.find((specie) => specie.name === 'penguins').residents.length,
    otters: species.find((specie) => specie.name === 'otters').residents.length,
    frogs: species.find((specie) => specie.name === 'frogs').residents.length,
    snakes: species.find((specie) => specie.name === 'snakes').residents.length,
    elephants: species.find((specie) => specie.name === 'elephants').residents.length,
    giraffes: species.find((specie) => specie.name === 'giraffes').residents.length,
  };

  return allAnimals;
}
const { prices } = data;

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  const { Adult, Senior, Child } = entrants;
  const quantiesOfEnt = [Adult, Senior, Child];
  const valuesPrices = Object.values(prices);

  const eachPrice = quantiesOfEnt.map((quanty, i) => ((quanty > 0 ? quanty * valuesPrices[i] : 0)));
  const totalPrice = eachPrice.reduce(((acc, curr) => acc + curr));

  return totalPrice || 0;
}
// const options = { includeName: true }

function getAnimalMap(options) {
  const nes = species.filter((specie) => (specie.location === 'NE'));
  const nws = species.filter((specie) => (specie.location === 'NW'));
  const ses = species.filter((specie) => (specie.location === 'SE'));
  const sws = species.filter((specie) => (specie.location === 'SW'));
  return { NE: nes.map((ne) => ne.name),
    NW: nws.map((nw) => nw.name),
    SE: ses.map((se) => se.name),
    SW: sws.map((sw) => sw.name),
  };
}

const { hours } = data;

function getSchedule(dayName) {
  const arrayOfDays = Object.entries(hours);
  const daySearched = arrayOfDays.find((day) => day[0] === dayName);
  if (dayName !== undefined) {
    const daySchedule = {
      [dayName]: `Open from ${daySearched[1].open}am until ${daySearched[1].close - 12}pm`,
    };
    if (dayName === 'Monday') daySchedule[dayName] = 'CLOSED';
    return daySchedule;
  }
  // for index < Monday
  // const allDays = {
  // [arrayOfDays[0][i]]: `Open from ${arrayOfDays[1][i].open}am until ${ArrayOfDays[1][i].close - 12}pm``
  // [arrayOfDays[0][length - 1]]: `CLOSED`
  // }
  // return allDays;
}
console.log(getSchedule('Monday'));
// 'Tuesday': 'Open from 8am until 6pm'
// hours: {
//   Tuesday: { open: 8, close: 18 },
//   Wednesday: { open: 8, close: 18 },
//   Thursday: { open: 10, close: 20 },
//   Friday: { open: 10, close: 20 },
//   Saturday: { open: 8, close: 22 },
//   Sunday: { open: 8, close: 20 },
//   Monday: { open: 0, close: 0 },
// },
function getOldestFromFirstSpecies(id) {
  const person = employees.find((employee) => employee.id === id);
  const firstSpecieId = person.responsibleFor[0];
  const IdAnimal = species.find((specie) => specie.id === firstSpecieId);
  const IdResidents = IdAnimal.residents.sort((a, b) => +(a.age < b.age) || +(a.age === b.age) - 1);
  const result = Object.values(IdResidents[0]);

  return result;
}

function increasePrices(percentage) {
  const values = Object.values(prices);
  const newValues = values.map((value) => Math.round((value * (1 + percentage / 100)) * 100) / 100);
  [prices.Adult, prices.Senior, prices.Child] = [...newValues];
}

function getEmployeeCoverage(idOrName) {
  // const employee = employees.find((emp) => (emp.id === idOrName || emp.firstName === idOrName || emp.lastName === idOrName));
  // const responsibleForIds = employee.responsibleFor;
  // const animals = species.filter((specie, index) => (specie.id === responsibleForIds[index]));
  // const animalsName = animals.map((animal) => animal.name);

  const employeeInfo = {
    // [`${employee.firstName} ${employee.lastName}`]: animalsName,
  };
  return employeeInfo;
}
// console.log(getEmployeeCoverage('Stephanie'));

// Objeto com forEach
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
