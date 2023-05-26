import { dtoCreateRestaurantes } from "../../dtos/dtoRestaurant";
import { prisma } from "../../database";
import { Response } from "express";
import bcrypt from "bcryptjs";

export const CreateNewRestaurant = async (
  dtoCreateRestaurantes: dtoCreateRestaurantes,
  res: Response
) => {
  try {
    const restaurantAlreadyExists = await prisma.restaurants.findUnique({
      where: { name: dtoCreateRestaurantes.name },
    });
    if (restaurantAlreadyExists) {
      return res.status(400).json({ message: "Restaurant already registred" });
    }
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(
      dtoCreateRestaurantes.password,
      saltOrRounds
    );
    const newRestaurant = {
      ...dtoCreateRestaurantes,
      password: hash,
    };
    if (hash) {
      const createOneRestaurant = await prisma.restaurants.create({
        data: {
          ...newRestaurant,
        },
      });
      if (createOneRestaurant) {
        return res.status(201).json({ message: "Create new restaurant!" });
      }
      return res
        .status(400)
        .json({ message: "Not possible create new restaurant" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
