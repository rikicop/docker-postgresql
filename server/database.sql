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