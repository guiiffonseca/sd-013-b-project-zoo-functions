const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const GuardaID = species.filter((VSpecies) => ids.some((VId) => VSpecies.id === VId));
  console.log(GuardaID);
  return GuardaID;

  // console.log(GuardaID);
}
// console.log(species);
// console.log(Array.isArray(data.species));
function getAnimalsOlderThan(animal, age) {
  const retorno = species.find((value) => value.name === animal);
  const arrayInfo = retorno.residents;
  const BolleanValue = arrayInfo.every((value) => value.age >= age);
  return BolleanValue;
}

function getEmployeeByName(employeeName) {
  let retorno = {};
  const find = employees.find((v) => v.firstName === employeeName || v.lastName === employeeName);
  retorno = { ...find };
  return retorno;
}

function createEmployee(personalInfo, associatedWith) {
  const newObj = { ...personalInfo, ...associatedWith };
  return newObj;
}

function isManager(id) {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

  if (id === stephanieId || id === olaId || id === burlId) {
    return true;
  }
  return false;
}
// cria um objeto e coloca detro do employess
function addEmployee(idN, firstNameN, lastNameN, managersN = [], responsibleForN = []) {
  const novoObjeto = {
    id: idN,
    firstName: firstNameN,
    lastName: lastNameN,
    managers: managersN,
    responsibleFor: responsibleForN,
  };

  employees.push(novoObjeto);
}
function countAnimalSemParametro() {
  let objeto = {};
  species.forEach((item) => {
  // const nomeAnimal = item.name;
  // const populacao = item.popularity;
    objeto = {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
  });
  return objeto;
}
function countAnimalComParametro(animal) {
  let retorno = 0;

  species.forEach((item) => {
    if (item.name === animal) {
      retorno = item.popularity;
      return retorno;
    }
  });
  return retorno;
}
function countAnimals(animal) {
  if (animal === undefined) {
    const objeto = countAnimalSemParametro();
    return objeto;
  }
  // acima : sem parametro abaixo com paramentro
  const numero = countAnimalComParametro(animal);
  return numero;
}
// Adult: 49.99,
// Senior: 24.99,
// Child: 20.99,

function calculaValor(adult = 0, senior = 0, child = 0) {
  const soma = (adult * 49.99) + (senior * 24.99) + (child * 20.99);
  return soma;
}

function quantidadePessoa(chaves, valores, obj) {
  let adult = 0;
  let senior = 0;
  let child = 0;
  adult = obj.Adult;
  senior = obj.Senior;
  child = obj.Child;

  const soma = calculaValor(adult, senior, child);
  return soma;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const chaves = Object.keys(entrants);
  const valores = Object.values(entrants);
  if (chaves[0] === undefined || valores[0] === undefined) {
    return 0;
  }

  const Valor = quantidadePessoa(chaves, valores, entrants);
  return Valor;
}

// 4 arrays  NE NW SE SW

function AdcionaEspecies(obj) {
  species.forEach((value) => {
    if (value.location === 'NE') {
      obj.NE.push(value.name);
    }
    if (value.location === 'NW') {
      obj.NW.push(value.name);
    }
    if (value.location === 'SE') {
      obj.SE.push(value.name);
    }
    if (value.location === 'SW') {
      obj.SW.push(value.name);
    }
  });
  return obj;
}

function optionSemParametro() {
  const obj = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  const RetornaOBJ = AdcionaEspecies(obj);
  return RetornaOBJ;
}
function animaisNE(obj) {
  species.forEach((value) => {
    if (value.location === 'NE') {
      const objetoAnimais = {};
      objetoAnimais[value.name] = [];
      const arrayLion = [];
      const arrayGiraffes = []; if (value.name === 'lions') {
        value.residents.forEach((item) => {
          arrayLion.push(item.name);
          objetoAnimais.lions = arrayLion;
        });
      } if (value.name === 'giraffes') {
        value.residents.forEach((item) => {
          arrayGiraffes.push(item.name);
          objetoAnimais.giraffes = arrayGiraffes;
        });
      } obj.NE.push(objetoAnimais);
    }
  });
}
function montaArrayNW(value, objetoAnimaisNW, arrayTigers, arrayBears, arrayElephants) {
  const objetoAnimais = objetoAnimaisNW;
  if (value.name === 'tigers') {
    value.residents.forEach((item) => {
      arrayTigers.push(item.name);
      objetoAnimais.tigers = arrayTigers;
    });
  } if (value.name === 'bears') {
    value.residents.forEach((item) => {
      arrayBears.push(item.name);
      objetoAnimais.bears = arrayBears;
    });
  } if (value.name === 'elephants') {
    value.residents.forEach((item) => {
      arrayElephants.push(item.name);
      objetoAnimais.elephants = arrayElephants;
    });
  }
}

function animaisNW(obj) {
  species.forEach((value) => {
    if (value.location === 'NW') {
      const objetoAnimais = {};
      objetoAnimais[value.name] = [];
      const arrayTigers = [];
      const arrayBears = [];
      const arrayElephants = [];
      montaArrayNW(value, objetoAnimais, arrayTigers, arrayBears, arrayElephants);
      obj.NW.push(objetoAnimais);
    }
  });
}

function montaArraySE(value, objetoAnimaisSE, arrayPenguins, arrayOtters) {
  const objetoAnimais = objetoAnimaisSE;
  if (value.name === 'penguins') {
    value.residents.forEach((item) => {
      arrayPenguins.push(item.name);
      objetoAnimais.penguins = arrayPenguins;
    });
  } if (value.name === 'otters') {
    value.residents.forEach((item) => {
      arrayOtters.push(item.name);
      objetoAnimais.otters = arrayOtters;
    });
  }
}

function animaisSE(obj) {
  species.forEach((value) => {
    if (value.location === 'SE') {
      const objetoAnimais = {};
      objetoAnimais[value.name] = [];
      const arrayPenguins = [];
      const arrayOtters = [];
      montaArraySE(value, objetoAnimais, arrayPenguins, arrayOtters);
      obj.SE.push(objetoAnimais);
    }
  });
}
function montaArraySW(value, objetoAnimaisSW, arrayFrogs, arraySnakes) {
  const objetoAnimais = objetoAnimaisSW;
  if (value.name === 'frogs') {
    value.residents.forEach((item) => {
      arrayFrogs.push(item.name);
      objetoAnimais.frogs = arrayFrogs;
    });
  } if (value.name === 'snakes') {
    value.residents.forEach((item) => {
      arraySnakes.push(item.name);
      objetoAnimais.snakes = arraySnakes;
    });
  }
}

function animaisSW(obj) {
  species.forEach((value) => {
    if (value.location === 'SW') {
      const objetoAnimais = {};
      objetoAnimais[value.name] = [];
      const arrayFrogs = [];
      const arraySnakes = [];
      montaArraySW(value, objetoAnimais, arrayFrogs, arraySnakes);
      obj.SW.push(objetoAnimais);
    }
  });
}

function includeNames() {
  const obj = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  animaisNE(obj);
  animaisNW(obj);
  animaisSE(obj);
  animaisSW(obj);
  return obj;
}
// function ordernarArray(NEanimais) {
//   let key = '';
//   const AnimaisNE = NEanimais;
//   AnimaisNE.forEach((value) => {
//     key = Object.keys(value);
//     let nomeKey;
//     [nomeKey] = key;
//     value[nomeKey].sort();
//     nomeKey = '';
//   });
//   return AnimaisNE;
// }

// function ordenar(obj) {
//   const objeto = obj;
//   objeto.NE = ordernarArray(objeto.NE);
//   objeto.NW = ordernarArray(objeto.NW);
//   objeto.SW = ordernarArray(objeto.SW);
//   objeto.SE = ordernarArray(objeto.SE);
//   return objeto;
//   // let objetoNW = obj.NW;
//   // let objetoSE = obj.SE;
//   // let objetoSW = obj.SW;
// }

// function escolheSex(obj, sex) {
//   let objeto = obj;
//   if (sex === 'female') {
//     objeto = sexFilterF(objeto);
//   }
//   // if(sex === 'male'){
//   //  objeto = sexFilterM(objeto)
//   // }
//   return objeto;
// }

function getAnimalMap(options) {
  let obj = {};

  if (options.includeNames === false) {
    obj = optionSemParametro();
  }

  if (options.includeNames === true) {
    obj = includeNames();
  }
  // if (options.sex !== '') {

  // }

  // if (options.sorted === true) {
  //   obj = ordenar(obj, options);
  // }
  return obj;
}

// const a = getAnimalMap({ includeNames: false, sorted: true});
function SemParamentroDia() {
  const fraseRepitidaLint = 'Open from 8am until 6pm';
  const fraseReptidaLint10 = 'Open from 10am until 8pm';
  const retorno = {
    Tuesday: fraseRepitidaLint,
    Wednesday: fraseRepitidaLint,
    Thursday: fraseReptidaLint10,
    Friday: fraseReptidaLint10,
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  return retorno;
}
function montaFrase(dia, hora) {
  const diaInformado = dia;
  const frase = {};
  const keys = Object.keys(hora);
  keys.forEach((value) => {
    if (value === diaInformado) {
      frase[diaInformado] = 'Open from 8am until 6pm';
    }
  });
  return frase;
}

function ComParamentro(dia) {
  const hora = data.hours;
  if (dia !== 'Monday') {
    const frase = montaFrase(dia, hora);
    return frase;
  }
  return { Monday: 'CLOSED' };
}

function getSchedule(dayName) {
  const Dia = dayName;
  let retorno;
  if (Dia === undefined) {
    retorno = SemParamentroDia();
  } else {
    retorno = ComParamentro(Dia);
  }
  return retorno;
}
console.log(getSchedule('Sunday'));
function pegaPrimeiraSpecie(ParamentroID) {
  const id = ParamentroID;
  const retorno = employees.find((value) => id === value.id);
  return retorno;
}

function pegaMaisVelho(colaborador) {
  const pessoa = colaborador;
  const retorno = species.find((value) => value.id === pessoa.responsibleFor[0]);
  return retorno;
}

function comparaIdade(velho) {
  const residentes = velho.residents;

  const idades = [];
  let retorno = [];
  residentes.forEach((value) => {
    idades.push(value.age);
  });
  idades.sort((a, b) => b - a);
  residentes.forEach((value) => {
    if (value.age === idades[0]) {
      retorno = [value.name, value.sex, value.age];
    }
  });

  return retorno;
}

function getOldestFromFirstSpecies(id) {
  const idFuncionario = id;
  const primeiraEspecie = pegaPrimeiraSpecie(idFuncionario);
  const OmaisVelho = pegaMaisVelho(primeiraEspecie);
  const DefineMaisVelho = comparaIdade(OmaisVelho);
  return DefineMaisVelho;
}
getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992');

function increasePrices(percentage) { // Math.X(prices.X * (100 + percentage)) / 100;
  data.prices.Adult = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  data.prices.Child = Math.ceil(prices.Child * (100 + percentage)) / 100;
  data.prices.Senior = Math.ceil(prices.Senior * (100 + percentage)) / 100;
  return data.prices;
}

function getEmployeeCoverage(idOrName) {

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
