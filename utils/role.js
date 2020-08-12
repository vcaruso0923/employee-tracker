const cTable = require('console.table');
const viewEmployees = require('./employee');
const { title } = require('process');
const { identity } = require('rxjs');

//view all roles
const viewRoles = function (connection) {
    connection.query(
        `SELECT 
        title as 'Role',
        roles.id as 'Role ID',
        salary as 'Role Salary',
        departments.name as 'Role Department'
        FROM roles
        INNER JOIN departments`,
        function (err, results, fields) {
            console.table(results); // results contains rows returned by server
        }
    );
}

//add a role

module.exports = viewRoles