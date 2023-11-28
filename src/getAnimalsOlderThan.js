const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let correct = true;
  const especie = data.species.find((x) => x.name === animal);

  especie.residents.forEach((residente) => {
    if (residente.age < age) correct = false;
  });

  return correct;
}

module.exports = getAnimalsOlderThan;
