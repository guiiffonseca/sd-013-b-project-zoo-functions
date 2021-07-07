const data = require('./data');

const especies = data.species;
const empregados = data.employees;
const precos = data.prices;

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
    let objEspecies = todasEspecies; // essa variável é só pq o lint reclama se a atribuição for direta no parâmetro da função
    if (!species) {
      const nome = especie.name;
      const qtd = especie.residents.length;
      // meu obj objEspecies, na chave 'nome' recebe como valor a 'qtd'
      objEspecies[nome] = qtd;
    } else if (species === especie.name) {
      objEspecies = especie.residents.length;
    }

    return objEspecies;
  }, {});
  return contagemAnimal;
}

function calculateEntry(entrants = 0) {
  const chavesPessoas = Object.keys(entrants); // ex.:['Adult','Child', 'Senior']
  const chavesPrecos = Object.keys(precos); // ['Adult', 'Senior', 'Child']
  let valorTotal = 0;
  let somatudo = 0;

  chavesPessoas.forEach((chavePessoa) => {
    const qtdPessoas = entrants[chavePessoa]; // 2 || 3 || 1

    chavesPrecos.forEach((chavePreco) => {
      let precoUnitario = precos[chavePreco] // 49.99 || 24.99 || 20.99

      if (chavePreco === chavePessoa) {
        valorTotal = precoUnitario * qtdPessoas;
      }
    });
    somatudo += valorTotal;
  });
  return somatudo;
}

calculateEntry({ 'Adult': 2, 'Child': 3, 'Senior': 1 });

function getAnimalMap(options) {
  // 9
}

function getSchedule(dayName) {
  // s10
}

function getOldestFromFirstSpecies(id) {
  // 11
}

function increasePrices(percentage) {
  // 12
}

function getEmployeeCoverage(idOrName) {
  // 13
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
