import { Response } from "express";
import { prisma } from "../../database";

export const GetAllRestaurantsById = async (id: string, res: Response) => {
  try {
    const idExist = await prisma.restaurants.findUnique({
      where: { id: id },
    });
    if (idExist) {
      return res.status(200).json({ data: idExist });
    }
    return res.status(400).json({ message: "Id not exist" });
  } catch (error) {
    res.status(400).json(error);
  }
};
