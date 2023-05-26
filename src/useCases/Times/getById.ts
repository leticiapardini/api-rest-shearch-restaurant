import { Response } from "express";
import { prisma } from "../../database";

export const GetByIdTimes = async (id: string, res: Response) => {
 try {
  const getById = await prisma.times.findUnique({
    where: { id: id},
    include: { restaurant: true}
  })
  if(getById) {
    return res.status(200).json({ data: getById})
  } return res.status(400).json({ message: "Id not found"})
 } catch (error) {
  res.status(400).json({ message: error})
 }
}