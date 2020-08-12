const inquirer = require('inquirer');
// get the client
const mysql = require('mysql2');
const departmentFunctions = require('./utils/department.js');
const employeeFunctions = require('./utils/employee.js')
const roleFunctions = require('./utils/role.js')
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'employees_db',
  password: "Footballv97!"
});

//THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

const newDepartment = 'Hello!';
const createNewDepartmentTest = function () {
  departmentFunctions.addDepartments(connection, newDepartment);
}
createNewDepartmentTest();