import { dtoCreateTimes } from './../../dtos/dtoTimes';
import { prisma } from "../../database";
import { Response } from "express";


export const CreateNewTimes = async (
  dtoCreateTimes: dtoCreateTimes,
  res: Response
) => {
  try {
    const response = await prisma.times.create({
      data: {
        dayWeek: dtoCreateTimes.dayWeek,
        end_time: dtoCreateTimes.end_time,
        end_time_interval: dtoCreateTimes.end_time_interval,
        interval: dtoCreateTimes.interval,
        start_time: dtoCreateTimes.start_time,
        start_time_interval: dtoCreateTimes.start_time_interval,
        restaurant: { connect:  {id: dtoCreateTimes.restaurant_id}}
      }
    })
    if(response) {
      res.status(201).json({ data: response})
    }
    return res.status(400).json({message: "Not possible create new restaurant"})
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error });
  }
};