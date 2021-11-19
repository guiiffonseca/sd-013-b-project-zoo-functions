const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return species.filter((animal) => ids.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((kind) => kind.name === animal).residents
    .every((animalAge) => animalAge.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) => {
    const firName = employee.firstName;
    const scdName = employee.lastName;
    return firName === employeeName || scdName === employeeName;
  });
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciess) {
  if (speciess === undefined) {
    return species.reduce((acc, currSpc) => {
      acc[currSpc.name] = currSpc.residents.length;
      return acc;
    }, {});
  }
  return species.find((specie) => specie.name === speciess).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return Object.keys(entrants).reduce((acc, curr) => acc + entrants[curr] * prices[curr], 0);
}

function getAnimalMap(options) {

}

function getSchedule(dayName) {
  const schedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) {
    return schedule;
  }
  return { [dayName]: schedule[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const idPerson = employees.find((employee) => employee.id === id).responsibleFor[0];
  const findSpecies = species.find((specie) => specie.id === idPerson).residents
    .sort((a, b) => b.age - a.age);
  return [findSpecies[0].name, findSpecies[0].sex, findSpecies[0].age];
}

function increasePrices(percentage) {
  const percen = percentage + 100;
  prices.Adult = Math.ceil((prices.Adult * percen)) / 100;
  prices.Senior = Math.ceil((prices.Senior * percen)) / 100;
  prices.Child = Math.ceil((prices.Child * percen)) / 100;
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
