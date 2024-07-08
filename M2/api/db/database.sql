Drop schema if exists `pokemon`;
Create schema `pokemon`;
use `pokemon`;



-- Tabela para armazenar informações sobre tipos de Pokemon
DROP TABLE IF EXISTS `Tipo`;
CREATE TABLE `Tipo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Tabela para armazenar informaçes sobre Pokemon
DROP TABLE IF EXISTS `Pokemon`;
CREATE TABLE `Pokemon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  `tipo1` int(11) NOT NULL,
  `tipo2` int(11) ,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`tipo1`) REFERENCES `Tipo`(`id`),
  FOREIGN KEY (`tipo2`) REFERENCES `Tipo`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Tabela para armazenar informações sobre treinadores
DROP TABLE IF EXISTS `Trainer`;
CREATE TABLE `Trainer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Tabela para armazenar informações sobre times
DROP TABLE IF EXISTS `Team`;
CREATE TABLE `Team` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  `id_trainer` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_trainer`) REFERENCES `Trainer`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



-- Tabela para armazenar informações sobre batalhas
DROP TABLE IF EXISTS `Battles`;
CREATE TABLE `Battles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `team1` int(11) NOT NULL,
  `team2` int(11) NOT NULL,
  `winner` int(11) DEFAULT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`team1`) REFERENCES `Team`(`id`),
  FOREIGN KEY (`team2`) REFERENCES `Team`(`id`),
  FOREIGN KEY (`winner`) REFERENCES `Team`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO Tipo (nome) VALUES 
('Normal'),
('Fire'),
('Water'),
('Electric'),
('Grass'),
('Ice'),
('Fighting'),
('Poison'),
('Ground'),
('Flying'),
('Psychic'),
('Bug'),
('Rock'),
('Ghost'),
('Dragon'),
('Dark'),
('Steel'),
('Fairy'),
('Flying'),
('Electric'),
('Psychic'),
('Grass'),
('Water'),
('Bug'),
('Normal'),
('Ground'),
('Fighting'),
('Rock'),
('Ice'),
('Dragon');








INSERT INTO Pokemon (nome, tipo1, tipo2) VALUES
('Bulbasaur', 5, 8),
('Charmander', 2, NULL),
('Squirtle', 3, NULL),
('Pikachu', 4, NULL),
('Jigglypuff', 1, 18),
('Zubat', 8, 10),
('Meowth', 1, NULL),
('Psyduck', 3, 10),
('Machop', 7, NULL),
('Magnemite', 4, 17),
('Gengar', 14, 8),
('Onix', 13, 9),
('Voltorb', 4, NULL),
('Exeggutor', 5, 11),
('Hitmonlee', 7, NULL),
('Koffing', 8, NULL),
('Rhyhorn', 13, 9),
('Staryu', 3, NULL),
('Scyther', 12, 10),
('Electabuzz', 4, NULL),
('Magmar', 2, NULL),
('Pinsir', 12, NULL),
('Gyarados', 3, 10),
('Lapras', 3, 6),
('Ditto', 1, NULL),
('Eevee', 1, NULL),
('Snorlax', 1, NULL),
('Articuno', 6, 10),
('Zapdos', 4, 10),
('Moltres', 2, 10);







insert into `Trainer`(nome) values 
("Trainer 1"),
("Trainer 2"),
("Trainer 3"),
("Trainer 4"),
("Trainer 5"),
("Trainer 6"),
("Trainer 7"),
("Trainer 8"),
("Trainer 9"),
("Trainer 10"),
("Trainer 11"),
("Trainer 12"),
("Trainer 13"),
("Trainer 14"),
("Trainer 15"),
("Trainer 16"),
("Trainer 17"),
("Trainer 18"),
("Trainer 19"),
("Trainer 20"),
("Trainer 21"),
("Trainer 22"),
("Trainer 23"),
("Trainer 24"),
("Trainer 25"),
("Trainer 26"),
("Trainer 27"),
("Trainer 28"),
("Trainer 29"),
("Trainer 30"),
("Trainer 31");


insert into `Team` (nome, id_trainer) values 
("Equipa 1", 1),
("Equipa 2", 2),
("Equipa 3", 3),
("Equipa 4", 4),
("Equipa 5", 5),
("Equipa 6", 6),
("Equipa 7", 7),
("Equipa 8", 8),
("Equipa 9", 9),
("Equipa 10", 10),
("Equipa 11", 11),
("Equipa 12", 12),
("Equipa 13", 13),
("Equipa 14", 14),
("Equipa 15", 15),
("Equipa 16", 16),
("Equipa 17", 17),
("Equipa 18", 18),
("Equipa 19", 19),
("Equipa 20", 20),
("Equipa 21", 21),
("Equipa 22", 22),
("Equipa 23", 23),
("Equipa 24", 24),
("Equipa 25", 25),
("Equipa 26", 26),
("Equipa 27", 27),
("Equipa 28", 28),
("Equipa 29", 29),
("Equipa 30", 30),
("Equipa 31", 31);




INSERT INTO `Battles` (team1, team2, winner, date) VALUES(1, 2, 1, '2024-05-01 14:30:00'),
(3, 1, 1, '2024-05-02 15:00:00'),
(2, 3, 3, '2024-05-03 16:00:00'),
(1, 2, 1, '2024-05-01 14:30:00'),
(1, 3, 3, '2024-05-04 17:00:00'),
 (4, 5, 4, '2024-05-05 10:00:00'),
 (6, 4, 6, '2024-05-06 11:00:00'),
 (5, 6, 6, '2024-05-07 12:00:00'),
 (4, 6, 6, '2024-05-08 13:00:00'),
 (7, 8, 7, '2024-05-09 14:00:00'),
 (9, 7, 9, '2024-05-10 15:00:00'),
 (8, 9, 8, '2024-05-11 16:00:00'),
 (7, 9, 7, '2024-05-12 17:00:00'),
 (10, 11, 10, '2024-05-13 18:00:00'),
 (12, 10, 12, '2024-05-14 19:00:00'),
 (11, 12, 12, '2024-05-15 20:00:00'),
 (13, 14, 13, '2024-05-16 21:00:00'),
 (15, 13, 15, '2024-05-17 22:00:00'),
 (14, 15, 14, '2024-05-18 23:00:00'),
 (16, 17, 17, '2024-05-19 09:00:00'),
 (18, 16, 16, '2024-05-20 10:00:00'),
 (17, 18, 17, '2024-05-21 11:00:00'),
 (19, 20, 19, '2024-05-22 12:00:00'),
 (21, 19, 21, '2024-05-23 13:00:00'),
 (20, 21, 21, '2024-05-24 14:00:00'),
 (22, 23, 23, '2024-05-25 15:00:00'),
 (24, 22, 24, '2024-05-26 16:00:00'),
 (23, 24, 24, '2024-05-27 17:00:00'),
 (25, 26, 25, '2024-05-28 18:00:00'),
 (27, 25, 27, '2024-05-29 19:00:00'),
 (26, 27, 26, '2024-05-30 20:00:00');


GRANT ALL PRIVILEGES ON pokemon.* TO 'Pokemon'@'%' IDENTIFIED BY 'Pokemon' WITH GRANT OPTION;
FLUSH PRIVILEGES;

