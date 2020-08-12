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
        setTimeout(mainMenu, 1000);
      } else if (menu === 'View all departments') {
        departmentFunctions.viewDepartments(connection);
        setTimeout(mainMenu, 1000);
      } else if (menu === 'View all roles') {
        roleFunctions.viewRoles(connection)
        setTimeout(mainMenu, 1000);
      } else if (menu === 'Add a department') {
        addDepartmentHandler();
      } else if (menu === 'Add a Role') {
        addRoleHandler();
      } else if (menu === 'Add an employee') {
        addEmployeeHandler()
      } else if (menu === 'Update an employee role') {
        updateEmployeeHandler();
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
    {
      type: 'text',
      name: 'name',
      message: 'What is the name of this department?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a department name!');
          return false;
        }
      }
    }
  ])
    .then(({ name }) => {
      departmentFunctions.addDepartments(connection, name);
      setTimeout(mainMenu, 1000);
    })
    .catch(err => {
      console.log(err)
    })
}

//add role
const addRoleHandler = function () {
  inquirer.prompt([
    {
      type: 'text',
      name: 'title',
      message: 'What is the title of this role?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a role title!');
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'salary',
      message: 'What is the salary of this role?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a role salary!');
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'department_id',
      message: 'What is the ID of the department this role belongs to?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a department ID!');
          return false;
        }
      }
    }
  ])
    .then(({ title, salary, department_id }) => {
      roleFunctions.addRoles(connection, title, salary, department_id);
      setTimeout(mainMenu, 1000);
    })
    .catch(err => {
      console.log(err)
    })
}

//add employee
const addEmployeeHandler = function () {
  inquirer.prompt([
    {
      type: 'text',
      name: 'first_name',
      message: 'What is the first name of this employee?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a name!');
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'last_name',
      message: 'What is the last name of this employee?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a name!');
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'role_id',
      message: 'What is the ID of the role this employee is in?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a role ID!');
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'manager_id',
      message: 'What is the ID of this employees manager? (Leave blank if N/A)',
    }
  ])
    .then(({ first_name, last_name, role_id, manager_id }) => {
      employeeFunctions.addEmployees(connection, first_name, last_name, role_id, manager_id);
      setTimeout(mainMenu, 1000);
    })
    .catch(err => {
      console.log(err)
    })
}

//update employee's role
const updateEmployeeHandler = function () {
  inquirer.prompt([
    {
      type: 'text',
      name: 'employee_id',
      message: 'What is the ID of the employee you want to make changes to?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter an employee ID!');
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'role_id',
      message: 'What is the ID of the role you want to assign this employee to?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a role ID!');
          return false;
        }
      }
    },
  ])
    .then(({ employee_id, role_id }) => {
      employeeFunctions.updateEmployeeRole(connection, employee_id, role_id)
      setTimeout(mainMenu, 1000);
    })
    .catch(err => {
      console.log(err)
    })
}

mainMenu();