const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const array = [];

  ids.forEach((id) => {
    const especie = data.species.find((x) => x.id === id);
    array.push(especie);
  });

  return array;
}

module.exports = getSpeciesByIds;
