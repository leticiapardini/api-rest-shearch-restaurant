import { Response } from "express";
import { prisma } from "../../database";
import {
  dtoUpdateRestaurantes,
} from "../../dtos/dtoRestaurant";
import bcrypt from "bcryptjs";
import { Restaurants } from "@prisma/client";

export const updateRestaurant = async (
  id: string,
  res: Response,
  dtoUpdateRestaurantes: dtoUpdateRestaurantes
) => {
  try {
    const selectRestaurant: Restaurants | null =
      await prisma.restaurants.findUnique({
        where: { id: id },
      });

    const isMatch = await bcrypt.compare(
      dtoUpdateRestaurantes.password,
      selectRestaurant!.password
    );
    const newDtoUpdate = {
      ...dtoUpdateRestaurantes,
      password: selectRestaurant!.password,
    };
    if (selectRestaurant && isMatch) {
      const response = await prisma.restaurants.update({
        where: { id: id },
        data: { ...newDtoUpdate },
      });
      if (response) {
        return res.status(200).json({ data: response });
      }
      return res.status(400).json({ message: "Error update Restaurant" });
    }
    return res.status(400).json("Invalid Password");
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
