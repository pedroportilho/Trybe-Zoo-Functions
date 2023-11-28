const data = require('../data/zoo_data');

function listaSemNomes() {
  const obj = { NE: [], NW: [], SE: [], SW: [] };

  data.species.forEach((elemento) => obj[elemento.location].push(elemento.name));

  return obj;
}

function listaComNomes(sexo) {
  const obj = { NE: [], NW: [], SE: [], SW: [] };

  data.species.forEach((elemento) => {
    const animal = {};
    const aux = [];
    let auxRes = elemento.residents;

    if (sexo) auxRes = auxRes.filter((fil) => fil.sex === sexo);
    auxRes.forEach((res) => aux.push(res.name));

    animal[elemento.name] = aux;
    obj[elemento.location].push(animal);
  });

  return obj;
}

function filtroDeRequisitos(sexo, sorted) {
  const retorno = listaComNomes(sexo);

  if (sorted) {
    retorno.NE.forEach((elemento) => Object.values(elemento)[0].sort());
    retorno.NW.forEach((elemento) => Object.values(elemento)[0].sort());
    retorno.SE.forEach((elemento) => Object.values(elemento)[0].sort());
    retorno.SW.forEach((elemento) => Object.values(elemento)[0].sort());
  }

  return retorno;
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) return listaSemNomes();
  if (options.includeNames) return filtroDeRequisitos(options.sex, options.sorted);
}

module.exports = getAnimalMap;
