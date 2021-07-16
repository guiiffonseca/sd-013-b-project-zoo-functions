const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const identidade = ids;
  return identidade.map((value) =>
    species.find((bichos) => bichos.id === value));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species
    .find((value) => value.name === animal)
    .residents.every((value) => value.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employeeName !== undefined
    ? data.employees.find(
      (value) =>
        value.firstName === employeeName || value.lastName === employeeName,
    )
    : {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const empregados = data.employees.map((empregado) => {
    const procura = empregado.managers.some((value) => value === id);
    return procura;
  });
  return empregados.some((value) => value === true);
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return data.employees;
}

function countAnimals(species2) {
  // seu código aqui
  const objeto = {};
  if (species2 !== undefined) {
    return species.find((value) => value.name === species2).residents.length;
  }
  species.forEach((value, index, array) => {
    objeto[value.name.toString()] = value.residents.length;
    return objeto;
  });
  return objeto;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult = 0 } = entrants;
  const { Child = 0 } = entrants;
  const { Senior = 0 } = entrants;
  const { Adult: adulto } = data.prices;
  const { Child: crianca } = data.prices;
  const { Senior: velhos } = data.prices;
  const soma = Adult * adulto + Child * crianca + Senior * velhos;
  return soma;
}

function getAnimalMap1(options) {
  const array = ['NE', 'NW', 'SE', 'SW'];
  const objeto = {};
  array.forEach((item) => {
    const local = species.filter((value) => value.location === item);
    const animais = local.map((value) => value.name);
    objeto[item] = animais;
  });
  return objeto;
}

function getAnimalMap2(sorted) {
  const array = ['NE', 'NW', 'SE', 'SW'];
  const objeto = {};
  array.forEach((item) => {
    const local = species.filter((value) => value.location === item);
    const animais = local.map((value) => {
      const objeto2 = {};
      const tipo = species.filter((value2) => value2.name === value.name);
      let ordenado = (tipo[0].residents.map((value3) => value3.name));
      if (sorted === true) {
        ordenado = (tipo[0].residents.map((value3) => value3.name)).sort();
      }
      objeto2[value.name] = ordenado;
      return objeto2;
    });
    objeto[item] = animais;
  });
  return objeto;
}

function getAnimalMap3(sexo, sorted) {
  const array = ['NE', 'NW', 'SE', 'SW'];
  const objeto = {};
  array.forEach((item) => {
    const local = species.filter((value) => value.location === item);
    const animais = local.map((value) => {
      const objeto2 = {};
      const tipo = species.filter((value2) => value2.name === value.name);
      const sex = tipo[0].residents.filter((value4) => value4.sex === sexo);
      let ordenado = (sex.map((value3) => value3.name));
      if (sorted === true) {
        ordenado = (sex.map((value3) => value3.name)).sort();
      }
      objeto2[value.name] = ordenado;
      return objeto2;
    });
    objeto[item] = animais;
  });
  return objeto;
}

function getAnimalMap(options = { includeNames: false, sex: null, sorted: false }) {
  // seu código aqui
  const { includeNames, sorted, sex } = options;
  if (includeNames === true && sex !== undefined) {
    return getAnimalMap3(sex, sorted);
  }
  if (includeNames === true) {
    return getAnimalMap2(sorted);
  }
  return getAnimalMap1();
}

function arrumaDataHora() {
  const array = data.hours;
  const objeto = {};
  Object.keys(array).map((value, index) => {
    if (Object.values(array)[index].open !== 0) {
      objeto[value] = `Open from ${Object.values(array)[index].open}am until ${
        Object.values(array)[index].close - 12
      }pm`;
    } else {
      objeto[value] = 'CLOSED';
    }
    return 'teste';
  });
  return objeto;
}

function procuraDia(dayName) {
  const array = data.hours;
  const obj = Object.keys(array);
  const objeto = {};
  obj.map((value, index) => {
    if (value === dayName) {
      if (Object.values(array)[index].open !== 0) {
        objeto[value] = `Open from ${
          Object.values(array)[index].open
        }am until ${Object.values(array)[index].close - 12}pm`;
      } else {
        objeto[value] = 'CLOSED';
      }
    }
    return 'teste';
  });
  return objeto;
}

function getSchedule(dayName) {
  // seu código aqui
  if (dayName === undefined) {
    return arrumaDataHora();
  }
  return procuraDia(dayName);
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const colaborador = data.employees.find((value) => value.id === id);
  const animal = species.find(
    (value2) => value2.id === colaborador.responsibleFor[0],
  );
  const maisVelho = animal.residents.reduce(
    (acc, value) => (value.age > acc ? value.age : acc),
    0,
  );
  const xablau = animal.residents.find((value) => value.age === maisVelho);
  return [xablau.name, xablau.sex, maisVelho];
}

function increasePrices(percentage) {
  // seu código aqui
  function increase(pessoa) {
    let result = pessoa + (pessoa * percentage) / 100;
    result = Math.round(result * 100) / 100;
    return result;
  }
  data.prices.Adult = increase(data.prices.Adult);
  data.prices.Child = increase(data.prices.Child);
  data.prices.Senior = increase(data.prices.Senior);
  return data.prices;
}

function getEmployeeCoverage(idOrName) {
  if (idOrName !== undefined) {
    const objeto = {};
    const procura = data.employees.find((value) => value.id === idOrName
  || value.firstName === idOrName || value.lastName === idOrName);
    const animal = procura.responsibleFor.map((value) =>
      (species.find((value2) => value2.id === value)));
    const temp = animal.map((value) => value.name);
    objeto[`${procura.firstName} ${procura.lastName}`] = temp;
    return objeto;
  }
  const objeto2 = {};
  data.employees.map((value) => {
    const animal2 = value.responsibleFor.map((value2) =>
      (species.find((value3) => value3.id === value2))).map((value4) => value4.name);
    objeto2[`${value.firstName} ${value.lastName}`] = animal2;
    return objeto2;
  });
  return objeto2;
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
