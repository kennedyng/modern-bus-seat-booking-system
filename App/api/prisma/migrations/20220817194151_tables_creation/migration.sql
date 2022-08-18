-- CreateTable
CREATE TABLE `passenger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `password` VARCHAR(4) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `passengerProfile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `middle_name` VARCHAR(50) NULL,
    `nrc` VARCHAR(20) NOT NULL,
    `address` VARCHAR(255) NULL,
    `time_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `time_updated` DATETIME(3) NOT NULL,
    `passengerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `receipt` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `passenger_id` INTEGER NOT NULL,
    `method_of_pay` VARCHAR(191) NOT NULL,
    `transaction_id` VARCHAR(191) NOT NULL,
    `time_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plate_number` VARCHAR(50) NOT NULL,
    `total_seat` INTEGER NOT NULL,
    `operator_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `route` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `starting_point` VARCHAR(100) NOT NULL,
    `ending_point` VARCHAR(100) NOT NULL,
    `operator_id` INTEGER NOT NULL,
    `fare` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trip` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `departing_time` DATETIME(3) NOT NULL,
    `route_id` INTEGER NOT NULL,
    `bus_id` INTEGER NOT NULL,
    `operator_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `operator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `operatorProfile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_name` VARCHAR(100) NOT NULL,
    `motto` VARCHAR(255) NOT NULL,
    `logo_pic` VARCHAR(191) NULL,
    `time_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `time_updated` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
