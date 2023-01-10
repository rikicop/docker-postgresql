const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;

const Pool = require('pg').Pool;
const { Client } = require('pg');

const pool = new Pool({
    user: 'ricardo',
    host: '192.168.0.17',
    database: 'perntodo',
    password: '1234',
    port: 5432,
});

app.use(cors());

/* Get all todos from table */


app.get('/api/todos', (req, res) => {
    pool.query('SELECT * FROM todo ORDER BY todo_id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

// Check connection to database
const client = new Client({
    user: 'ricardo',
    host: '192.168.0.17',
    database: 'perntodo',
    password: '1234',
    port: 5432,
});


client.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
    } else {
        console.log('Connected to the database');
    }
});


app.listen(3000, () => {
    console.log(`Server is runn  ${port}.`);
}
);

