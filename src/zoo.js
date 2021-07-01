const { species, employees, prices } = require('./data');

const data = require('./data');

function getSpeciesByIds(...ids) {
  const array = [];
  ids.forEach((id, index) => {
    array[index] = species.find((specie) => specie.id === id);
  });
  return array;
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents.every((usr) => usr.age > age);
}

function getEmployeeByName(employeeName) {
  let emp = {};
  emp = employees.find((per) => per.firstName === employeeName || per.lastName === employeeName);
  return emp !== undefined ? emp : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const array = employees.find((person) => person.managers.includes(id));
  if (array !== undefined) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  employees.push({
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  });
}

function countAnimals(animal) {
  const animals = {
    lions: species[0].residents.length,
    tigers: species[1].residents.length,
    bears: species[2].residents.length,
    penguins: species[3].residents.length,
    otters: species[4].residents.length,
    frogs: species[5].residents.length,
    snakes: species[6].residents.length,
    elephants: species[7].residents.length,
    giraffes: species[8].residents.length,
  };
  const size = species.find((ani) => ani.name === animal);
  return animal !== undefined ? size.residents.length : animals;
}

function calculateEntry(entrants = 0) {
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

// Animal Map //

const allAni = {
  NE: species.filter((aniName) => aniName.location === 'NE').map((ani) => `${ani.name}`),
  NW: species.filter((aniName) => aniName.location === 'NW').map((ani) => `${ani.name}`),
  SE: species.filter((aniName) => aniName.location === 'SE').map((ani) => `${ani.name}`),
  SW: species.filter((aniName) => aniName.location === 'SW').map((ani) => `${ani.name}`),
};

const getAnimalsNames = (name, sex, sorted) => {
  const animalObj = species.find((arg) => arg.name === name);
  let animalNames = animalObj.residents.map((ani) => `${ani.name}`);
  if (sex) {
    animalNames = animalObj.residents.filter((ani) => ani.sex === sex).map((arg) => `${arg.name}`);
  }
  if (sorted) {
    animalNames.sort();
  }
  return animalNames;
};

function getAnimalMap(options = '') {
  const { includeNames = false, sorted = false, sex = false } = options;
  const AniNames = {
    NE: [{ [allAni.NE[0]]: getAnimalsNames('lions', sex, sorted) },
      { [allAni.NE[1]]: getAnimalsNames('giraffes', sex, sorted) }],
    NW: [{ [allAni.NW[0]]: getAnimalsNames('tigers', sex, sorted) },
      { [allAni.NW[1]]: getAnimalsNames('bears', sex, sorted) },
      { [allAni.NW[2]]: getAnimalsNames('elephants', sex, sorted) }],
    SE: [{ [allAni.SE[0]]: getAnimalsNames('penguins', sex, sorted) },
      { [allAni.SE[1]]: getAnimalsNames('otters', sex, sorted) }],
    SW: [{ [allAni.SW[0]]: getAnimalsNames('frogs', sex, sorted) },
      { [allAni.SW[1]]: getAnimalsNames('snakes', sex, sorted) }],
  };
  return includeNames !== false && options !== '' ? AniNames : allAni;
}

console.log(getAnimalMap({ includeNames: true, sex: 'female' }).NE[0]);

function getSchedule(dayName) {
  // seu código aqui
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
