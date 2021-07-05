const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, ageMin) {
  // seu código aqui
  return species.find(({ name }) => name === animal)
    .residents.every(({ age }) => age >= ageMin);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find(({ firstName, lastName }) =>
    (employeeName === firstName || employeeName === lastName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
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

// const callbackCount = (acumulador, elemento) => {
//   const momento = acumulador;
//   momento[elemento.name] = elemento.residents.length;
//   return momento;
// };

function countAnimals(speciesZoo) {
  // seu código aqui
  if (!speciesZoo) {
    return species.reduce((acumulador, { name, residents }) => {
      const momento = acumulador;
      momento[name] = residents.length;
      return momento;
    }, {});
  }
  return species.find(({ name }) => name === speciesZoo).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  return Object.entries(entrants).reduce((acumulador, elemento) => {
    const chave = elemento[0];
    return acumulador + prices[chave] * elemento[1];
  }, 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getScheduleNoParameter() {
  return Object.entries(hours).reduce((acumulador, elemento) => {
    const momento = acumulador;
    const dia = elemento[0];
    if (elemento[0] === 'Monday') {
      momento[dia] = 'CLOSED';
    } else {
      momento[dia] = `Open from ${elemento[1].open}am until ${elemento[1].close - 12}pm`;
    }
    return momento;
  }, {});
}

function getSchedule(dayName) {
  if (!dayName) return getScheduleNoParameter();
  const arr = Object.entries(hours).find((elemento) => elemento[0] === dayName);
  if (dayName === 'Monday') return { [dayName]: 'CLOSED' };
  return { [dayName]: `Open from ${arr[1].open}am until ${arr[1].close - 12}pm` };
}

function getOldestFromFirstSpecies(idFornecido) {
  // seu código aqui
  const animalId = employees.find(({ id }) => id === idFornecido).responsibleFor[0];
  const animal = species.find(({ id }) => id === animalId).residents
    .reduce((acumulador, elemento) => {
      const idadeAtual = elemento.age;
      const idadeAcumulador = acumulador.age;
      return (idadeAtual > idadeAcumulador) ? elemento : acumulador;
    });
  return Object.values(animal);
}

function increasePrices(percentage) {
  // seu código aqui
  Object.entries(prices).forEach((elemento) => {
    const chave = elemento[0];
    const incremento = (elemento[1] + (percentage / 100) * elemento[1]);
    prices[chave] = Math.ceil(incremento * 100) / 100;
  });
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
