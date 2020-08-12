const inquirer = require('inquirer');
// get the client
const mysql = require('mysql2');
const departmentFunctions = require('./utils/department.js');
const employeeFunctions = require('./utils/employee.js')
const roleFunctions = require('./utils/role.js')
const cTable = require('console.table');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'employees_db',
  password: "Footballv97!"
});

//THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

const mainMenu = function () {
  inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'What would you like to do?',
      choices: ['View all employees', 'View all departments', 'View all roles', 'Add a department', 'Add a Role', 'Add an employee', 'Update an employee role', 'Exit']
    }
  ])

    .then(({ menu }) => {
      if (menu === 'View all employees') {
        employeeFunctions.viewEmployees(connection);
        return mainMenu();
      } else if (menu === 'View all departments') {
        departmentFunctions.viewDepartments(connection);
        return mainMenu();
      } else if (menu === 'View all roles') {
        roleFunctions.viewRoles(connection)
        return mainMenu();
      } else if (menu === 'Add a department') {
        addDepartmentHandler();
        return mainMenu();
      } else if (menu === 'Add a Role') {
        addRoleHandler();
        return mainMenu();
      } else if (menu === 'Add an employee') {
        addEmployeeHandler()
        return mainMenu();
      } else if (menu === 'Update an employee role') {
        updateEmployeeHandler();
        return mainMenu();
      } else if (menu === 'Exit') {
        console.log("Goodbye!")
        return
      }
    })
    .catch(err => {
      console.log(err)
    })
}

//add dptm
const addDepartmentHandler = function () {
  inquirer.prompt([

  ])
    .then(({ returnthingything }) => {

    })
    .catch(err => {
      console.log(err)
    })
}

//add role
const addRoleHandler = function () {
  inquirer.prompt([

  ])
    .then(({ returnthingything }) => {

    })
    .catch(err => {
      console.log(err)
    })
}

//add employee
const addEmployeeHandler = function () {
  inquirer.prompt([

  ])
    .then(({ returnthingything }) => {

    })
    .catch(err => {
      console.log(err)
    })
}

//update employee's role
const updateEmployeeHandler = function () {
  inquirer.prompt([

  ])
    .then(({ returnthingything }) => {

    })
    .catch(err => {
      console.log(err)
    })
}

mainMenu();