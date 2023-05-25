/*
  Warnings:

  - Made the column `restaurant_id` on table `times` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "times" DROP CONSTRAINT "times_restaurant_id_fkey";

-- AlterTable
ALTER TABLE "times" ALTER COLUMN "start_time_interval" DROP NOT NULL,
ALTER COLUMN "end_time_interval" DROP NOT NULL,
ALTER COLUMN "restaurant_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "times" ADD CONSTRAINT "times_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
