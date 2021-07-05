const data = require('./data');

const { species, employees, hours } = data;

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return { };
  }
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.find((employee) => employee.id)
    .managers.some((manager) => manager === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(countSpecies) {
  const allAnimals = { };
  if (!countSpecies) {
    species.forEach((specie) => {
      allAnimals[specie.name] = specie.residents.length;
    });
    return allAnimals;
  }
  const animals = species.find((specie) => specie.name === countSpecies);
  return animals.residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;

  const total = Adult * 49.99 + Senior * 24.99 + Child * 20.99;
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
}

// Passado o dia como parâmetro, retorna somente o dia.

function getSchedule(dayName) {
  if (!dayName) {
    return {
      Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
      Wednesday:`Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
      Thursday:`Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
      Friday:`Open from ${hours.Friday.open}am until ${hours.Friday.close - 12 }pm`,
      Saturday:`Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
      Sunday:`Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
      Monday:`CLOSED`,
    }
  }
  if (dayName === 'Monday') return { 'Monday': 'CLOSED' }
  return { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
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
