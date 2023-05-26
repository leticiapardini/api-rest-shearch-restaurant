import { Request, Response, Router } from "express";
import {
  validateFildNewTimes,
  validateFildUpdateTimes,
} from "../middlewares/validate";
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
  const response = GetAllTimes(res);
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
