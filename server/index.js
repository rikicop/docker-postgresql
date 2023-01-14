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

//middleware
app.use(cors());

app.use(express.json());

/* Get all todos from table */


app.get('/api/todos', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo');
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

/* Create a todo */

app.post('/api/todos', async (req, res) => {
    try {

        const { body, title } = req.body;

        const newTodo = await pool.query(
            'INSERT INTO todo (body,title) VALUES ($1,$2) RETURNING *',
            [body, title]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


/* Get a todo */
app.get('/api/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
            id,
        ]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

/* Update a todo */
app.put('/api/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { body, title } = req.body;
        const updateTodo = await pool.query(
            'UPDATE todo SET body = $1, title = $2 WHERE todo_id = $3',
            [body, title, id]
        );
        res.json('Todo was updated!');
    } catch (err) {
        console.error(err.message);
    }
});

/* Delete a todo */
app.delete('/api/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            'DELETE FROM todo WHERE todo_id = $1',
            [id]
        );
        res.json('Todo was deleted!');
    } catch (err) {
        console.error(err.message);
    }
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

