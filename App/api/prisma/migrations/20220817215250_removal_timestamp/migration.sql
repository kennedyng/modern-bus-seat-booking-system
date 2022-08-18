-- AlterTable
ALTER TABLE `operatorProfile` MODIFY `time_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `passengerProfile` MODIFY `time_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `time_updated` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `receipt` MODIFY `time_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `trip` MODIFY `departing_time` DATETIME(3) NOT NULL;
