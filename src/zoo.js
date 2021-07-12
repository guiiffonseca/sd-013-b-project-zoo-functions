const { species, employees, prices, hours } = require('./data');

// Com a ajuda da Mariana Nogueira, consegui fazer o primeiro requisito:
// Usei o rest para que independente de quantos parâmetros a função funcione;
// Coloquei a função para retornar o parâmetro com map;
// O map percorre o parametro e retorna ele como um array;
// Dentro do map coloquei um find para encontrar dentro de species o id que é igual a ao parametro;
function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

// 1- Encontrar o animal(animal);
// 2- Encontrar as idades;
// 3- Ver se as idades são maiores que a idade minima(age);
function getAnimalsOlderThan(animal, minAge) {
  return (species.find(({ name }) => name === animal))
    .residents.every(({ age }) => age >= minAge);
}

// 1- Encontrar o nome e o sobrenome;
// 2- Comparar com o parametro(employeeName);
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(({ firstName, lastName }) =>
    (firstName === employeeName || lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  let employee = {};
  employee = Object.assign(personalInfo, associatedWith);
  return employee;
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// 1- Se o array for vazio retornar todos os animais e residents;
// 2- Criar um objeto vazio e adicionar os animais e residents dentro dele;
// 3- Encontrar o animal e ver o comprimento de residents;
function countAnimals(species1) {
  const animals = {};
  if (species1 === undefined) {
    species.forEach((animal) => {
      animals[animal.name] = animal.residents.length;
    });
    return animals;
  }
  return species.find(({ name }) => name === species1).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const days = Object.keys(hours);
  const schedule = {};
  days.forEach((day) => {
    if (day === 'Monday') {
      schedule[day] = 'CLOSED';
    } else {
      schedule[day] = (`Open from ${hours[day].open}am until ${hours[day].close - 12}pm`);
    }
  });
  if (dayName === undefined) return schedule;
  return { [dayName]: schedule[dayName] };
}

// Obtive ajuda dos colegas Alan Freitas e Felipe Ventorim para entender como funciona o reduce e;
// ajuda do colega Rafael Nery para lembrar como usar o objeto dentro da Array;
function getOldestFromFirstSpecies(employeeId) {
  const employee = employees.find(({ id }) => (id === employeeId));
  const animal = employee.responsibleFor[0];
  const result = ((getSpeciesByIds(animal))[0].residents).reduce((acc, crvl) => {
    // (acc.age > crvl.age) ? acc : crvl;
    if (acc.age > crvl.age) {
      return acc;
    }
    return crvl;
  });
  return Object.values(result);
}

// 1 - Pegar os valores da entrada;
// 2 - Multiplicar os valores pela porcentagem;
function increasePrices(percentage) {
  Object.keys(prices).forEach((price) => {
    const value = prices[price];
    prices[price] = (Math.ceil((value * (percentage / 100) + value) * 100)) / 100;
  });
}

// 1- Sem pârametros,retorna uma lista de funcionários e os animais pelos quais eles são responsáveis;
// 2- Com o id, nome ou sobrenome do funcionário, retornar os animais pelos quais eles são responsáveis;
function getSpeciesIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id).name);
}
function getEmployeeCoverage(idOrName) {
  const workers = {};
  if (idOrName === undefined) {
    employees.forEach(({ firstName, lastName, responsibleFor }) => {
      workers[`${firstName} ${lastName}`] = getSpeciesIds(...responsibleFor);
    });
    return workers;
  }
  employees.forEach(({ firstName, lastName, id, responsibleFor }) => {
    if (firstName === idOrName || id === idOrName || lastName === idOrName) {
      workers[`${firstName} ${lastName}`] = getSpeciesIds(...responsibleFor);
    }
  });
  return workers;
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
