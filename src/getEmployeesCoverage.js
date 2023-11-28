const data = require('../data/zoo_data');

const nomes = [];
const sobrenomes = [];
const ids = [];

data.employees.forEach((e) => {
  nomes.push(e.firstName);
  sobrenomes.push(e.lastName);
  ids.push(e.id);
});

function getEmployee(e) {
  const retorno = {
    id: e.id,
    fullName: `${e.firstName} ${e.lastName}`,
    species: [],
    locations: [],
  };

  data.species.forEach((especie) => {
    if (e.responsibleFor.includes(especie.id)) {
      retorno.species.push(especie.name);
      retorno.locations.push(especie.location);
    }
  });

  return retorno;
}

function nameCheck(obj) {
  let empregado;

  data.employees.forEach((employee) => {
    if (employee.firstName === obj.name || employee.lastName === obj.name) {
      empregado = getEmployee(employee);
    }
  });

  return empregado;
}

function idCheck(obj) {
  let empregado;

  data.employees.forEach((employee) => {
    if (employee.id === obj.id) {
      empregado = getEmployee(employee);
    }
  });

  return empregado;
}

function todosEmpregados() {
  const empregados = [];

  data.employees.forEach((employee) => {
    empregados.push(getEmployee(employee));
  });

  return empregados;
}

function getEmployeesCoverage(obj) {
  let retorno;

  if (obj === undefined) {
    retorno = todosEmpregados();
  } else if (nomes.includes(obj.name) || sobrenomes.includes(obj.name)) {
    retorno = nameCheck(obj);
  } else if (ids.includes(obj.id)) {
    console.log('entrou na checagem do id');
    retorno = idCheck(obj);
  } else {
    throw new Error('Informações inválidas');
  }

  return retorno;
}

module.exports = getEmployeesCoverage;
