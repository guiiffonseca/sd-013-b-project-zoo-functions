const { species, prices } = require('./data');
const data = require('./data');


function getSpeciesByIds(...ids) {
  // data.employees[0].managers[0]

  const array = [];
  ids.forEach((id) => array.push(data.species.find((specie) => specie.id === id)));
  return array;

}

function getAnimalsOlderThan(animal, age) {

    // species name residents 
    //Adicione seu código aqui
    const especies = data.species; 
    const targetSpecie = especies.find((especie) => especie.name === animal);
    const residentes = targetSpecie.residents;
    return residentes.every((residente) => residente.age >= age);
      
    
   console.log(targetSpecie);

  }
 


function getEmployeeByName(namea) {
  if (!namea) {
    return {}; 
  }
const procura = data.employees.find((person) => person.firstName === namea || person.lastName === namea);
return procura;

 
}

// data.employees
getEmployeeByName("Emery");



function createEmployee(personalInfo, associatedWith) {
  //olha o arquivo data 
  // 1 cria objeto 
  const destino = {}
  //2  executa a acao
  const clone = Object.assign(destino, personalInfo, associatedWith); 
  return clone;
  
}

function isManager(id) {

 const persona = data.employees; 
 return persona.some((person) => person.managers[0] === id || person.managers[1] === id);

//  const verifyEven = (number) => number % 2 === 0;

}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({id, firstName, lastName, managers, responsibleFor })
 
  
  // const newEmploy = { 
  //   id: `${id}`,
  //   firstName: `${firstName}`,
  //   lastName: `${lastName}`,
  //   managers:  [],
  //   responsibleFor: [],
  // }
  //    data.employees[8] = newEmploy

   
 // seu código aqui
 //olha o arquivo data 
 //olha o arquivo teste
// 6. IMPLEMENTE A FUNÇÃO addEmployee
// A função irá adicionar uma nova pessoa 
// colaboradora ao array employees, 
// presente no arquivo data.js.
// O que será avaliado
// Adiciona um funcionário no fim da lista
// {
//   id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//   firstName: 'Nigel',
//   lastName: 'Nelson',
//   managers: [burlId, olaId],
//   responsibleFor: [lionId, tigersId],
// },
 








}

function countAnimals(species) {
  // seu código aqui
  let procuraA = data.species; 
  if (!species) {
    
    return procuraA.reduce((acc, { residents, name }) => {
       acc[name] = residents.length;
       return acc;
    }, {})
  }  return procuraA.find(({name}) => name === species).residents.length;





       //elemeto .residents;lengtg
      // procura 1 animall que e igual e retonra o nome e a quantidade 
        // console.log(countAnimals());

    //  const newArray = procuraA.map((elemento) => `${elemento.name}`)
    //  console.log(newArray);
    //  newArray


    // 
    //  if (!species) {
    //   console.log(procuraA.find(({name}) => name === species).residents.length) 
    //  } 
      
    //  countAnimals("lions");
  
  //  const {species: allSpecies } = data; 
  //  return species;
  //   ? allSpecies.find(({name}) => name === species).residents.length;
  //   : allSpecies.reduce({specieCounter, name, residents }) => 
  //   ({...specieCounter, [name]: residents.length }),
  //   {});




 
  // 
  // const newArrayP = procuraA.map((elemento) => `${elemento.popularity}`)
  // const newObject = {};
  // newObject.nome = newArray.find(([element]) => element);
  // newObject.numero = newArrayP.find(([element]) => element);
 


  // const newArray = procuraA.map((elemento) => `${elemento.name} ${elemento.popularity}`) deu certo 
  // newArray = procuraA.map((elemento) => `${[elemento.popularity]}`)
  // newObject.numero = newArray.find(([element]) => element.popularity);
  // return procura.map((elemento) => `${[elemento.name]}`))
  // ver qual pode retornar um objeto 
  //  data.species.find((specie) => specie === species);
  } 
  //
  // procura.filter((especie) => especie.name === species)
  // return data.species.residents.length;
// 7. IMPLEMENTE A FUNÇÃO countAnimals
// Esta função é responsável por contabilizar a quantidade de animais.
// Observações técnicas
// Sem parâmetros, retorna um objeto
// Com o nome de uma espécie de animal, retorna um número
// O que será avaliado
// Sem parâmetros, retorna animais e suas quantidades
// {
//   'lions': 4,
//   'tigers': 2,
//   'bears': 3,
//   'penguins': 4,
//   'otters': 4,
//   'frogs': 2,
//   'snakes': 2,
//   'elephants': 4,
//   'giraffes': 6
// };
// Com o nome de uma espécie de animal, retorna somente a quantidade




function calculateEntry(entrants = {}) {
    const { prices } = data;
    const entradas = Object.keys(entrants);
    if (!entrants || !Object.entries(entrants).length) {
   
     return 0;
    }
   
   return (prices.Adult * entrants.Adult || 0) + (prices.Child * entrants.Child || 0) + (prices.Senior * entrants.Senior || 0);
}
    //voltar aqui se nao der certo 
    // return entradas.reduce((acc, atual) => (acc + (prices[atual] * entrants[atual])), 0);
    // ver na monitoria  

 


function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
   const conograma = {
    'Tuesday': 'Open from 8am until 6pm',
    'Wednesday': 'Open from 8am until 6pm',
    'Thursday': 'Open from 10am until 8pm',
    'Friday': 'Open from 10am until 8pm',
    'Saturday': 'Open from 8am until 10pm',
    'Sunday': 'Open from 8am until 8pm',
    'Monday': 'CLOSED'
  };
  if (!dayName || !Object.entries(dayName).length) {
     // Sem parâmetros, retorna um cronograma legível para humanos
    
      return conograma;
  } 
    //  const achaDia = Object.entries(conograma);
    //  console.log(conograma['Friday']);
     return { [dayName]: conograma[dayName]} 

    //  conograma.find((element) => Object.keys(element === dayName));
    //  console.log(achaDia);
      //  conograma.reduce((acc, current))
     // Se um único dia for passado, retorna somente este dia em um formato legível para humanos
}
     
      // getSchedule('Friday');
    


function getOldestFromFirstSpecies(id) {

const get = data.employees.find((element) => element.id === id).responsibleFor[0];
const filtraVelho =  species.find((ele) => ele.id === get).residents.sort((a, b) => b.age - a.age)


// console.log(filtraVelho[1]);  
return Object.values(filtraVelho[0]);

}


//Felipe Guto / Cajueiro 
function increasePrices(percentage) {
  // seu código aqui
  // return Object.values(prices.Adult * percentage / 100);
  Object.keys(prices).forEach((price) => {
    let valorAjustado = prices[price];

    valorAjustado = Math.ceil((valorAjustado + (percentage / 100) * valorAjustado) * 100) / 100;
    prices[price] = valorAjustado;
   
  }  )
  



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


// data.employees.forEach((ele) => ele.firstName)
// data.employees.find((ele) => ele) passei no log e 
// fro each dentro 
// console.log(procura);
//data.employees[0].firstName