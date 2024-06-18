-- Active: 1716852017574@@127.0.0.1@5432@futscript
CREATE DATABASE futscript;
\c futscript;

CREATE TABLE usuarios (id SERIAL PRIMARY KEY, username VARCHAR(250) NOT NULL, password VARCHAR(250) NOT NULL);

CREATE TABLE equipos (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE posiciones (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE jugadores (id SERIAL PRIMARY KEY, id_equipo INT REFERENCES equipos(id), name VARCHAR(250), position INT REFERENCES posiciones(id));

INSERT INTO posiciones values
(DEFAULT, 'delantero'),
(DEFAULT, 'centrocampista'),
(DEFAULT, 'defensa'),
(DEFAULT, 'portero');

SELECT * FROM posiciones;

INSERT INTO equipos values
(DEFAULT, 'Colo Colo'),
(DEFAULT, 'Universidad de Chile'),
(DEFAULT, 'River Plate'),
(DEFAULT, 'Boca Juniors'),
(DEFAULT, 'Manchester United'),
(DEFAULT, 'Machester City'),
(DEFAULT, 'Barcelona'),
(DEFAULT, 'Real Madrid');

SELECT * FROM equipos;

drop table jugadores;
drop table equipos;
drop table usuarios;


INSERT INTO jugadores (id_equipo, name, position)
VALUES
  -- Colo Colo (Team ID 1)
  (1, 'Gabriel Suazo', 3),
  (1, 'Vicente Pizarro', 2),
  (1, 'Juan Martín Lucero', 1),
  -- Universidad de Chile (Team ID 2)
  (2, 'Ronnie Fernández', 1),
  (2, 'Marcelo Díaz', 2),
  (2, 'Luis Casanova', 3),
  -- River Plate (Team ID 3)
  (3, 'Franco Armani', 4),
  (3, 'Enzo Fernández', 2),
  (3, 'Milton Casco', 3),
  -- Boca Juniors (Team ID 4)
  (4, 'Agustín Rossi', 4),
  (4, 'Sebastián Villa', 1),
  (4, 'Alan Varela', 2),
  -- Manchester United (Team ID 5)
  (5, 'David de Gea', 4),
  (5, 'Jadon Sancho', 2),
  (5, 'Lisandro Martínez', 3),
  -- Manchester City (Team ID 6)
  (6, 'Ederson Moraes', 4),
  (6, 'Kevin De Bruyne', 2),
  (6, 'João Cancelo', 3),
  -- Barcelona (Team ID 7)
  (7, 'Marc-André ter Stegen', 4),
  (7, 'Pedri', 2),
  (7, 'Ronald Araújo', 3),
  -- Real Madrid (Team ID 8)
  (8, 'Thibaut Courtois', 4),
  (8, 'Federico Valverde', 2),
  (8, 'David Alaba', 3);

SELECT * FROM jugadores;

--nombre del jugadores y su posición
-- SELECT j.name, p.name AS "posicion"
-- FROM jugadores j
-- INNER JOIN posiciones p 
-- ON p.id = j.position
-- WHERE j.id_equipo = 1
-- ORDER BY j.name;

-- INSERT INTO usuarios VALUES (DEFAULT, 'admin', '1234');

SELECT * FROM usuarios;