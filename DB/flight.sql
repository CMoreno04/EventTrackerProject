-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventdb` ;

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventdb` DEFAULT CHARACTER SET utf8 ;
USE `eventdb` ;

-- -----------------------------------------------------
-- Table `flight`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `flight` ;

CREATE TABLE IF NOT EXISTS `flight` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `airline` VARCHAR(45) NULL,
  `flight_number` INT NULL DEFAULT 0,
  `departure_location` VARCHAR(45) NULL,
  `arrival_location` VARCHAR(45) NULL,
  `departure_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `flight_duration` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `arrival_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `number_passangers` INT NULL,
  `arrived` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS eventuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eventuser'@'localhost' IDENTIFIED BY 'eventuser';

GRANT SELECT, INSERT, TRIGGER ON TABLE * TO 'eventuser'@'localhost';
GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `flight`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `flight` (`id`, `airline`, `flight_number`, `departure_location`, `arrival_location`, `departure_time`, `flight_duration`, `arrival_time`, `number_passangers`, `arrived`) VALUES (1, 'United', 393, 'Denver', 'Portland', '2019-12-01 02:30:00', '2019-12-01 02:30:00', '2019-12-25 01:00:00', 200, false);
INSERT INTO `flight` (`id`, `airline`, `flight_number`, `departure_location`, `arrival_location`, `departure_time`, `flight_duration`, `arrival_time`, `number_passangers`, `arrived`) VALUES (2, 'Frontier', 787, 'San Juan', 'Denver', '2019-12-01 02:30:00', '2019-12-01 02:30:00', '2019-12-25 02:30:00', 300, false);
INSERT INTO `flight` (`id`, `airline`, `flight_number`, `departure_location`, `arrival_location`, `departure_time`, `flight_duration`, `arrival_time`, `number_passangers`, `arrived`) VALUES (3, 'American Airlines', 234, 'Orlando', 'Denver', '2019-12-01 02:30:00', '2019-12-01 02:30:00', '2019-12-25 05:00:00', 250, false);
INSERT INTO `flight` (`id`, `airline`, `flight_number`, `departure_location`, `arrival_location`, `departure_time`, `flight_duration`, `arrival_time`, `number_passangers`, `arrived`) VALUES (4, 'Southwest', 365, 'Miami', 'Dubai', '2019-12-01 02:30:00', '2019-12-01 02:30:00', '2019-12-25 05:00:00', 123, false);
INSERT INTO `flight` (`id`, `airline`, `flight_number`, `departure_location`, `arrival_location`, `departure_time`, `flight_duration`, `arrival_time`, `number_passangers`, `arrived`) VALUES (5, 'Spirit', 768, 'Alaska', 'Mexico', '2019-12-01 02:30:00', '2019-12-01 02:30:00', '2019-12-25 05:00:00', 243, false);
INSERT INTO `flight` (`id`, `airline`, `flight_number`, `departure_location`, `arrival_location`, `departure_time`, `flight_duration`, `arrival_time`, `number_passangers`, `arrived`) VALUES (DEFAULT, NULL, NULL, NULL, NULL, DEFAULT, DEFAULT, '', NULL, DEFAULT);

COMMIT;

