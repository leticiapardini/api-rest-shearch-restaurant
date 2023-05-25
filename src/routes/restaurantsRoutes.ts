import { Request, Response, Router } from "express";
import { CreateNewRestaurant } from "../useCases/Restaurants/create";
import { getAllRestaurants } from "../useCases/Restaurants/getAll";
import { GetAllRestaurantsById } from "../useCases/Restaurants/getById";

export const restaurantRouter = Router();

restaurantRouter.post("/", async (req : Request, res : Response) => {
      const { body } = req
      const response = CreateNewRestaurant(body, res)
      return response
})  

restaurantRouter.get("/", async (req : Request, res : Response) => {
  const response = getAllRestaurants(res)
  return response
})  

restaurantRouter.get("/:id", async (req : Request, res : Response) => {
  const id = req.params.id  
  const response = GetAllRestaurantsById( id,res)
  return response
})  