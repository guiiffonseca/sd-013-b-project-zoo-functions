const { employees, prices } = require('./data');
const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((specie) => specie.name === animal);
  return animals.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specie) {
  const allAnimals = {};
  if (!specie) {
    species.forEach((animalSpecie) => {
      allAnimals[animalSpecie.name] = animalSpecie.residents.length;
    });
    return allAnimals;
  }
  const animals = species.find((animalSpecie) => animalSpecie.name === specie);
  // dar um jeito de acessar residents.length
  return animals.residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) {
    return 0;
  }
  // recuperar as 3 chaves de entrants
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  // recuperar as 3 chaves de prices
  const adult = prices.Adult * Adult;
  const child = prices.Child * Child;
  const senior = prices.Senior * Senior;
  // somar cada uma delas
  // retornar a soma de todos eles
  return adult + child + senior;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const days = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName === undefined) {
    return days;
  }
  return { [dayName]: days[dayName] };
  // rever esse requisito
}

function getOldestFromFirstSpecies(id) {
  // recuperar o funcionario pelo id
  // const employee = employees.id === id;
  // // pegar a primeira especie com o find em responsibleFor
  // const animal = employees.find((specie) => specie.name === specie.name).responsibleFor[0];
  // ordenar a lista de animais pela idade com o sort
  // retorna o ultimo da lista
}

// increasePrices com ajuda da Mayu <3
const newValue = (price, percentage) => {
  const value = price + ((price / 100) * percentage);
  return (Math.ceil(value * 100) / 100);
};

function increasePrices(percentage) {
  const teste = Object.entries(prices);
  teste.forEach((price) => {
    prices[price[0]] = newValue(prices[price[0]], percentage);
    // prices[price[0]] = newValue(price[1], percentage);
  });
}

// getEmployeeCoverage com ajuda da Mayu <3
const idToName = (responsibleFor) => responsibleFor.map((respFor) => species
  .find((animal) => animal.id === respFor).name);
//  a minha dica é você fazer uma outra função só para converter esses ids nos nomes dos animais. Essa função vai receber como parâmetro o responsibleFor, e a partir daí, você vai percorrer esses elementos podendo usar um find para encontrar no species os elementos que possuam os mesmos ids e assim resgatar o nome do animal. Se ficou confuso, eu posso te mostrar
// const animalName = species.find((animal) => responsibleFor.includes(animal.id));
// return animalName.name;
// console.log(animalName);

function getEmployeeCoverage(idOrName) {
  const employeeAndResponsibleFor = {};
  if (!idOrName) {
    employees.forEach((person) => {
      const fullName = `${person.firstName} ${person.lastName}`;
      employeeAndResponsibleFor[fullName] = idToName(person.responsibleFor);
    });
    return employeeAndResponsibleFor;
  }
  const employee = employees.find((emp) => emp.id === idOrName
    || emp.firstName === idOrName || emp.lastName === idOrName);
  const fullName = `${employee.firstName} ${employee.lastName}`;
  employeeAndResponsibleFor[fullName] = idToName(employee.responsibleFor);
  return employeeAndResponsibleFor;
  // console.log(result);
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
