import { Response } from 'express';
import { dtoUpdateTimes } from './../../dtos/dtoTimes';
import { prisma } from '../../database';

export const UpdateTimes = async (id: string, dtoUpdateTimes: dtoUpdateTimes, res: Response) => {
  try {
    const updateTime = await prisma.times.update({
      where: { id: id},
      data: {
        ...dtoUpdateTimes
      }
    })
    if(updateTime) {
      res.status(200).json({ data: updateTime})
    }else {
      return res.status(400).json({message: "Error update Times"})
    }
     
  } catch (error) {
    res.status(400).json({ message: error})
  }
}