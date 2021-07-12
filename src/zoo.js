const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const animalsOlder = species.find((specie) => specie.name === animal);
  return animalsOlder.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const employeeObject = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return employeeObject;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const getManager = employees.some((employee) => employee.managers.includes(id));
  return getManager;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  };
  return employees.push(newEmployee);
}

function countAnimals(specie) {
  const allAnimals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, {});

  if (!specie) return allAnimals;

  return allAnimals[specie];
}

function calculateEntry(entrants = 0) {
  if (entrants === {}) return 0;

  const valorAdulto = data.prices.Adult * entrants.Adult || 0;
  const valorJovem = data.prices.Senior * entrants.Senior || 0;
  const valorCrianca = data.prices.Child * entrants.Child || 0;

  return valorAdulto + valorJovem + valorCrianca;
}

function getAnimalMap(options) {
  if (!options) {
    const byLocation = () => ({
      NE: species.filter((specie) => specie.location === 'NE')
        .map((atualSpecie) => atualSpecie.name),
      NW: species.filter((specie) => specie.location === 'NW')
        .map((atualSpecie) => atualSpecie.name),
      SE: species.filter((specie) => specie.location === 'SE')
        .map((atualSpecie) => atualSpecie.name),
      SW: species.filter((specie) => specie.location === 'SW')
        .map((atualSpecie) => atualSpecie.name),
    });
    return byLocation();
  }
}

function getSchedule(dayName) {
  const daysOfWeek = Object.keys(data.hours);
  const allDays = daysOfWeek.reduce((acc, day) => {
    const days = data.hours[day];
    acc[day] = `Open from ${days.open}am until ${days.close - 12}pm`;

    return acc;
  }, {});
  allDays.Monday = 'CLOSED';

  if (!dayName) {
    return allDays;
  }

  const oneDay = {};
  oneDay[dayName] = allDays[dayName];

  return oneDay;
}

function getOldestFromFirstSpecies(id) {
  const thisEmployee = employees.find((employee) => employee.id === id);
  const firstAnimal = thisEmployee.responsibleFor[0];
  const allResidents = species.find((specie) => specie.id === firstAnimal).residents;
  const oldestAnimal = Object.values(allResidents.sort((a, b) => b.age - a.age)[0]);

  return oldestAnimal;
}

function increasePrices(percentage) {
  const porcen = (percentage / 100) + 1;
  data.prices.Adult = Math.round((data.prices.Adult * porcen) * 100) / 100;
  data.prices.Senior = Math.round((data.prices.Senior * porcen) * 100) / 100;
  data.prices.Child = Math.round((data.prices.Child * porcen) * 100) / 100;
  console.log(data.prices);

  return increasePrices;
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
