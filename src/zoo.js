const data = require('./data');

const { species } = data;
const { employees } = data;
const { prices } = data;
const { hours } = data;

function getSpeciesByIds(...ids) {
  return species.filter((objc) =>
    ids.some((id) => objc.id === id));
}

function getAnimalsOlderThan(animal, age) {
  let input = false;
  species
    .filter((value) => value.name === animal)
    .forEach(({ residents }) => {
      input = residents.every((animalSingle) => animalSingle.age >= age);
    });
  return input;
}

function getEmployeeByName(employeeName) {
  return (employeeName === undefined) ? { ...employeeName } : employees
    .filter((value) => employeeName === value.firstName || employeeName === value.lastName)[0];
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.map((value) => value.managers).some((manager) => {
    let input = false;
    if (manager.length > 1) {
      input = manager.some((value) => value === id);
    } else {
      input = manager === id;
    }
    return input;
  });
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newPerson = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newPerson);
}

const withParameter = (specie) => species
  .filter((objc) => objc.name === specie).map(({ residents }) => residents.length)[0];

const notParameter = () => species
  .reduce((acc, objc) => {
    const object = { [objc.name]: objc.residents.length };
    return { ...acc, ...object };
  }, {});

function countAnimals(specie) {
  return (specie === undefined) ? notParameter() : withParameter(specie);
}

function calculateEntry(entrants = []) {
  const entradas = Object.entries(entrants);
  const arrayPrice = Object.entries(prices);
  // eslint-disable-next-line no-unused-expressions
  const total = entradas.map((entrada) => arrayPrice.reduce((acc, value) => {
    const retorno = (value[0] === entrada[0]) ? value[1] * entrada[1] : acc;
    return retorno;
  }, 0));
  return total.reduce((acc, value) => acc + value, 0);
}

// const getAnimalIncludeOff = () => species.reduce((acc, objc) => {
//   if (acc[objc.location]) {
//     acc[objc.location].push(objc.name);
//   } else {
//     acc[objc.location] = [objc.name];
//   }
//   return acc;
// }, {});

// const getAnimalIncludeOn = () => species.reduce((acc, objc) => {
//   if (acc[objc.location]) {
//     acc[objc.location].push({
//       [objc.name]: [...objc.residents.map((value) => value.name)]
//     });
//   } else {
//     acc[objc.location] = [{
//       [objc.name]: [...objc.residents.map((value) => value.name)]
//     }];
//   }
//   return acc;
// }, {});

// const getAnimalSorted = () => species.reduce((acc, objc) => {
//   if (acc[objc.location]) {
//     acc[objc.location].push({
//       [objc.name]: [...objc.residents.map((value) => value.name)].sort()
//     });
//   } else {
//     acc[objc.location] = [{
//       [objc.name]: [...objc.residents.map((value) => value.name)].sort()
//     }];
//   }
//   return acc;
// }, {});

// const returnSx = (value, sex, accu) => {
//   if (value.sex === sex.sex) accu.push(value.name);
//   return accu;
// };

// const getAnimalSex = (sex) => species.reduce((acc, objc) => {
//   if (acc[objc.location]) {
//     acc[objc.location].push([{
//       [objc.name]: objc.residents.reduce((accu, value) => returnSx(value, sex, accu), [])
//     }]);
//   } else {
//     acc[objc.location] = [{
//       [objc.name]: objc.residents.reduce((accu, value) => returnSx(value, sex, accu), [])
//     }];
//   }
//   return acc;
// }, {});

function getAnimalMap(...options) {

}

const transformvalue = (hour) => {
  let value = 0;
  switch (hour) {
  case 20:
    value = 8;
    break;
  case 18:
    value = 6;
    break;
  case 22:
    value = 10;
    break;
  default:
    break;
  }
  return value;
};

function getSchedule(dayName) {
  const keys = Object.keys(hours);
  let obj = {};
  if (dayName === undefined) {
    obj = keys.reduce((acc, value) => {
      acc[value] = `Open from ${hours[value].open}am until ${transformvalue(hours[value].close)}pm`;
      return acc;
    }, {});
    obj.Monday = 'CLOSED';
  } else {
    obj = (dayName === 'Monday') ? { [dayName]: 'CLOSED' }
      : { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close / 3}pm` };
  }
  return obj;
}
const createFrase = (objc) => {
  let animalMaisVelho = objc.reduce((acc, { residents }) => {
    acc.push(residents.sort((a, b) => b.age - a.age)[0]);
    return acc;
  }, []);
  animalMaisVelho = { ...animalMaisVelho.sort((a, b) => b.age - a.age)[0] };

  return [animalMaisVelho.name, animalMaisVelho.sex, animalMaisVelho.age];
};

function getOldestFromFirstSpecies(id) {
  const pessoaId = employees.filter((person) => person.id === id);
  let responsible = [];
  pessoaId.forEach(({ responsibleFor }) => { responsible = responsibleFor; });
  const animais = responsible.reduce((acc, valueId) => {
    species.forEach((value) => {
      if (value.id === valueId) acc.push(value);
    });
    return acc;
  }, []);
  return createFrase(animais);
}

getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad');

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
