import { Response } from "express";
import { prisma } from "../../database";
import bcrypt from "bcryptjs";
import { Restaurants } from "@prisma/client";

export const deleteRestaurant = async (
  id: string,
  password: string,
  res: Response
) => {
  const selectRestaurant: Restaurants | null =
    await prisma.restaurants.findUnique({
      where: { id: id },
    });
  const isMatch = await bcrypt.compare(password, selectRestaurant!.password);

  if (selectRestaurant && isMatch) {
    const response = await prisma.restaurants.delete({
      where: { id: id },
    });
    if (response) {
      return res.status(200).json({ message: "Restaurant delete success" });
    }
    return res.status(400).json({ message: "Error delete Restaurant" });
  }
  return res.status(400).json("Invalid Password");
};
