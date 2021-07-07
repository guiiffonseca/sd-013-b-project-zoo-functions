const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((inputedId) => result.push(species.find(({ id }) => id === inputedId)));
  return result;
}

function getAnimalsOlderThan(animal, number) {
  return ((species.find(({ name }) => animal === name))
    .residents.every(({ age }) => age > number));
}

function getEmployeeByName(name) {
  if (name) {
    return employees.find(({ firstName, lastName }) => name === firstName || lastName === name);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(number) {
  return employees.some(({ managers }) => managers.some((element) => element === number));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(animal) {
  if (animal) {
    return species.find(({ name }) => animal === name).residents.length;
  }
  const result = {};
  species.forEach(({ name, residents }) => {
    result[name] = residents.length;
  });
  return result;
}

function calculateEntry(values) {
  if (values === undefined) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = values;
  const priceAdult = Adult * (prices.Adult);
  const priceChild = Child * (prices.Child);
  const priceSenior = Senior * (prices.Senior);
  return (priceAdult + priceChild + priceSenior);
}

function animalsByLocation() {
  const result = {};
  species.forEach(({ location, name }) => {
    if (result[location]) {
      result[location].push(name);
    } else {
      result[location] = [name];
    }
  });
  return result;
}

function getResidents(animal) {
  return species.find(({ name, residents }) => animal === name).residents
    .map(({ name }) => name);
}

function animalsWithNames(object) {
  const animals = { ...object };
  Object.keys(object).forEach((location) => {
    animals[location] = object[location].map((element) => (({ [element]: getResidents(element) })));
  });
  return animals;
}

function animalsSortedByName() {
}

function animalsSortedBySex(currentSex) {
  const animals = species.reduce((acc, current) => {
    if (acc[current.location]) {
      acc[current.location].push({ [current.name]:
        current.residents.filter((element) =>
          element.sex === currentSex).map((element) => element.name) });
    } else {
      acc[current.location] = [{ [current.name]:
        current.residents.filter((element) =>
          element.sex === currentSex).map((element) => element.name) }];
    }
    return acc;
  }, {});

  return animals;
}

function getAnimalMap(options) {
  let result = animalsByLocation();
  if (options === undefined) {
    return result;
  }
  const { includeNames: name, sorted, sex } = options;
  if (name) {
    return animalsWithNames(result);
  }
  if (sex) {
    result = animalsSortedBySex(sex);
  }
  if (sorted) {
    return animalsSortedByName();
  }

  return result;
}

const options = { includeNames: true };

function showAllSchedule() {
  const result = {};
  Object.keys(hours).forEach((element) => {
    const { open, close } = hours[element];
    result[element] = `Open from ${open}am until ${close - 12}pm`;
    if (open === 0 || close === 0) {
      result[element] = 'CLOSED';
    }
  });
  return result;
}

function getSchedule(dayName) {
  const schedule = showAllSchedule();
  if (dayName) {
    return { [dayName]: schedule[dayName] };
  }
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((age) => {
    const increase = (((prices[age] / 100) * percentage));
    const finalPrice = Math.ceil((prices[age] + increase) * 100) / 100;
    // const finalPrice = (parseFloat((prices[age] + incrise).toPrecision(4)));
    prices[age] = finalPrice;
  });
  return prices;
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
