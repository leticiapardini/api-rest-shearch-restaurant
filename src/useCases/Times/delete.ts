import { Response } from "express";
import { prisma } from "../../database";

export const deleteTimes = async (id: string, res: Response) => {
  try {
    const data = await prisma.times.delete({
      where: {id: id}
    })
    if(data) {
      return res.status(200).json({ message: "Times Delete success"})
    }
    return res.status(400).json({ message: "Id not exists"})
  } catch (error) {
    res.status(400).json({ message: error})
  }
}