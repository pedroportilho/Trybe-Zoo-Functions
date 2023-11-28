const data = require('../data/zoo_data');

function isManager(id) {
  let resposta = false;

  data.employees.forEach((employee) => {
    if (employee.managers.includes(id)) {
      resposta = true;
    }
  });

  return resposta;
}

function getRelatedEmployees(managerId) {
  let nomeCompleto;
  const array = [];

  if (isManager(managerId)) {
    data.employees.forEach((employee) => {
      if (employee.managers.includes(managerId)) {
        nomeCompleto = `${employee.firstName} ${employee.lastName}`;
        array.push(nomeCompleto);
      }
    });
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return array;
}

module.exports = { isManager, getRelatedEmployees };
