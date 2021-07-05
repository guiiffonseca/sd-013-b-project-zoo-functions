const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const animalsBySpecie = data.species.find((specie) => specie.name === animal).residents;
  return animalsBySpecie.every((residentAnimal) => residentAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.find((employee) => employee.id).managers.some((manager) => manager === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// função para contabilizar todos os animais;
const allAnimalsCount = () => {
  const allAnimalCount = {}; // cria objeto vazio;
  data.species.forEach((specie) => { // for each pra percorrer cada espécie;
    allAnimalCount[specie.name] = specie.residents.length; // a cada iteração no objeto species, o forEach adiciona uma chave (que é o nome do animal) e um valor (que é a quantidade de objetos dentro de residents);
  });
  return allAnimalCount; // retorna o objeto allAnimalCount depois de ser 'populado' pelo forEach;
};

function countAnimals(species) {
  if (!species) return allAnimalsCount();
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  // como verificar objetos vazios https://programandosolucoes.dev.br/2021/03/02/objeto-vazio-javascript/
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (Adult * data.prices.Adult) + (Senior * data.prices.Senior) + (Child * data.prices.Child);
}

function getAnimalMap(options) {
  // seu código aqui
}

const completeSchedule = () => {
  // Tinha feito na mão pra testar se passava, agora estou tentando fazer com HOF;
  const weekDays = Object.keys(data.hours); // cria variavel contendo as chaves do obejto hours;
  const schedule = weekDays.reduce((acc, curr) => { // reduce para criar um novo objeto e ir populando ele com as ocorrências;
    acc[curr] = `Open from ${data.hours[curr].open}am until ${data.hours[curr].close - 12}pm`;
    if (curr === 'Monday') acc[curr] = 'CLOSED';
    return acc;
  }, {}); return schedule;
  // const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = data.hours;
  // const schedule = {
  //   Tuesday: `Open from ${Tuesday.open}am until ${Tuesday.close - 12}pm`,
  //   Wednesday: `Open from ${Wednesday.open}am until ${Wednesday.close - 12}pm`,
  //   Thursday: `Open from ${Thursday.open}am until ${Thursday.close - 12}pm`,
  //   Friday: `Open from ${Friday.open}am until ${Friday.close - 12}pm`,
  //   Saturday: `Open from ${Saturday.open}am until ${Saturday.close - 12}pm`,
  //   Sunday: `Open from ${Sunday.open}am until ${Sunday.close - 12}pm`,
  //   Monday: 'CLOSED',
  // };
  // return schedule;
};

function getSchedule(dayName) {
  if (!dayName) return completeSchedule();
  return { [dayName]: completeSchedule()[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const getId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animalId = data.species.find((specie) => specie.id === getId).residents;
  let oldestAnimal;
  for (let index = 0; index < animalId.length; index += 1) {
    if (!oldestAnimal || animalId[index].age > oldestAnimal.age) {
      oldestAnimal = animalId[index];
    }
  }
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

function increasePrices(percentage) {
  const converted = (percentage / 100) + 1;
  const typeOfEntrant = Object.keys(data.prices);
  typeOfEntrant.forEach((entrant) => {
    data.prices[entrant] = Math.ceil(data.prices[entrant] * converted * 100) / 100;
  });
  return data.prices;
}
const completeList = () => {
  const list = {};
  const animalNames = {};
  data.species.forEach((animal) => {
    animalNames[animal.id] = animal.name;
  });
  data.employees.forEach((employee) => {
    list[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor.map((id) =>
      animalNames[id]); // bâeta ajudou nessa;
  });
  return list;
};

function getEmployeeCoverage(idOrName) {
  if (!idOrName) return completeList();
  const employeeCoverage = {};
  const { id, firstName, lastName } = data.employees;
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
