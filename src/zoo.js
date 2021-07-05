const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === '') {
    return [];
  } return data.species.filter((ide) => ids.includes(ide.id));
}

function getAnimalsOlderThan(animal, age) {
  const animalArray = data.species.filter((bicho) => bicho.name === animal);
  const resid = animalArray[0].residents;
  return resid.every((resi) => resi.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  } return data.employees.find((pessoa) => pessoa.firstName === employeeName
  || pessoa.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const manager = data.employees.find((procura) => procura.id === id);
  const gerente = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  if (manager.id === gerente) {
    return true;
  } return false;
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (species === undefined) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return data.species.find(({ name }) => name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants) {
    const cliente = Object.keys(entrants);
    return cliente.reduce((acc, cur) =>
      acc + (data.prices[cur] * entrants[cur]), 0);
  }
  return 0;
}

function getAnimalMap(options) {

}

function getSchedule(dayName) {
  const {hours} = data;
  const crono = Object.keys(hours).reduce((acc, act) => {
    const check = (typeof (dayName) === 'undefined') ? act : dayName;
    const mensagem = `Open from ${hours[check].open}am until ${hours[check].close - 12}pm`;
    acc[check] = mensagem;
    return acc;
  }, {});

  function comp() {
    if (Object.keys(crono).includes('Monday')) {
    crono.Monday = 'CLOSED';
     }
     return crono;
}
  return comp();

}

function getOldestFromFirstSpecies(id) {
  const manager = data.employees.find((ide) => ide.id === id).responsibleFor[0];
  const animals = data.species.find((animal) => animal.id === manager).residents;
  const soma = animals.reduce((acc, curr) => ((acc.age < curr.age) ? curr : acc));
  return Object.values(soma);
}

function increasePrices(percentage) {
  data.prices.Adult = Math.ceil(data.prices.Adult * (100 + percentage)) / 100;
  data.prices.Child = Math.ceil(data.prices.Child * (100 + percentage)) / 100;
  data.prices.Senior = Math.ceil(data.prices.Senior * (100 + percentage)) / 100;
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
