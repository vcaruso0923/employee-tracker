DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE departments (
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE roles (
id INTEGER NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
departments_id INTEGER,
CONSTRAINT fk_departments FOREIGN KEY (departments_id) REFERENCES departments(id),
PRIMARY KEY (id)
);

CREATE TABLE employees (
id INTEGER NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
roles_id INTEGER,
manager_id INTEGER,
CONSTRAINT fk_roles FOREIGN KEY (roles_id) REFERENCES roles(id),
CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id),
PRIMARY KEY (id)
);