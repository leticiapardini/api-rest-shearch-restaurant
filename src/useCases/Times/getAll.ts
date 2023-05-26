import { Response } from "express"
import { prisma } from "../../database"

export const GetAllTimes = async (res: Response) => {
  try {
    console.log('antes de conecta')
    const getAll = await prisma.times.findMany({
      include: { restaurant: true}
    })
    console.log('dps de conecta')
    return res.status(200).json({ data: getAll})
  } catch (error) {
    console.log('catch')
    res.status(400).json({ message: error})
  }
}