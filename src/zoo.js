const data = require('./data');

const especies = data.species;
const empregados = data.employees;

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  const busca = especies
    .filter((especie) => especie.id === ids
      .find((value) => especie.id === value));
  return busca;
};

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  let ehVelho = false;
  especies.forEach((especie) => {
    if (especie.name === animal) {
      ehVelho = especie.residents.every((residente) => residente.age > age);
    }
  });
  return ehVelho;
}
// Para testar a função com o debug
// getAnimalsOlderThan('otters', 7);
// getAnimalsOlderThan('penguins', 10);

function getEmployeeByName(employeeName) {
  // seu código aqui
  let empregadoEncontrado = {};
  if (employeeName) {
    empregadoEncontrado = empregados.find((empregado) =>
      empregado.firstName === employeeName || empregado.lastName === employeeName);
    return empregadoEncontrado;
  }
  return empregadoEncontrado;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992'; // presidente

  const gerente = empregados
    .some((empregado) => empregado.id === id && empregado.managers
      .some((manager) => manager === stephanieId));
  return gerente;
}

/** Função auxiliar para adicionar o(s) gerente(s) */
function addEmployeeManagers(managers) {
  let gerentes;
  if (managers === undefined) {
    gerentes = [];
  } else {
    gerentes = managers;
  }
  return gerentes;
}

/** Função auxiliar para adicionar por quem o empregado é responsável */
function addEmployeeResponsibleFor(responsibleFor) {
  let responsavelPor;
  if (responsibleFor === undefined) {
    responsavelPor = [];
  } else {
    responsavelPor = responsibleFor;
  }
  return responsavelPor;
}

// Refatorar esta função, passando valor padrão diretamente nos parâmetros
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const gerentes = addEmployeeManagers(managers);
  const responsavelPor = addEmployeeResponsibleFor(responsibleFor);

  const novoEmpregado = {
    id: `${id}`,
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    managers: gerentes,
    responsibleFor: responsavelPor,
  };

  empregados.push(novoEmpregado);
}

function countAnimals(species) {
  // Ajuda do Cajueiro | todasEspecies é o meu obj vazio {}
  const contagemAnimal = especies.reduce((todasEspecies, especie) => {
    let objEspecies = todasEspecies;
    if (!species) {
      const nome = especie.name;
      const qtd = especie.residents.length;
      // meu obj objEspecies, na chave 'nome' recebe como valor a 'qtd'      
      objEspecies[nome] = qtd;
    } else {
      if (species === especie.name) objEspecies = especie.residents.length;
    }
    return objEspecies;
  }, {});
  return contagemAnimal;
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

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
