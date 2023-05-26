import { Request, Response, Router } from "express";
import { CreateNewRestaurant } from "../useCases/Restaurants/create";
import { getAllRestaurants } from "../useCases/Restaurants/getAll";
import { GetAllRestaurantsById } from "../useCases/Restaurants/getById";
import {
  validateFildDeleteRestaurant,
  validateFildNewRestaurant,
  validateFildNewTimes,
  validateFildUpdateRestaurant,
  validateFildUpdateTimes,
} from "../middlewares/validate";
import { linkSchemaCreateRestaurant } from "../utils/validate/validateCreateNewRestaurant";
import { linkSchemaUpdateRestaurant } from "../utils/validate/validateUpdateRestaurant";
import { updateRestaurant } from "../useCases/Restaurants/update";
import { linkSchemaDeleteRestaurant } from "../utils/validate/validadeDeleteRestaurant";
import { deleteRestaurant } from "../useCases/Restaurants/delete";
import { linkSchemaCreateTimes } from "../utils/validate/validateCreateTimes";
import { CreateNewTimes } from "../useCases/Times/create";
import { GetAllTimes } from "../useCases/Times/getAll";
import { GetByIdTimes } from "../useCases/Times/getById";
import { linkSchemaUpdateTimes } from "../utils/validate/validateUpdateTimes";
import { UpdateTimes } from "../useCases/Times/update";
import { deleteTimes } from "../useCases/Times/delete";

export const timesRouter = Router();

timesRouter.post(
  "/",
  validateFildNewTimes(linkSchemaCreateTimes),
  async (req: Request, res: Response) => {
    const { body } = req;
    const response = CreateNewTimes(body, res);
    return response;
  }
);

timesRouter.get("/", async (req: Request, res: Response) => {
  console.log('aquii')
  const response = GetAllTimes(res);
  console.log('dps do aqui')
  return response;
});

timesRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = GetByIdTimes(id, res);
  return response;
});

timesRouter.patch(
  "/:id",
  validateFildUpdateTimes(linkSchemaUpdateTimes),
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const { body } = req;
    const response = UpdateTimes(id, body, res);
    return response;
  }
);

timesRouter.delete(
  "/:id",
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const response = deleteTimes(id,res);
    return response;
  }
);
