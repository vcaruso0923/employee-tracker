const cTable = require('console.table');

//view all departments
const viewDepartments = function (connection) {
    connection.query(
        `SELECT 
        name as 'Department Name',
        id as 'Department ID'
        FROM departments`,
        function (err, results, fields) {
            if (err) throw err;
            console.table(results); // results contains rows returned by server
        }
    );
}


//add department

module.exports = viewDepartments