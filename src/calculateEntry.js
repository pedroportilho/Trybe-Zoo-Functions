const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) obj.child += 1;
    else if (entrant.age < 50) obj.adult += 1;
    else obj.senior += 1;
  });

  return obj;
}

function calculateEntry(entrants) {
  let total = 0;

  if (typeof entrants === 'object' && Object.keys(entrants).length !== 0) {
    const entradas = countEntrants(entrants);
    total += (entradas.child * data.prices.child);
    total += (entradas.adult * data.prices.adult);
    total += (entradas.senior * data.prices.senior);
  }

  return total;
}

module.exports = { calculateEntry, countEntrants };
