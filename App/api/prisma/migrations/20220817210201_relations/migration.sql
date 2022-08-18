/*
  Warnings:

  - You are about to drop the column `operator_id` on the `bus` table. All the data in the column will be lost.
  - You are about to drop the column `passenger_id` on the `receipt` table. All the data in the column will be lost.
  - You are about to drop the column `operator_id` on the `route` table. All the data in the column will be lost.
  - You are about to drop the column `bus_id` on the `trip` table. All the data in the column will be lost.
  - You are about to drop the column `operator_id` on the `trip` table. All the data in the column will be lost.
  - You are about to drop the column `route_id` on the `trip` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[operatorId]` on the table `operatorProfile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[passengerId]` on the table `passengerProfile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `operatorId` to the `operatorProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount_payed` to the `receipt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bus` DROP COLUMN `operator_id`,
    ADD COLUMN `operatorId` INTEGER NULL;

-- AlterTable
ALTER TABLE `operatorProfile` ADD COLUMN `operatorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `receipt` DROP COLUMN `passenger_id`,
    ADD COLUMN `amount_payed` DOUBLE NOT NULL,
    ADD COLUMN `passengerId` INTEGER NULL,
    ADD COLUMN `tripId` INTEGER NULL;

-- AlterTable
ALTER TABLE `route` DROP COLUMN `operator_id`,
    ADD COLUMN `operatorId` INTEGER NULL;

-- AlterTable
ALTER TABLE `trip` DROP COLUMN `bus_id`,
    DROP COLUMN `operator_id`,
    DROP COLUMN `route_id`,
    ADD COLUMN `busId` INTEGER NULL,
    ADD COLUMN `operatorId` INTEGER NULL,
    ADD COLUMN `routeId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `operatorProfile_operatorId_key` ON `operatorProfile`(`operatorId`);

-- CreateIndex
CREATE UNIQUE INDEX `passengerProfile_passengerId_key` ON `passengerProfile`(`passengerId`);

-- AddForeignKey
ALTER TABLE `passengerProfile` ADD CONSTRAINT `passengerProfile_passengerId_fkey` FOREIGN KEY (`passengerId`) REFERENCES `passenger`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receipt` ADD CONSTRAINT `receipt_tripId_fkey` FOREIGN KEY (`tripId`) REFERENCES `trip`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receipt` ADD CONSTRAINT `receipt_passengerId_fkey` FOREIGN KEY (`passengerId`) REFERENCES `passenger`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bus` ADD CONSTRAINT `bus_operatorId_fkey` FOREIGN KEY (`operatorId`) REFERENCES `operator`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `route` ADD CONSTRAINT `route_operatorId_fkey` FOREIGN KEY (`operatorId`) REFERENCES `operator`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trip` ADD CONSTRAINT `trip_operatorId_fkey` FOREIGN KEY (`operatorId`) REFERENCES `operator`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trip` ADD CONSTRAINT `trip_routeId_fkey` FOREIGN KEY (`routeId`) REFERENCES `route`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trip` ADD CONSTRAINT `trip_busId_fkey` FOREIGN KEY (`busId`) REFERENCES `bus`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `operatorProfile` ADD CONSTRAINT `operatorProfile_operatorId_fkey` FOREIGN KEY (`operatorId`) REFERENCES `operator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
