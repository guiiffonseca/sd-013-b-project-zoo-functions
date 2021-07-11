const data = require('./data');

// função auxiliar para getSpeciesByIds. Poderia ficar dentro da função mensionada,
// mas optei por deixar fora para que possa ser usada em outro momento, se necessário
const getSpecieById = (id) => data.species.filter((specie) => (specie.id === id));

function getSpeciesByIds(...ids) {
  // seu código aqui
  // return ids.map((id) => data.species.filter((specie) => (specie.id === id)));
  // o MAP não funcionou, porque retornou um array do array [[{ lista }]]
  return ids.reduce((acc, currentValue) => acc.concat(getSpecieById(currentValue)), []);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const findEmployee = data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return findEmployee === undefined ? {} : findEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  data.employees.push(newEmployee);
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  // O código abaixo funcionou, mas não me deixou contente...
  // let isManagerReturn = false;
  // data.employees.forEach((employee) => {
  //   if (employee.managers.some((manager) => manager === id)) {
  //     isManagerReturn = true;
  //   }
  // });
  // return isManagerReturn;
  // Refatorando o código
  return data.employees
    .map((employee) => employee.managers) // Cria um array com os arrays dos gerentes
    .reduce((acc, currentValue) => acc.concat(currentValue), []) // reduz o array de array para um array sumples
    .some((manager) => manager === id); // Retorna True/False se encontar o gerente
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  // seu código aqui
  // A única forma que encontrei de dar saída em um objeto com as species sendo propriedades dele, foi dessa forma...
  const saida = {};
  data.species.forEach((specie) => {
    saida[specie.name] = specie.residents.length;
  });
  return (species !== undefined)
    ? Object.entries(saida).find((specie) => specie[0] === species)[1] : saida;
}

function calculateEntry(entrants = {}) {
  // seu código aqui
  const { Adult: adult = 0, Child: child = 0, Senior: senior = 0 } = entrants;
  const { Adult: priceAdult, Child: priceChild, Senior: priceSenior } = data.prices;
  return (adult * priceAdult) + (child * priceChild) + (senior * priceSenior);
}

// GET ANIMAL MAP
const getResidents = (specie, sex) => ((sex !== undefined)
  ? specie
    .filter((animal) => animal.sex === sex)
    .reduce((acc, currentValue) => acc.concat(currentValue.name), [])
  : specie
    .reduce((acc, currentValue) => acc.concat(currentValue.name), []));

const getAnimalForAnimalMap = (sex) => data.species.map((specie) => ({
  name: specie.name,
  location: specie.location,
  residents: getResidents(specie.residents, sex),
}));

const getNamesAnimal = (animals) => animals // Retorna um array com o nome dos animais
  .reduce((acc, currentValue) => acc.concat(currentValue), []);

const getSpeciesLocation = (animals, location, sorted) => ((sorted === true) // Retorna um array com objetos de animais com a localização passada como parâmetro
  ? animals
    .filter((specie) => specie.location === location)
    .map((specieM) => ({ [specieM.name]: getNamesAnimal(specieM.residents).sort() }))
  : animals
    .filter((specie) => specie.location === location)
    .map((specieM) => ({ [specieM.name]: getNamesAnimal(specieM.residents) }))
);

const makeReturn = (animals, includeNames, sorted) => ((includeNames === true)
  ? {
    NE: getSpeciesLocation(animals, 'NE', sorted),
    NW: getSpeciesLocation(animals, 'NW', sorted),
    SE: getSpeciesLocation(animals, 'SE', sorted),
    SW: getSpeciesLocation(animals, 'SW', sorted),
  }
  : {
    NE: getSpeciesLocation(animals, 'NE').map((animal) => Object.keys(animal)[0]),
    NW: getSpeciesLocation(animals, 'NW').map((animal) => Object.keys(animal)[0]),
    SE: getSpeciesLocation(animals, 'SE').map((animal) => Object.keys(animal)[0]),
    SW: getSpeciesLocation(animals, 'SW').map((animal) => Object.keys(animal)[0]),
  }
);

function getAnimalMap(options = {}) {
  const { includeNames = false, sorted = false, sex = undefined } = options;
  let animalMapReturn = getAnimalForAnimalMap(sex);
  animalMapReturn = makeReturn(animalMapReturn, includeNames, sorted); // Saída no formato padrão
  return animalMapReturn;
}

const convertHour = (hour) => ((hour < 13) ? `${hour}am` : `${hour - 12}pm`);

const descriptionHour = (open, close) => ((close === open)
  ? 'CLOSED' : `Open from ${convertHour(open)} until ${convertHour(close)}`);

function getSchedule(dayName) {
  // seu código aqui
  const hours = Object.entries(data.hours); // retorna um array
  let scheguleZoo = {};
  if (dayName === undefined) {
    scheguleZoo = hours.reduce((acc, currentValue) => {
      acc[currentValue[0]] = descriptionHour(currentValue[1].open, currentValue[1].close);
      return acc;
    }, scheguleZoo);
  } else {
    const selectedDay = hours.find((day) => day[0] === dayName);
    scheguleZoo[selectedDay[0]] = descriptionHour(selectedDay[1].open, selectedDay[1].close);
  }
  return scheguleZoo;
}

function getOldestFromFirstSpecies(id) { // 11
  // seu código aqui
  const responsibleFor = data.employees
    .filter((employee) => employee.id === id)
    .map((employeeMap) => employeeMap.responsibleFor);
  const firstAnimal = data.species
    .find((animal) => animal.id === responsibleFor[0][0])
    .residents
    .sort((a, b) => b.age - a.age)[0];
  return [firstAnimal.name, firstAnimal.sex, firstAnimal.age];
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
