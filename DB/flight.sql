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
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  `enabled` VARCHAR(45) NULL,
  `role` VARCHAR(20) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `username_UNIQUE` ON `user` (`username` ASC);


-- -----------------------------------------------------
-- Table `flight`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `flight` ;

CREATE TABLE IF NOT EXISTS `flight` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `airline` VARCHAR(45) NULL DEFAULT NULL,
  `flight_number` INT(11) NULL DEFAULT '0',
  `departure_location` VARCHAR(45) NULL DEFAULT NULL,
  `arrival_location` VARCHAR(45) NULL DEFAULT NULL,
  `departure_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `arrival_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `number_passangers` INT(11) NOT NULL,
  `arrived` TINYINT(4) NOT NULL DEFAULT '0',
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `user_id` ON `flight` (`user_id` ASC);

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
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `user` (`id`, `email`, `username`, `password`, `enabled`, `role`) VALUES (1, 'shaun@winchester.co.uk ', 'shaun', '$2a$10$4SMKDcs9jT18dbFxqtIqDeLEynC7MUrCEUbv1a/bhO.x9an9WGPvm', '1', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `flight`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `flight` (`id`, `airline`, `flight_number`, `departure_location`, `arrival_location`, `departure_time`, `arrival_time`, `number_passangers`, `arrived`, `user_id`) VALUES (1, 'United', 787, 'Denver', 'Portland', '2019-12-25 20:30', '2019-12-25 21:30', 200, 0, 1);
INSERT INTO `flight` (`id`, `airline`, `flight_number`, `departure_location`, `arrival_location`, `departure_time`, `arrival_time`, `number_passangers`, `arrived`, `user_id`) VALUES (2, 'Frontier', 234, 'Denver', 'San Juan', '2019-12-25 20:30', '2019-12-25 21:30', 234, 0, 1);
INSERT INTO `flight` (`id`, `airline`, `flight_number`, `departure_location`, `arrival_location`, `departure_time`, `arrival_time`, `number_passangers`, `arrived`, `user_id`) VALUES (3, 'Southwest', 456, 'Denver', 'Orando', '2019-12-25 20:30', '2019-12-25 21:30', 123, 1, 1);
INSERT INTO `flight` (`id`, `airline`, `flight_number`, `departure_location`, `arrival_location`, `departure_time`, `arrival_time`, `number_passangers`, `arrived`, `user_id`) VALUES (4, 'American Airlines', 425, 'Denver', 'Seattle', '2019-12-25 20:30', '2019-12-25 21:30', 350, 0, 1);
INSERT INTO `flight` (`id`, `airline`, `flight_number`, `departure_location`, `arrival_location`, `departure_time`, `arrival_time`, `number_passangers`, `arrived`, `user_id`) VALUES (5, 'Spirit', 285, 'Denver', 'Portland', '2019-12-25 20:30', '2019-12-25 21:30', 500, 1, 1);

COMMIT;

