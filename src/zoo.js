const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const species = data.species.filter((specie) => ids.some((id) => id === specie.id));
  return species;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.species.find((specie) => specie.name === animal).residents;
  const olderThanAge = animals.every((element) => element.age >= age);
  return olderThanAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  let employee;

  if (employeeName === undefined) {
    employee = {};
  } else {
    employee = data.employees.find(
      (person) => person.firstName === employeeName || person.lastName === employeeName,
    );
  }

  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const employee = {
    ...personalInfo,
    ...associatedWith,
  };

  return employee;
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((person) => person.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  data.employees.push(employee);
}

function countAnimals(species = {}) {
  // seu código aqui
  let animals = {};
  if (typeof (species) === 'object') {
    data.species.forEach((specie) => {
      animals[specie.name] = specie.residents.length;
    });
  } else {
    const animalCategory = data.species.find((specie) => specie.name === species);
    animals = animalCategory.residents.length;
  }
  return animals;
}

function calculateEntry(entrants = {}) {
  // Retorna 0 se nenhum argumento for passado
  // Retorna 0 se um objeto vazio for passado
  // seu código aqui
  let entry;
  if (Object.keys(entrants).length === 0) {
    entry = 0;
  } else {
    const entryFunc = ({ Adult = 0, Child = 0, Senior = 0 }) => {
      const { prices } = data;
      return prices.Adult * Adult + prices.Child * Child + prices.Senior * Senior;
    };
    entry = entryFunc(entrants);
  }
  return entry;
}

function animalMapNoParameter() {
  const animalMap = data.species.reduce((accumulator, currentValue) => {
    if (currentValue.location in accumulator) {
      // Adicionar ao valor de cv.loc
      accumulator[currentValue.location].push(currentValue.name);
    } else {
      // Criar nova key
      accumulator[currentValue.location] = [currentValue.name];
    }
    return accumulator;
  }, {});
  return animalMap;
}

function sortNames(a, b) {
  let result;
  if (a.name < b.name) {
    result = -1;
  } else {
    result = 1;
  }
  return result;
}

function animalMapIncludingNamesSorting() {
  const animalMap = data.species.reduce((accumulator, specie) => {
    const sortedNames = specie.residents.sort(sortNames);
    if (specie.location in accumulator) {
      // Para cada location existente
      accumulator[specie.location].push({
        [specie.name]: sortedNames.map((animal) => animal.name),
      });
    } else {
      // Para cada nova location, criar um array:
      // Array deve armazenar um objeto (specie.Name: [specie.residents.name](declarar antes))
      accumulator[specie.location] = [{
        [specie.name]: sortedNames.map((animal) => animal.name),
        /** Objeto: specie.Name: specie.residents.name */
      }];
    }
    return accumulator;
  }, {});
  return animalMap;
}

function animalMapIncludingNames() {
  const animalMap = data.species.reduce((accumulator, currentValue) => {
    if (currentValue.location in accumulator) {
      // Adicionar ao valor de cv.loc
      accumulator[currentValue.location].push({
        [currentValue.name]: currentValue.residents.map((resident) => resident.name),
      });
    } else {
      // Criar nova key no formato de objeto
      accumulator[currentValue.location] = [{
        [currentValue.name]: currentValue.residents.map((resident) => resident.name),
      }];
    }
    return accumulator;
  }, {});
  return animalMap;
}

function animalMapWithSex(sex) {
  const animalMap = data.species.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue.location]) {
      // Adicionar ao valor de cv.loc
      // Criar nova key no formato de objeto
      accumulator[currentValue.location] = [{
        [currentValue.name]: currentValue.residents.filter((animal) => animal.sex === sex)
          .map((resident) => resident.name),
      }];
    } else {
      accumulator[currentValue.location].push({
        [currentValue.name]: currentValue.residents.filter((animal) => animal.sex === sex)
          .map((resident) => resident.name),
      });
    }
    return accumulator;
  }, {});
  return animalMap;
}

function animalMapWithParameters(options, animalMap) {
  let animalMapAUX = animalMap;
  if (options.some((option) => option.sorted === true)) {
    animalMapAUX = animalMapIncludingNamesSorting();
  } else if (options.some((option) => option.sex === 'male')) {
    animalMapAUX = animalMapWithSex('male');
  } else if (options.some((option) => option.sex === 'female')) {
    animalMapAUX = animalMapWithSex('female');
  } else {
    // Com a opção includeNames: true especificada, retorna nomes de animais
    animalMapAUX = animalMapIncludingNames();
  }
  return animalMapAUX;
}

function getAnimalMap(...options) {
  // seu código aqui
  let animalMap;
  if (options.length === 0) {
    animalMap = animalMapNoParameter();
  } else if (options.some((option) => option.includeNames === true)) {
    animalMap = animalMapWithParameters(options, animalMap);
  } else {
    animalMap = options;
  }
  return animalMap;
}

function rewriteNumber(day) {
  const dayOfTheWeek = { open: 0, close: 0 };
  if (day.close > 12) {
    dayOfTheWeek.close = `${(day.close - 12).toString()}pm`;
  } else {
    dayOfTheWeek.close = `${day.close.toString()}am`;
  }
  if (day.open > 12) {
    dayOfTheWeek.open = `${(day.open - 12).toString()}pm`;
  } else {
    dayOfTheWeek.open = `${day.open.toString()}am`;
  }

  return dayOfTheWeek;
}

function scheduleWithParameters(dayName, schedule) {
  const wantedDay = {};
  wantedDay[dayName] = schedule[dayName];
  return wantedDay;
}

function scheduleNoParameters() {
  const legibleSchedule = {};
  const schedule = data.hours;
  const keys = Object.keys(schedule);
  const values = Object.values(schedule);

  for (let index = 0; index < keys.length; index += 1) {
    values[index] = rewriteNumber(values[index]);
    if (values[index].close === values[index].open) {
      legibleSchedule[keys[index]] = 'CLOSED';
    } else {
      legibleSchedule[keys[index]] = `Open from ${values[index].open} until ${values[index].close}`;
    }
  }

  return legibleSchedule;
}

function getSchedule(dayName) {
  // seu código aqui
  let schedule = scheduleNoParameters();
  if (dayName !== undefined) {
    schedule = scheduleWithParameters(dayName, schedule);
  }
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  // Pega o objeto do funcionario pelo id
  const searchedEmployee = data.employees.filter((employee) => employee.id === id)[0];
  const speciesId = searchedEmployee.responsibleFor[0];
  const animal = data.species.filter((searchedSpecies) => searchedSpecies.id === speciesId)[0];
  animal.residents.sort((a, b) => b.age - a.age);
  const searchedAnimal = animal.residents[0];

  return Object.values(searchedAnimal);
}

function increasePrices(percentage) {
  // seu código aqui
  const { prices } = data;
  const keys = Object.keys(prices);
  for (let index = 0; index < keys.length; index += 1) {
    prices[keys[index]] = prices[keys[index]] * (percentage / 100) + prices[keys[index]];
    prices[keys[index]] = Math.round((prices[keys[index]] + Number.EPSILON) * 100) / 100;
  }

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
