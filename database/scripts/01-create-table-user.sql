USE tis4;

CREATE TABLE IF NOT EXISTS `user` (
    `id` SERIAL PRIMARY KEY,
    `social_id` VARCHAR(100) NULL UNIQUE,
    `name` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL UNIQUE,
    `password` VARCHAR(60) NULL,
    `profile` CHAR(3) NOT NULL,
    `profile_img` VARCHAR(255) NOT NULL DEFAULT 'def',
    `header_img` VARCHAR(255) NOT NULL DEFAULT 'def',
    `dt_birth` DATE NULL,
    `about` VARCHAR(255) NULL,
    `gender` VARCHAR(9) NULL,
    `last_sign_in` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
    `created_at` TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP NOT NULL
)ENGINE = InnoDB;