INSERT INTO departments 
    (name)
VALUES
    ('Sales'),
    ('Engineering');


INSERT INTO roles
    (title, salary, departments_id)
VALUES
    ('Engineer Manager', 150000, 2),
    ('Engineer', 80000, 2),
    ('Sales Correspondent', 80000, 1);


INSERT INTO employees
  (first_name, last_name, roles_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, NULL),
  ('Virginia', 'Woolf', 2, 1),
  ('Piers', 'Gaveston', 2, 1),
  ('Charles', 'LeRoi', 2, 1),
  ('Katherine', 'Mansfield', 2, 1),
  ('Dora', 'Carrington', 3, 1),
  ('Edward', 'Bellamy', 3, 1),
  ('Montague', 'Summers', 3, 1),
  ('Octavia', 'Butler', 3, 1),
  ('Unica', 'Zurn', 3, 1);