const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((especie) => especie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const animais = species.find((especie) => animal === especie.name);
  const trueOfFalse = animais.residents.every((especie) => especie.age >= age);
  return trueOfFalse;
}

function getEmployeeByName(employeeName) {
  const condicao = (firstName, lastName) => employeeName === firstName || employeeName === lastName;
  if (employeeName) {
    return employees.find(({ firstName, lastName }) => condicao(firstName, lastName));
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees.some((employer) => employer.managers.includes(id));
}

function addEmployee(idN, firstNameN, lastNameN, managersN = [], responsibleForN = []) {
  return employees.push({
    id: idN,
    firstName: firstNameN,
    lastName: lastNameN,
    managers: managersN,
    responsibleFor: responsibleForN,
  });
}

function countAnimals(specie) {
  if (specie) {
    return species.find((especie) => especie.name === specie).residents.length;
  }
  const lista = {};
  species.forEach((especie) => {
    const { name, residents } = especie;
    lista[name] = residents.length;
  });
  return lista;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
}

function getAnimalMap(options) {
  // const mapa = {};
  // if (!options) {
  //   species.find(() => {
  //   })
  // }
}

// Função get Schedule //

const convertTo12hr = (hora) => {
  if (hora === 0) {
    return 'CLOSED';
  } if (hora > 12) {
    return `${hora % 12}pm`;
  }
  return `${hora}am`;
};

const noParam = () => {
  const { Tuesday: tue, Wednesday: wed, Thursday: thu,
    Friday: fri, Saturday: sat, Sunday: sun, Monday: mon } = hours;
  return {
    Tuesday: `Open from ${convertTo12hr(tue.open)} until ${convertTo12hr(tue.close)}`,
    Wednesday: `Open from ${convertTo12hr(wed.open)} until ${convertTo12hr(wed.close)}`,
    Thursday: `Open from ${convertTo12hr(thu.open)} until ${convertTo12hr(thu.close)}`,
    Friday: `Open from ${convertTo12hr(fri.open)} until ${convertTo12hr(fri.close)}`,
    Saturday: `Open from ${convertTo12hr(sat.open)} until ${convertTo12hr(sat.close)}`,
    Sunday: `Open from ${convertTo12hr(sun.open)} until ${convertTo12hr(sun.close)}`,
    Monday: `${convertTo12hr(mon.open)}`,
  };
};

function getSchedule(dayName = 0) {
  if (dayName === 0) {
    return noParam();
  } if (dayName === 'Monday') {
    return {
      Monday: `${convertTo12hr(hours.Monday.open)}`,
    };
  }
  const open = convertTo12hr(hours[dayName].open);
  const close = convertTo12hr(hours[dayName].close);
  return {
    [`${dayName}`]: `Open from ${open} until ${close}`,
  };
}

function getOldestFromFirstSpecies(workId) {
  const work = employees.find((worker) => worker.id === workId);
  // console.log(work);
  const { responsibleFor } = work;
  const animal = species.find(({ id }) => responsibleFor[0] === id);
  // console.log(animal);
  const { residents } = animal;
  let bixoVelho;
  let maior = 0;
  residents.forEach((bixo) => {
    if (bixo.age > maior) {
      maior = bixo.age;
      bixoVelho = Object.values(bixo);
    }
  });
  return bixoVelho;
}

function increasePrices(percentage) {
  function porcentagem(valor) {
    return (Math.ceil((valor * 100) * (((percentage / 100) + 1))) / 100).toFixed(2);
  }
  const novoAdult = porcentagem(prices.Adult);
  const novoChild = porcentagem(prices.Child);
  const novoSenior = porcentagem(prices.Senior);
  prices.Adult = parseFloat(novoAdult, 10);
  prices.Child = parseFloat(novoChild, 10);
  prices.Senior = parseFloat(novoSenior, 10);
}

// Função Get Employee Coverage //

function seSim(idOrName) {
  const list = {};
  const work = employees.find(
    (worker) => worker.id === idOrName
      || worker.firstName === idOrName
      || worker.lastName === idOrName,
  );
  const { firstName, lastName, responsibleFor } = work;
  const animais = responsibleFor.map((animal) => species.find(({ id }) => animal === id));
  list[`${firstName} ${lastName}`] = [];
  const valor = Object.values(animais);
  valor.forEach((animal) => {
    list[`${firstName} ${lastName}`].push(animal.name);
  });
  return list;
}

function seNao() {
  const list = {};
  employees.forEach((worker) => {
    const { firstName, lastName } = worker;
    const animais = worker.responsibleFor.map((animal) => species.find(({ id }) => animal === id));
    list[`${firstName} ${lastName}`] = [];
    const valor = Object.values(animais);
    valor.forEach((animal) => {
      list[`${firstName} ${lastName}`].push(animal.name);
    });
  });
  return list;
}

function getEmployeeCoverage(idOrName) {
  if (idOrName) {
    return seSim(idOrName);
  }
  return seNao();
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
