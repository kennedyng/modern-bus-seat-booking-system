/*
  Warnings:

  - You are about to alter the column `time_created` on the `operatorProfile` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `time_created` on the `passengerProfile` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `time_updated` on the `passengerProfile` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `time_created` on the `receipt` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `departing_time` on the `trip` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `operatorProfile` MODIFY `time_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `time_updated` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `passengerProfile` MODIFY `time_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `time_updated` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `receipt` MODIFY `time_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `trip` MODIFY `departing_time` TIMESTAMP NOT NULL;
