import { Response } from "express";
import { prisma } from "../../database";

export const getAllRestaurants = async (res: Response) => {
  try {
    const data = await prisma.restaurants.findMany();
    return res.status(200).json({ data: data });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
