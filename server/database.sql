
/* CLEAN TERMINAL */
perntodo=# \! clear

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    body VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO todo (title, body) VALUES 
('Clean the kitchen', 'Wipe down the counters, mop the floor, and empty the dishwasher.'),
('Take out the trash', 'Empty all the trash cans and take the garbage bags to the curb.'),
('Pay bills', 'Write checks for the rent, electric, and credit card bills.'),
('Do laundry', 'Wash, dry, and fold all dirty clothes and linens.');

SELECT * FROM todo;

/* Query to delete where body is equal to none  */
DELETE FROM todo WHERE body = '';
/* Donde es Nulo */
DELETE FROM todo WHERE title IS NULL;

/* Query to update the title of the todo with id 1 to 'Clean the kitchen' */
UPDATE todo SET title = 'Examp' WHERE todo_id = 8;



 stu_id | stu_name | grade | enrollment_date 
--------+----------+-------+-----------------
      1 | Ramiro   |     2 | 2023-01-17
      2 | Valeria  |     2 | 2023-01-17
      3 | Benjamin |     2 | 2023-01-17