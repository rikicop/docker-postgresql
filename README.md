##

mkdir server

cd server

## Create package.json file

npm init -y

## Install Express, Postgres and Cors

npm install express pg cors

## Install Nodemon. this will restart the server when we make changes to the code

npm i -D nodemon

## Create a file called index.js

## Edit package.json file and add the following line to the scripts section

"start": "nodemon --inspect index.js" ## This will start the server

# --inspect is used to debug the code

## Index.js file

```js
const express = require("express");
const app = express();
const cors = require("cors");

const port = 5000;

const { Pool } = require("pg");

const pool = new Pool({
  user: "",
  host: "",
  database: "",
  password: "",
  port: 5432,
});

app.use(cors());

app.get("/api/get", (req, res) => {
  pool.query('SELECT * FROM public."Users"', (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result.rows);
  });
});

app.listen(5000, () => {
  console.log(`Server is running on port ${port}.`);
});
```

## POSTGRES Dockerized !!!

```bash
version: "3.9"
services:
  myserver:
    build: .
    ports:
      - "3000:3000"
    links:
      - postgy
    volumes:
      - .:/home/app
      # - /home/app
  postgy:
    image: postgres
    ports:
      - "5432:5432"
    environment:
      POSTGRES_PASSWORD: 1234
      POSTGRES_USER: ricardo
      POSTGRES_DB: perntodo
    volumes:
      - /var/lib/postgresql/data
  pgadmin:
    image: dpage/pgadmin4
    ports:
      - "5050:80"
    environment:
      PGADMIN_DEFAULT_EMAIL: ruperto1@protonmail.com
      PGADMIN_DEFAULT_PASSWORD: 1234
    links:
      - postgy
volumes:
  postgres-data:

```

## RUN THE pgAdmin

http://localhost:5050

Fill the form with the following data:

ruperto1@protonmail.com
password: 1234

## Create a new server

Name: perntodo # Puede ser cualquier nombre

Connection:

host: 192.168.0.17
port: 5432
username: ricardo
password: 1234

## Borrar proceso que ocupa puerto

netstat -ano|findstr "PID :9229"

taskkill /PID 9229 /F

## Run Postgres CLI

docker exec -it server-postgy-1 psql -U ricardo -W perntodo

psw: 1234

## Desactivar pgAdmin

Primero ve a cotainer desde docker desktop, ve a la imagen de pgAdmin y detenla.

## Create the .gitignore file

## Initialize the git repository

## **FRONTEND**

## With Next.js and Tailwind CSS

npx create-next-app@latest frontend --typescript --eslint

## Send post request to the server

```js
function InputTodo() {
    const [description, setDescription] = useState("")
    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = { body: description }
            const response = await fetch("http://localhost:3000/api/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            window.location = "/"
            console.log("response:", response)
        } catch (err) {
            console.error(err.message)
        }
    }

    <form className="flex justify-center mt-5" onSubmit={onSubmitForm}>
                <input type="text"
                       className="border-black border-2"
                       value={description}
                       onChange={e => setDescription(e.target.value)}
                />
                ........
```
