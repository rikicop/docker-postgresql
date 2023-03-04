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

```sql
CREATE TABLE sheets (
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
 docker cp server-postgy-1:/tmp/students.csv C:\Users\Ricardo\Portfolio\docker-postgresql\server
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

## Tabla scores , otros ejemplos con SELECT ....

```sql
SELECT work_title FROM scores;
```

      work_title

---

Rondo Alla Turca
Air on the G String
Fur Elise
Nocturne in Eb Major
Summertime
Giant Steps
(6 rows)

```sql
SELECT  FROM scores;
```

--
(6 rows)

# ORDER BY - 1:16:20

```sql
SELECT * FROM scores ORDER BY composer;

SELECT * FROM scores ORDER BY composer ASC;

SELECT * FROM scores ORDER BY composer DESC;
```

# DISTINCT

```sql
SELECT DISTINCT composer from scores ORDER BY composer ASC;
```

# WHERE AND - 1:22:00

```sql
SELECT work_title from scores WHERE score_genre='Jazz' ORDER BY composer ASC;
```

```sql
SELECT work_title from scores WHERE score_genre='Classical' AND composer='Beethoven' ORDER BY composer ASC;
```

### OR

```sql
SELECT work_title from scores WHERE score_genre='Classical' AND (composer='Beethoven' OR composer='Bach') ORDER BY composer ASC;
```

```sql
SELECT work_title from scores WHERE score_genre='Classical' AND
(composer='Beethoven' OR composer='Bach') AND score_grade=2  ORDER BY composer ASC;
```

# Comparation Operators - 1:25:30

# LIMIT - OFFSET - FETCH - 1:29:36

```sql
SELECT * FROM scores LIMIT 2;
```

# OFFSET - Ej: The 5 after

```sql
SELECT * FROM scores OFFSET 3 LIMIT 2;
```

# FETCH es como LIMIT

```sql
SELECT * FROM scores OFFSET 3 FETCH FIRST 5 ROW ONLY;
```

# IN - 1:32:40 - instead of so many OR...

```sql
SELECT * FROM scores WHERE composer IN ('Beethoven','Bach');
```

# Between - for range

```sql
SELECT * FROM students WHERE enrollment_date BETWEEN '2023-02-01' AND '2023-02-06';
```

# LIKE , ILIKE - buscar por patrones de caracteres -1:38:06

```sql
SELECT * FROM scores WHERE score_genre LIKE '%J%';

SELECT * FROM scores WHERE score_genre LIKE 'J%'

SELECT * FROM scores WHERE score_genre LIKE 'J___%'
```

score_id | composer | work_title | score_genre | score_grade
----------+----------+-------------+-------------+-------------
5 | Gershwin | Summertime | Jazz |
6 | Coltrane | Giant Steps | Jazz |

----- 1:43:00 -----

## ILIKE - Para no discriminar entre mayús o minús

```sql
SELECT * FROM students WHERE stu_name ILIKE '%lucia%';
```

## UPDATE WHERE IS NULL

```sql
UPDATE students SET polif='n' WHERE polif IS NULL;
```

# GROUP BY

```sql
SELECT polif, COUNT(*) FROM students GROUP BY polif;
```

polif | count
-------+-------
n | 9
s | 4
(2 rows)

# HAVING - Is a filter

```sql
SELECT polif FROM students GROUP BY polif HAVING COUNT(*) >5 ORDER BY polif;
```

```sql
SELECT polif,COUNT(*) FROM students GROUP BY polif HAVING COUNT(*) >5 ORDER BY polif;

 polif | count
-------+-------
 n     |     9
```

## For more info, check for "aggregate functions" in postgres docs(math, statistics...)

# CREATE table and insert massive data with mockaroo.com -yt - 1:53:33 - it generates an .sql

# Creación de Tabla Estudiante-Pieza

```sql
CREATE TABLE stud_pieza(
  id SERIAL PRIMARY KEY,
  nomb_stud TEXT NOT NULL,
  pieza TEXT NOT NULL,
  objetivos TEXT,
  fragmentos TEXT,
  observaciones TEXT
);
```

# IMPORT .Csv to postgresql table docker

## Consideraciones

1. El .csv debe tener un Header Ex:
   estudiante,pieza,objetivo,fragmento,observaciones
   Esther,"Etude N1, Gamme de Sol Majeur,Debutante, Hervé y Pouillard",Simultaneidad,1-8,"Trabajó simunltaneidad del compás 7, corrigiendo las notas y el buen uso de la digitación."

2. Borrar espacios en blanco despues pues de los registros es decir hacer backspace hasta llegar al registro

3. Tener en cuenta el utf-8, corrí un UtfConverter.js para corregir.

Si el registro es largo y tiene ,: "Clair Martin, Debutante, Herv y Pouillard",Simultaneidad,1-4,"

```bash
docker cp estupie.csv server-postgy-1:/tmp
```

```sql
COPY stud_pieza(nomb_stud, pieza, objetivos, fragmentos, observaciones)
FROM '/path/to/csv/file.csv' DELIMITER ',' CSV HEADER;
```

# MAX - 1:56:49
