const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((worker) => worker.firstName === employeeName)
  || employees.find((worker) => worker.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, ...params) {
  const funcionario = {
    id,
    firstName,
    lastName,
    managers: params[0] || [],
    responsibleFor: params[1] || [],
  };
  employees.push(funcionario);
}

function countAnimals(specie) {
  if (specie) {
    return species.reduce((acc, animal) => {
      let result = acc;
      if (animal.name === specie) result = animal.residents.length;
      return result;
    }, 0);
  }
  return species.reduce((population, animal) => {
    const result = population;
    result[animal.name] = animal.residents.length;
    return result;
  }, {});
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const result = [prices].reduce((acc, price) => {
    let calc = acc;
    calc += (entrants.Adult * price.Adult) || 0;
    calc += (entrants.Senior * price.Senior) || 0;
    calc += (entrants.Child * price.Child) || 0;
    return calc;
  }, 0);
  return result;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const daysWeek = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) {
    return daysWeek;
  }
  return { [dayName]: daysWeek[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const getManageryById = employees
    .find((employee) => employee.id === id);
  const getFirstSpecie = species
    .find((specie) => specie.id === getManageryById.responsibleFor[0]);
  const getOlderAnimal = getFirstSpecie.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(getOlderAnimal);
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
