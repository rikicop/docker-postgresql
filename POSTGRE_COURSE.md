## Curso POSTGRESQL - yt - https://www.youtube.com/watch?v=qw--VYLpxG4 - Freecodecamp channel

## Nombre de Base de datos

```sql
CREATE DATABASE musical_ethnography;
```

## How connect to a DB

# Optional - From the course

psql -h localhost -p 5432 -U ricardo musical_ethnography

# Docker Option

# The -W is an option to force psql to prompt for a password before connecting to a database.

docker exec -it server-postgy-1 psql -U ricardo -W musical_ethnography

# Delete DB - You must handle this command very carefully

Ej: DROP DATABASE test;

# CREATE TABLE - Student Table

the convention in 'psql' is in plural 'students'

```sql
CREATE TABLE students (
  student_id serial PRIMARY KEY,
  stu_name varchar(100) NOT NULL,
  grade integer NOT NULL,
);
```

# CHECK the columns created

```sql
\d students

```

# CREATE NEW COLUMN

```sql
ALTER TABLE students ADD COLUMN grade integer NOT NULL;
```

# CHANGE the name of a column

```sql

ALTER TABLE students
RENAME COLUMN student_id TO stu_id;


```

# Change stu_id to bigserial

```sql
ALTER TABLE students ALTER COLUMN stu_id TYPE bigserial USING stu_id::bigserial;

```

# To allow null values

```sql
ALTER TABLE <table_name> ALTER COLUMN <column_name> DROP NOT NULL;
```

# Insert in to table

```sql
INSERT INTO students (stu_name, grade, enrollment_date)
VALUES ('Ramiro', 2, '2023-1-17');
```

# Select

```sql
SELECT * FROM students;
```

# Create a tables sheet, student_sheet , this shows a realtion between student and the score

# Create a backup from students table

```sql
COPY students TO '/tmp/students.csv' DELIMITER ',' CSV HEADER;
```

```
 docker cp server-postgy-1:/tmp/students.csv C:\Users\Ricardo\Portfolio\docker-postgresql
```

## Generate 1000 records with Mockaroo - video 1:03:25 - mockaroo.com

## Insert several records from a .sql FILE like ex: student.sql

```sql
INSERT INTO students (stu_name, grade, enrollment_date) VALUES ('Martin Rosero', 2, '2023-1-17');
INSERT INTO students (stu_name, grade, enrollment_date) VALUES ('Lucía Albarracín', 2, '2023-1-17');
```

```bash

cat student.sql | docker exec -i server-postgy-1 psql -U ricardo -W musical_ethnography
```

# Explicación

El comando "cat" lee el contenido del archivo "student.sql" y lo envía a la entrada estándar. La entrada estándar se redirige a docker exec -i para enviar los comandos SQL al contenedor de Docker. Luego, los comandos SQL se ejecutan en la base de datos "musical_ethnography" con la conexión del usuario "ricardo".
Ricardo Otálora
que hace -i

El parámetro -i en el comando docker exec indica que se abre una sesión interactiva con el contenedor. Esto permite que los datos enviados a la entrada estándar del contenedor sean utilizados por el proceso que se está ejecutando dentro del contenedor.

En este caso, la combinación de cat student.sql | docker exec -i server-postgy-1 psql -U ricardo -W musical_ethnography envía el contenido del archivo "student.sql" a la entrada estándar del contenedor, y el contenedor usa ese contenido para ejecutar los comandos SQL en la base de datos "musical_ethnography" con la conexión del usuario "ricardo".

## Tabla pieza y tabla
