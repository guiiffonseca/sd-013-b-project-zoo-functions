const { employees, prices } = require('./data');
const data = require('./data');

/* 1. Esta função é responsável pela busca das espécies de animais por id.
Ela retorna um array contendo as espécies referentes aos ids passados
como parâmetro, podendo receber um ou mais ids. */

function getSpeciesByIds(...ids) {
  return ids.map((speciesId) => data.species.find((eachSpecies) => speciesId === eachSpecies.id));
}

/* 2. Esta função, a partir do nome de uma espécie e uma idade mínima, verifica
se todos os animais daquela espécie possuem a idade mínima especificada */

function getAnimalsOlderThan(animal, age) {
  const findAnimals = data.species.find((animals) => animals.name === animal);
  const isOlder = findAnimals.residents.every((each) => each.age >= age);
  return isOlder;
}

/* 3. Esta função é responsável pela busca das pessoas colaboradoras através do
 primeiro ou do último nome delas */

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const findEmployees = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return findEmployees;
}

/* 4. A função, a partir de informações recebidas nos parâmetros, é capaz de
 criar um objeto equivalente ao de uma pessoa colaboradora, retornando-o */

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

/* 5. Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de
 gerência. */

function isManager(id) {
  const isLeader = employees.some((worker) =>
    worker.managers.find((workerId) => workerId === id));
  return isLeader;
}

/* 6. A função irá adicionar uma nova pessoa colaboradora ao array employees,
 presente no arquivo data.js. */

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

/* 7. Esta função é responsável por contabilizar a quantidade de animais. */

function countAnimals(species) {
  if (species === undefined) {
    const animalObject = {};
    data.species.forEach((namedAnimal) => {
      animalObject[`${namedAnimal.name}`] = namedAnimal.residents.length;
    });
    return animalObject;
  }
  return data.species.find((namedAnimal) => namedAnimal.name === species).residents.length;
}

/* 8. A partir da quantidade de visitantes e a faixa etária de cada um, esta
 função é responsável por retornar o preço total a ser cobrado */

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === 0) return 0;
  const { Adult: adult = 0, Child: child = 0, Senior: senior = 0 } = entrants;
  return (adult * prices.Adult) + (child * prices.Child) + (senior * prices.Senior);
}

/* 9. A função é responsável pelo mapeamento geográfico das espécies e seus
animais, podendo ainda filtrá-los por ordem alfabética e gênero, por exemplo */

function getAnimalMap(options) {
  // seu código aqui
}

/* 10. A função é responsável por disponibilizar as informações de horário para
 uma consulta, que pode querer ter acesso a todo o cronograma da semana ou
 apenas o cronograma de um dia específico */

function getSchedule(dayName) {
  const getKeys = Object.keys(data.hours);
  const days = getKeys.reduce((accumulator, current) => ({
    ...accumulator,
    [current]: `Open from ${data.hours[current].open}am until ${data.hours[current].close - 12}pm`,
  }), {});
  days.Monday = 'CLOSED';
  if (!dayName) return days;
  return {
    [dayName]: days[dayName],
  };
}
/* 11. A função busca por informações do animal mais velho da primeira espécie
 gerenciada pela pessoa colaboradora do parâmetro */

function getOldestFromFirstSpecies(id) {
  const firstId = employees.find((careTaker) => careTaker.id === id).responsibleFor[0]; // Pela Id do funcionário retorna primeira Id da espécie que ele cuida
  const searchSpecies = data.species.find((speciesId) => firstId === speciesId.id).residents; // Guarda os animais da espécie retornada
  const firstSpecies = searchSpecies.sort((a, b) => b.age - a.age); // Ordena pela idade maior
  const { name, sex, age } = firstSpecies[0]; // Desustruturador para retornar os valores pedidos no return
  return [name, sex, age];
}

/* 12. A função é responsável por aumentar o preço das visitas, com base no
 valor de aumento recebido no parâmetro, em porcentagem */

function increasePrices(percentage) {
  const keysForPrices = Object.keys(prices);
  keysForPrices.forEach((key) => {
    prices[key] = Math.round((prices[key] * 100) * (1 + (percentage / 100))) / 100;
  });
}

/* 13. A função é responsável por consultar as espécies pela qual a pessoa
 colaborada, recebida no parâmetro através de seu id, firstName ou lastName,
 é responsável */

function getEmployeeCoverage(idOrName) {
  const employeeInfo = (empList) => {
    const objReady = empList.reduce((acc, empl) => ({ ...acc,
      [`${empl.firstName} ${empl.lastName}`]: empl.responsibleFor.map((anim) =>
        data.species.find((spec) => spec.id === anim).name) }), {});
    return objReady;
  };
  if (idOrName) {
    const subjEmpl = data.employees.find((any) =>
      idOrName === any.firstName
   || idOrName === any.lastName
   || idOrName === any.id);
    return employeeInfo([subjEmpl]);
  }
  return employeeInfo(data.employees);
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
