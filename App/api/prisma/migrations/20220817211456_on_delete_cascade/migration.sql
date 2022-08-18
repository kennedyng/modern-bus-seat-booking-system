-- DropForeignKey
ALTER TABLE `bus` DROP FOREIGN KEY `bus_operatorId_fkey`;

-- DropForeignKey
ALTER TABLE `operatorProfile` DROP FOREIGN KEY `operatorProfile_operatorId_fkey`;

-- DropForeignKey
ALTER TABLE `passengerProfile` DROP FOREIGN KEY `passengerProfile_passengerId_fkey`;

-- DropForeignKey
ALTER TABLE `receipt` DROP FOREIGN KEY `receipt_passengerId_fkey`;

-- DropForeignKey
ALTER TABLE `receipt` DROP FOREIGN KEY `receipt_tripId_fkey`;

-- DropForeignKey
ALTER TABLE `route` DROP FOREIGN KEY `route_operatorId_fkey`;

-- DropForeignKey
ALTER TABLE `trip` DROP FOREIGN KEY `trip_busId_fkey`;

-- DropForeignKey
ALTER TABLE `trip` DROP FOREIGN KEY `trip_operatorId_fkey`;

-- DropForeignKey
ALTER TABLE `trip` DROP FOREIGN KEY `trip_routeId_fkey`;

-- AddForeignKey
ALTER TABLE `passengerProfile` ADD CONSTRAINT `passengerProfile_passengerId_fkey` FOREIGN KEY (`passengerId`) REFERENCES `passenger`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receipt` ADD CONSTRAINT `receipt_tripId_fkey` FOREIGN KEY (`tripId`) REFERENCES `trip`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receipt` ADD CONSTRAINT `receipt_passengerId_fkey` FOREIGN KEY (`passengerId`) REFERENCES `passenger`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bus` ADD CONSTRAINT `bus_operatorId_fkey` FOREIGN KEY (`operatorId`) REFERENCES `operator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `route` ADD CONSTRAINT `route_operatorId_fkey` FOREIGN KEY (`operatorId`) REFERENCES `operator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trip` ADD CONSTRAINT `trip_operatorId_fkey` FOREIGN KEY (`operatorId`) REFERENCES `operator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trip` ADD CONSTRAINT `trip_routeId_fkey` FOREIGN KEY (`routeId`) REFERENCES `route`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trip` ADD CONSTRAINT `trip_busId_fkey` FOREIGN KEY (`busId`) REFERENCES `bus`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `operatorProfile` ADD CONSTRAINT `operatorProfile_operatorId_fkey` FOREIGN KEY (`operatorId`) REFERENCES `operator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
