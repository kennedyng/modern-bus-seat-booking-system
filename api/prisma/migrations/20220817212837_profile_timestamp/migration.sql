/*
  Warnings:

  - Made the column `time_created` on table `operatorProfile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `operatorProfile` MODIFY `time_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
