const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let empregado = {};

  data.employees.forEach((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      empregado = employee;
    }
  });

  return empregado;
}

module.exports = getEmployeeByName;
