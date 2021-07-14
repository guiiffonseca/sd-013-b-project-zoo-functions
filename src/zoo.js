const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const arrayOfSpec = [];
  ids.forEach((element) => arrayOfSpec.push(data.species.find((specie) => specie.id === element)));
  return arrayOfSpec;
}

function getAnimalsOlderThan(animal, age) {
  const relAnimal = data.species.find((animalName) => animalName.name === animal);
  return relAnimal.residents.every((element) => element.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    return data.employees.find((element) =>
      element.firstName === employeeName || element.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith,
  };
}

function isManager(id) {
  const resul = employees.some((element) => element.managers.find((element1) => element1 === id));
  return resul;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  const animais = {};
  if (species === undefined) {
    data.species.forEach(({ name, residents }) => {
      animais[name] = residents.length;
    });
    return (animais);
  }
  return (data.species.find((element) => element.name === species).residents.length);
}

function CalcEntry(entrada) {
  let nnAdult = 0;
  let nnChild = 0;
  let nnSenior = 0;
  if (entrada.Adult > 0) {
    nnAdult = data.prices.Adult * entrada.Adult;
  }
  if (entrada.Child > 0) {
    nnChild = data.prices.Child * entrada.Child;
  }
  if (entrada.Senior > 0) {
    nnSenior = data.prices.Senior * entrada.Senior;
  }
  return (nnAdult + nnChild + nnSenior);
}

function calculateEntry(entrants) {
  if ((entrants === undefined) || (Object.keys(entrants).length === 0)) {
    return 0;
  }
  return CalcEntry(entrants);
}

function getAnimalMap(options) {
  //
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const specieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const relSpecie = data.species.find((specie) => specieId === specie.id).residents
    .reduce((velho, resident) => {
      if (velho.age < resident.age) {
        return resident;
      }
      return velho;
    });
  return Object.values(relSpecie);
}

function increasePrices(percentage) {
  data.prices.Adult *= percentage + 100;
  data.prices.Adult = Math.ceil(data.prices.Adult) / 100;
  data.prices.Senior *= percentage + 100;
  data.prices.Senior = Math.ceil(data.prices.Senior) / 100;
  data.prices.Child *= percentage + 100;
  data.prices.Child = Math.ceil(data.prices.Child) / 100;
  return data.prices;
}

const EmployeesTo = () => data.employees.reduce((acc, { firstName, lastName, responsibleFor }) => {
  acc[`${firstName} ${lastName}`] = animal(responsibleFor);
  return acc;
}, {});

const animal = (responsibleFor) =>
  responsibleFor.map((animal) =>
    data.species.find((especie) => especie.id === animal).name);
console.log(EmployeesTo());

function getEmployeeCoverage(idOrName) {
  if (!idOrName) return EmployeesTo();

  const employeesTodos = data.employees.find((id) => id.id === idOrName
  || id.firstName === idOrName
  || id.lastName === idOrName);
  const name = { [`${employeesTodos.firstName} ${employeesTodos.lastName}`]:
  animal(employeesTodos.responsibleFor),
  };
  return name;  
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
