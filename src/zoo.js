const { hours } = require('./data');
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

/* function getSchedule(dayName) {
  const arrayHorario = Object.entries(hours);
  let agenda1 = {};

  if (!dayName) {
    agenda1 = arrayHorario.reduce((acumulador, valorAtual) => {
      let objHorario = acumulador;
      let indexSemana = 0;
      let indexHora = 1;
      let horaFechar = 0;

      let indexHoraFechar = valorAtual[indexHora].close;
      switch (indexHoraFechar) {
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

      if (valorAtual[indexSemana] === 'Monday') {
        objHorario[valorAtual[indexSemana]] = 'CLOSED';
      } else {
        objHorario[valorAtual[indexSemana]] = `Open from ${valorAtual[indexHora].open}am until ${horaFechar}pm`;
      }

      return objHorario;
    }, {});

  } else {
    switch (dayName) {
      case 'Tuesday':
        frase = `Open from ${arrayHorario[0][1].open}am until 6pm`;
        break;

      case 'Wednesday':
        frase = `Open from ${arrayHorario[1][1].open}am until 6pm`;
        break;

      case 'Thursday':
        frase = `Open from ${arrayHorario[2][1].open}am until 8pm`;

      case 'Friday':
        frase = `Open from ${arrayHorario[3][1].open}am until 8pm`;
        break;

      case 'Saturday':
        frase = `Open from ${arrayHorario[4][1].open}am until 10pm`;
        break;

      case 'Sunday':
        frase = `Open from ${arrayHorario[5][1].open}am until 8pm`;
        break;

      case 'Monday':
        frase = 'CLOSED';
        break;
    }
    agenda1[`${dayName}`] = frase;
  }
  return agenda1;
} */
// arrayHorario[0][1].open;
// arrayHorario[0][1].close;
// arrayHorario[1][1].open;
// arrayHorario[1][1].close;
// arrayHorario[2][1].close;

function getSchedule(dayName) {
  const arrayDia = Object.keys(hours);
  let agenda1 = {};

  agenda1 = arrayDia.reduce((acumulador, dia) => {
    const objHorario = acumulador;
    if (dia === 'Monday') {
      objHorario[dia] = 'CLOSED';
    } else {
      objHorario[dia] = `Open from ${hours[dia].open}am until ${hours[dia].close - 12}pm`;
    }
    return objHorario;
  }, {});

  if (dayName in agenda1) {
    // lembrando que os colchetes indicam que o eu que quero pegar é o que o dayname representa, ou seja, de dayname for monday eu quero pegar no meu objeto a chave monday
    agenda1 = { [dayName]: agenda1[dayName] };
  }
  return agenda1;
}

function getOldestFromFirstSpecies(id) {
  let idadeInicial = 0;
  let idDaEspecie = '';
  let arrayDoMaisVelho = [];
  empregados.find((empregado) => {
    if (empregado.id === id) idDaEspecie = empregado.responsibleFor[0];
  });
  const primeiraEspecie = especies.find((especie) => {
    if (idDaEspecie === especie.id) {
      return especie;
    }
  });
  primeiraEspecie.residents.filter((residente) => {
    if (residente.age > idadeInicial) {
      idadeInicial = residente.age;
      arrayDoMaisVelho = [residente.name, residente.sex, residente.age];
    }
  });
  return arrayDoMaisVelho;
}

function increasePrices(percentage) {
  const precosOriginais = Object.keys(precos); // [ Adult, Senior, Child ]
  const porcentagem = (percentage / 100) + 1;

  precosOriginais.forEach((chave) => {
    const precoAtualizado = precos[chave] * porcentagem;
    const precoReajustado = (Math.ceil(precoAtualizado * 100) / 100);

    precos[chave] = precoReajustado;
  });
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
