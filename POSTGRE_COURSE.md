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