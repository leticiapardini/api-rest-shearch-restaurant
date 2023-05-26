-- CreateTable
CREATE TABLE "restaurants" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cellphone" TEXT NOT NULL,
    "socialMidea" TEXT,
    "link" TEXT,

    CONSTRAINT "restaurants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "times" (
    "id" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "interval" BOOLEAN NOT NULL,
    "start_time_interval" TIMESTAMP(3) NOT NULL,
    "end_time_interval" TIMESTAMP(3) NOT NULL,
    "week_id" TEXT,
    "restaurant_id" TEXT,

    CONSTRAINT "times_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "week" (
    "id" TEXT NOT NULL,
    "cod_week" INTEGER NOT NULL,

    CONSTRAINT "week_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_password_key" ON "restaurants"("password");

-- AddForeignKey
ALTER TABLE "times" ADD CONSTRAINT "times_week_id_fkey" FOREIGN KEY ("week_id") REFERENCES "week"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "times" ADD CONSTRAINT "times_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE SET NULL ON UPDATE CASCADE;
