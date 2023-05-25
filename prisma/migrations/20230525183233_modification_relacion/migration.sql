/*
  Warnings:

  - You are about to drop the column `week_id` on the `times` table. All the data in the column will be lost.
  - You are about to drop the `week` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `dayWeek` to the `times` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "times" DROP CONSTRAINT "times_week_id_fkey";

-- DropIndex
DROP INDEX "restaurants_password_key";

-- AlterTable
ALTER TABLE "times" DROP COLUMN "week_id",
ADD COLUMN     "dayWeek" TEXT NOT NULL;

-- DropTable
DROP TABLE "week";
