-- DropForeignKey
ALTER TABLE "times" DROP CONSTRAINT "times_restaurant_id_fkey";

-- AddForeignKey
ALTER TABLE "times" ADD CONSTRAINT "times_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
