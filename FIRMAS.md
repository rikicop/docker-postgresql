# How start project

##Connect to DB

\c campaign

##Crear Tabla

CREATE TABLE firmas(
cc TEXT,
name TEXT,
valid_signature BOOLEAN,
verified_signature BOOLEAN,
problem_type TEXT,
origin_type TEXT
);

# Create component , I'll call it : InputFirma

## Me da error en este puerto: 192.168.0.17.

Posiblemente por que estoy usando otro tipo de ip en el cell
