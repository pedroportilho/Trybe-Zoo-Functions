const data = require('../data/zoo_data');

function horarioAnimais(animal) {
  const especie = data.species.find((x) => x.name === animal);
  const diasDisponiveis = especie.availability;
  console.log(especie.name);
  return diasDisponiveis;
}

function horarioDias(dias) {
  const retorno = {};
  const dia = data.hours[dias];

  if (dias === 'Monday') {
    retorno.officeHour = 'CLOSED';
    retorno.exhibition = 'The zoo will be closed!';
  } else {
    retorno.officeHour = `Open from ${dia.open}am until ${dia.close}pm`;
    retorno.exhibition = [];
    data.species.forEach((animal) => {
      if (animal.availability.includes(dias)) retorno.exhibition.push(animal.name);
    });
  }

  return retorno;
}

function todosHorarios(dias) {
  const retorno = {};

  dias.forEach((dia) => {
    retorno[dia] = horarioDias(dia);
  });

  return retorno;
}

function getSchedule(scheduleTarget) {
  let retorno;
  const dias = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const animais = [];
  data.species.forEach((animal) => animais.push(animal.name));

  if (animais.includes(scheduleTarget)) retorno = horarioAnimais(scheduleTarget);
  else if (dias.includes(scheduleTarget)) {
    retorno = {};
    retorno[scheduleTarget] = horarioDias(scheduleTarget);
  } else retorno = todosHorarios(dias);

  return retorno;
}

module.exports = getSchedule;
