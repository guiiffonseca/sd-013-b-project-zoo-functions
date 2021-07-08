const { hours } = require('./data');
const data = require('./data');

const especies = data.species;
const empregados = data.employees;
const precos = data.prices;
const horario = data.hours;

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
      const precoUnitario = precos[chavePreco]; // 49.99 || 24.99 || 20.99

      if (chavePreco === chavePessoa) {
        valorTotal = precoUnitario * qtdPessoas;
      }
    });
    somatudo += valorTotal;
  });
  return somatudo;
}

function getAnimalMap(options) {
  // 9
}

function getSchedule(dayName) {
  // sem parametro, retorna o objeto 'hours' inteiro
  const arrayHorario = Object.entries(hours);
/*   const retorno = { 
  'Tuesday': 'Open from 8am until 6pm',
  'Wednesday': 'Open from 8am until 6pm',
  'Thursday': 'Open from 10am until 8pm',
  'Friday': 'Open from 10am until 8pm',
  'Saturday': 'Open from 8am until 10pm',
  'Sunday': 'Open from 8am until 8pm',
  'Monday': 'CLOSED'
} */

const agenda1 = arrayHorario.reduce((acumulador, valorAtual) => {
  let objetoHorario = acumulador;
  let indexSemana = 0;
  let indexHora = 1;
  let horaFechar = 0;

    if (valorAtual[indexSemana] === 'Monday') {
      objetoHorario[valorAtual[indexSemana]] = 'CLOSED';
    } else {
      let indexHoraFechar = valorAtual[indexHora].close;
      switch(indexHoraFechar) {
        case 18:
          horaFechar = 6;
          break;
        case 20:
          horaFechar = 8;
          break;
        case 22:
          horaFechar = 10;
          break;
      }
      objetoHorario[valorAtual[indexSemana]] = `Open from ${valorAtual[indexHora].open}am until ${horaFechar}pm`;
    }  

    return objetoHorario;
  }, {});

  // arrayHorario[0][1].open;
  // arrayHorario[0][1].close;
  // arrayHorario[1][1].open;
  // arrayHorario[1][1].close;
  // arrayHorario[2][1].close;
  return agenda1;
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
