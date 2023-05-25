import { Response } from "express"
import { prisma } from "../../database"

export const GetAllTimes = async (res: Response) => {
  try {
    const getAll = await prisma.times.findMany({
      include: { restaurant: true}
    })
    return res.status(200).json({ data: getAll})
  } catch (error) {
    res.status(400).json({ message: error})
  }
}