/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `operator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone_number]` on the table `passenger` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `operator_email_key` ON `operator`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `passenger_phone_number_key` ON `passenger`(`phone_number`);
