const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((x) => x.id === id);
  const idAnimal = employee.responsibleFor[0];
  const especie = data.species.find((x) => x.id === idAnimal);
  let auxIdade = 0;
  const retorno = [];

  especie.residents.forEach((residente) => {
    if (residente.age > auxIdade) {
      auxIdade = residente.age;
      retorno[0] = residente.name;
      retorno[1] = residente.sex;
      retorno[2] = residente.age;
    }
  });

  return retorno;
}

module.exports = getOldestFromFirstSpecies;
