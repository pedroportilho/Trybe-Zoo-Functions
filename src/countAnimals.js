const data = require('../data/zoo_data');

function contagemEspecifica(animal) {
  const especie = data.species.find((x) => x.name === animal.specie);
  let retorno = 0;

  especie.residents.forEach((residente) => {
    if (animal.sex === undefined || animal.sex === residente.sex) retorno += 1;
  });

  return retorno;
}

function countAnimals(animal) {
  let retorno;

  if (animal === undefined) {
    retorno = {};
    data.species.forEach((especie) => {
      retorno[especie.name] = especie.residents.length;
    });
  } else {
    retorno = contagemEspecifica(animal);
  }

  return retorno;
}

countAnimals();

module.exports = countAnimals;
