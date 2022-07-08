'use strict';

function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee;

  for (const employee in employees) {
    const tasks = employees[employee];
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = employee;
    }
  }

  return bestEmployee;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);
