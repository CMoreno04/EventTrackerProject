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
  `airline` VARCHAR(45) NOT NULL,
  `flight_number` INT NOT NULL DEFAULT 0,
  `departure_location` VARCHAR(45) NOT NULL,
  `arrival_location` VARCHAR(45) NOT NULL,
  `departure_time` DATETIME NULL,
  `flight_duration` TIME NULL,
  `arrival_time` DATETIME NULL,
  `number_passangers` INT NOT NULL,
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
INSERT INTO `flight` (`id`, `airline`, `flight_number`, `departure_location`, `arrival_location`, `departure_time`, `flight_duration`, `arrival_time`, `number_passangers`, `arrived`) VALUES (1, 'United', 393, 'Denver', 'Portland', '2019-12-01 02:30:00', '02:30:00', '2019-12-01 05:00:00', 10, 0);
INSERT INTO `flight` (`id`, `airline`, `flight_number`, `departure_location`, `arrival_location`, `departure_time`, `flight_duration`, `arrival_time`, `number_passangers`, `arrived`) VALUES (2, 'American Airlines', 787, 'Portland', 'Denver ', '2019-12-01 02:30:00', '02:30:00', '2019-12-01 05:00:00', 5, 0);

COMMIT;

