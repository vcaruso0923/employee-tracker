const cTable = require('console.table');

//view all employees
const viewEmployees = function (connection) {
    connection.query(
        `SELECT
        employees.first_name as 'First Name',
            employees.last_name as 'Last Name',
            departments.name as 'Department',
            roles.title as 'Role',
            roles.salary as 'Salary',
            CONCAT(managers.first_name, ' ', managers.last_name) AS 'Manager'
        FROM employees
        LEFT JOIN roles
        INNER JOIN departments
        ON departments.id = departments_id
        ON roles.id = roles_id
        LEFT JOIN employees managers
        ON managers.id = employees.manager_id`,
        function (err, results, fields) {
            if (err) throw err;
            console.table(results); // results contains rows returned by server
        }
    );
}

//add employee

//update employee role

module.exports = viewEmployees