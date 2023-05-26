import { Request, Response, Router } from "express";
import { CreateNewRestaurant } from "../useCases/Restaurants/create";
import { getAllRestaurants } from "../useCases/Restaurants/getAll";
import { GetAllRestaurantsById } from "../useCases/Restaurants/getById";
import {
  validateFildDeleteRestaurant,
  validateFildNewRestaurant,
  validateFildUpdateRestaurant,
} from "../middlewares/validate";
import { linkSchemaCreateRestaurant } from "../utils/validate/validateCreateNewRestaurant";
import { linkSchemaUpdateRestaurant } from "../utils/validate/validateUpdateRestaurant";
import { updateRestaurant } from "../useCases/Restaurants/update";
import { linkSchemaDeleteRestaurant } from "../utils/validate/validadeDeleteRestaurant";
import { deleteRestaurant } from "../useCases/Restaurants/delete";

export const restaurantRouter = Router();

restaurantRouter.post(
  "/",
  validateFildNewRestaurant(linkSchemaCreateRestaurant),
  async (req: Request, res: Response) => {
    const { body } = req;
    const response = CreateNewRestaurant(body, res);
    return response;
  }
);

restaurantRouter.get("/", async (req: Request, res: Response) => {
  const response = getAllRestaurants(res);
  return response;
});

restaurantRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = GetAllRestaurantsById(id, res);
  return response;
});

restaurantRouter.patch(
  "/:id",
  validateFildUpdateRestaurant(linkSchemaUpdateRestaurant),
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const { body } = req;
    const response = updateRestaurant(id, res, body);
    return response;
  }
);

restaurantRouter.delete(
  "/:id",
  validateFildDeleteRestaurant(linkSchemaDeleteRestaurant),
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const { password } = req.body;
    const response = deleteRestaurant(id, password, res);
    return response;
  }
);
