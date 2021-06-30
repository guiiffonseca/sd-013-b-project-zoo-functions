const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === '') return [];
  const final = [];
  let acctual = '';
  const filtro = (valor) => valor.id === acctual;

  ids.forEach((atual) => {
    acctual = atual;
    final.push(data.species.filter(filtro)[0]);
  });
  return final;
}

function getAnimalsOlderThan(animal, age) {
  const filtro = (valor) => valor.name === animal;
  const filtroIdade = (valor) => valor.age > age;

  const especie = data.species.filter(filtro)[0].residents;
  const acima = especie.filter(filtroIdade);

  if (especie.length === acima.length) {
    return true;
  }

  return false;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const filtro = (atual) => employeeName === atual.firstName || employeeName === atual.lastName;

  return data.employees.filter(filtro)[0];
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function getManagers() {
  const lista = [];
  data.employees.forEach((atual) => {
    atual.managers.forEach((gerente) => { lista.push(gerente); });
  });

  return lista;
}

function isManager(id) {
  const managers = getManagers();
  const result = [];
  const filtro = (atual) => {
    managers.forEach((manager) => {
      if (atual.id === manager && id === manager) result.push(atual);
    });
  };

  data.employees.filter(filtro);

  if (result.length === 0) return false;

  return true;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(employee);
}

function countAnimals(species) {
  const todos = {};
  if (!species) {
    data.species.forEach((atual) => {
      todos[atual.name] = atual.residents.length;
    });
    return todos;
  }
  let quant = 0;
  data.species.forEach((atual) => {
    if (atual.name === species) quant = atual.residents.length;
  });

  return quant;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;

  const adult = (entrants.Adult ? entrants.Adult : 0);
  const child = (entrants.Child ? entrants.Child : 0);
  const senior = (entrants.Senior ? entrants.Senior : 0);

  const valores = data.prices;
  const total = valores.Adult * adult + valores.Child * child + valores.Senior * senior;
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
}

function allDays() {
  const chaves = Object.keys(data.hours);
  const horario = {};
  chaves.forEach((dia) => {
    if (data.hours[dia].open === 0 && data.hours[dia].close === 0) {
      horario[`${dia}`] = 'CLOSED';
    } else {
      const open = `Open from ${data.hours[dia].open}am`;
      horario[`${dia}`] = `${open} until ${data.hours[dia].close - 12}pm`;
    }
  });
  return horario;
}

function getSchedule(dayName) {
  const days = allDays();
  if (!dayName) {
    return days;
  }
  return {
    [dayName]: `${days[dayName]}`,
  };
}

function getOldestFromFirstSpecies(id) {
  const colaborator = data.employees.find((colab) => colab.id === id).responsibleFor[0];
  const especie = data.species.find((idFunc) => idFunc.id === colaborator).residents;

  const oldest = especie.reduce((acc, curr) => ((acc.age < curr.age) ? curr : acc));

  return Object.values(oldest);
}

function increasePrices(percentage) {
  const precos = data.prices;
  const chaves = Object.keys(precos);
  chaves.forEach((chave) => {
    const atual = data.prices[chave];
    const final = atual + (atual * (percentage / 100));
    data.prices[chave] = Math.ceil(final.toFixed(4) * 100) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  const obj = {};
  const ids = data.employees.map((atual) => atual.id);
  const res = ids.map((at) => data.employees.find((cada) => cada.id === at).responsibleFor);
  ids.forEach((atual, index) => {
    const empregado = data.employees.find((name) => name.id === atual);
    const animalName = res[index].map((prese) => data.species.find((esp) => esp.id === prese).name);
    obj[`${empregado.firstName} ${empregado.lastName}`] = animalName;
  });
  if (!idOrName) return obj;
  const encontrar = (e) => e.id === idOrName || e.firstName === idOrName || e.lastName === idOrName;
  const param = data.employees.find(encontrar);
  const final = {
    [`${param.firstName} ${param.lastName}`]: obj[`${param.firstName} ${param.lastName}`],
  };
  return final;
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
