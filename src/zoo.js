const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  let animalsAge = species.find((animals) => animals.name === animal).residents;
  animalsAge = animalsAge.every((ages) => ages.age > age);
  return animalsAge;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const nameEmployees = employees.find((employe) =>
    employe.firstName === employeeName || employe.lastName === employeeName);
  return nameEmployees;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  const managers = employees
    .map((employee) => employee.managers)
    .reduce((employee, actual) => employee + actual
      .some((codigoId) => codigoId === id), 0) > 0;
  return managers;
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  const lastEmployee = { id,
    firstName,
    lastName,
    managers,
    responsibleFor };
  employees.push(lastEmployee);
}

function countAnimals(speciesP) {
  return speciesP
    ? species.find(({ name }) => name === speciesP).residents.length
    : species.reduce((counterSpe, { name, residents }) =>
      ({ ...counterSpe, [name]: residents.length }),
    {});
}

function calculateEntry({ Adult = 0, Senior = 0, Child = 0 } = {}) {
  const result = (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
  return result;
}

const OrdenandoMoradores = ({ residents, sorted, sex }) => {
  if (sorted) {
    return residents
      .filter(({ sex: moradoreGeneros }) => sex === '' || moradoreGeneros === sex)
      .map(({ name }) => name).sort();
  }
  return residents
    .filter(({ sex: moradoreGeneros }) => sex === '' || moradoreGeneros === sex)
    .map(({ name }) => name);
};

function getAnimalMap({ includeNames = false, sorted = false, sex = '' } = {}) {
  return species.reduce((mapeandoAnimais, { name, location, residents }) => {
    const mapeandoAnimaisAux = mapeandoAnimais;
    if (!mapeandoAnimaisAux[location]) { mapeandoAnimaisAux[location] = []; }
    if (includeNames) {
      mapeandoAnimaisAux[location].push({
        [name]: OrdenandoMoradores({ residents, sorted, sex }),
      });
    } else {
      mapeandoAnimaisAux[location].push(name);
    }
    return mapeandoAnimaisAux;
  }, {});
}

const formatoHora = ({ open, close }) => {
  if (open === close) { return 'CLOSED'; }
  return `Open from ${open}am until ${close - 12}pm`;
};

function getSchedule(nomeDia) {
  return nomeDia
    ? { [nomeDia]: formatoHora(hours[nomeDia]) }
    : Object.keys(hours).reduce((cronograma, dia) =>
      ({ ...cronograma, [dia]: formatoHora(hours[dia]),
      }), {});
}

function getOldestFromFirstSpecies(id) {
  const primeiraEspecies = employees.find(({ id: empId }) => empId === id).responsibleFor[0];
  const primeiroMaisVelho = species
    .find(({ id: spectId }) => spectId === primeiraEspecies).residents
    .reduce((maisVelho, morador) => {
      if (morador.age > maisVelho.age) {
        return morador;
      }
      return maisVelho;
    });
  return Object.values(primeiroMaisVelho);
}

function increasePrices(percentage) {
  prices.Adult = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  prices.Child = Math.ceil(prices.Child * (100 + percentage)) / 100;
  prices.Senior = Math.ceil(prices.Senior * (100 + percentage)) / 100;
}
const pegEspecNomesEmOrdem = (...ids) => ids
  .map((id) => species
    .find((specie) => specie.id === id).name);

function getEmployeeCoverage(idOrName) {
  return employees.filter(({ id, firstName, lastName }) =>
    !idOrName
  || idOrName === id
  || idOrName === firstName
  || idOrName === lastName)
    .reduce((cobertura, { firstName, lastName, responsibleFor }) => ({ ...cobertura,
      [`${firstName} ${lastName}`]: pegEspecNomesEmOrdem(...responsibleFor),
    }), {});
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
