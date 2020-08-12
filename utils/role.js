const cTable = require('console.table');
const viewEmployees = require('./employee');
const { title } = require('process');
const { identity } = require('rxjs');

//view all roles
const viewRoles = function (connection) {
    connection.execute(
        `SELECT 
        title as 'Role',
        roles.id as 'Role ID',
        salary as 'Role Salary',
        departments.name as 'Role Department'
        FROM roles
        INNER JOIN departments
        ON departments.id = departments_id`,
        function (err, results, fields) {
            console.table(results); // results contains rows returned by server
        }
    );
}

//add a role
const addRoles = function (connection, newRoleTitle, newRoleSalary, newRoleDepartmentID) {
    connection.execute(
        `INSERT INTO roles (title, salary, departments_id) VALUES (?,?,?)`,
        [newRoleTitle, newRoleSalary, newRoleDepartmentID],
        function (err, results, fields) {
            if (err) throw err;
            console.log("Your new role has been added!"); // results contains rows returned by server
        }
    );
};

module.exports = { viewRoles, addRoles }