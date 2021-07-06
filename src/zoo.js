const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return data.species.filter((specie) => ids.includes(specie.id)); // codigo baseado no do Jõao Vanelli
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find((type) => type.name === animal); // busca o objeto do animal escolhido
  const animais = findAnimal.residents; // guarda o array dos animais daquela especie (fuinha)
  return animais.every((resident) => resident.age >= age); // verifica se as idades de todos animais possuem a idade minima.
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) { // verifica se tem parametro se não tem retorna objeto vazio
    return {};
  }
  return data.employees.find(((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName));
  // procura o parametro na chave de primeiro nome ou ultimo nome do objeto empregado
  // se achar retorna o objeto.
}

function createEmployee(personalInfo, associatedWith) {
  const fullInfo = { ...personalInfo, ...associatedWith };
  return fullInfo;
}

function isManager(id) {
  const managers = data.employees.map((employee) => employee.managers);
  const arrayManager = managers.reduce((acc, curr) => acc.concat(curr));
  return arrayManager.some((employeeId) => employeeId === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const checkPerson = (element = []) => element;
  const fullInfos = {
    id,
    firstName,
    lastName,
    managers: checkPerson(managers),
    responsibleFor: checkPerson(responsibleFor),
  };
  return data.employees.push(fullInfos);
}

function countAnimals(speciesName) {
  const allAnimalsObject = {};
  function allAnimals() {
    data.species.forEach((animalName) => {
      allAnimalsObject[animalName.name] = animalName.residents.length;
    });
  }
  allAnimals();
  if (!speciesName) {
    return allAnimalsObject;
  }
  return allAnimalsObject[speciesName];
}
// O parâmetro entrants recebe um objeto que contém as chaves Adult, Child e Senior, com suas respectivas quantidades de pessoas
function calculateEntry(entrants = 0) {
  const entrantsArray = Object.entries(entrants);
  return entrantsArray
    .reduce((acc, [typeEntrant, amount]) => acc + data.prices[typeEntrant] * amount, 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const object = Object.entries(data.hours);
  const schedule = {}; // objeto para guardar cada interaçã
  object.forEach((day) => { // usei o for each para retornar um objeto
    const [dia, { open: openTime, close: closeTime }] = day; // destruturação do objeto para acessar cada valor
    schedule[dia] = `Open from ${openTime}am until ${12 - (24 - closeTime)}pm`; // converte horario para pm
    if (openTime === 0 && closeTime === 0) {
      schedule[dia] = 'CLOSED'; // se o tempo de abrir e fechar for 0, retorna fechado
    }
  });
  if (!dayName) { // se não tiver parametro retorna o objeto inteiro
    return schedule;
  }
  return { [dayName]: schedule[dayName] }; // trecho retirado do codigo do caribé
}

function getOldestFromFirstSpecies(id) {
  const employeeInfo = data.employees.find((employee) => id === employee.id);
  const firstSpecieId = employeeInfo.responsibleFor[0];
  const specieInfo = data.species.find((specie) => specie.id === firstSpecieId);
  const speciesResidents = specieInfo.residents.reduce((acc, curr) => {
    if (curr.age > acc.age) {
      return curr;
    }
    return acc;
  });
  return [speciesResidents.name, speciesResidents.sex, speciesResidents.age];
}
// parseFloat(Mathround(14,)).toFixed(4)
function increasePrices(percentage) {
  const formatedPercentage = 1 + (percentage / 100);
  data.prices.Adult = Math.round(data.prices.Adult * formatedPercentage * 100) / 100;
  data.prices.Child = Math.round(data.prices.Child * formatedPercentage * 100) / 100;
  data.prices.Senior = Math.round(data.prices.Senior * formatedPercentage * 100) / 100;
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
