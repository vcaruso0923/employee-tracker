const cTable = require('console.table');

//view all departments
const viewDepartments = function (connection) {
    connection.execute(
        `SELECT 
        name as 'Department Name',
        id as 'Department ID'
        FROM departments`,
        function (err, results, fields) {
            if (err) throw err;
            console.table(results); // results contains rows returned by server
        }
    );
};


//add department
const addDepartments = function (connection, newDepartment) {
    connection.execute(
        `INSERT INTO departments (name) VALUES (?)`,
        [newDepartment],
        function (err, results, fields) {
            if (err) throw err;
            console.log("Your department has been added!"); // results contains rows returned by server
        }
    );
};

module.exports = { viewDepartments, addDepartments }