/* eslint-disable max-lines-per-function */
/* eslint-disable editorconfig/editorconfig */
const data = require('./data');
const assert = require('assert');
console.clear();

function allDays() {
  const chaves = Object.keys(data.hours);
    const horario = {};
    chaves.forEach((dia) => {
      if (data.hours[dia].open === 0 && data.hours[dia].close === 0) {
        horario[`${dia}`] = 'CLOSED';
      } else {
        horario[`${dia}`] = `Open from ${data.hours[dia].open}am until ${data.hours[dia].close - 12}pm`;
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
    [dayName]: `${days[dayName]}`;
  }

}

console.log(getSchedule('Monday'));

