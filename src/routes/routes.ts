import { Router } from "express";
import { restaurantRouter } from "./restaurantsRoutes"
import { timesRouter } from "./timesRoutes";

export const router = Router();

router.use("/restaurants",restaurantRouter)
router.use("/times",timesRouter)
router.get("/", (request,response) => {
  response.send({message : "Bem vindo a api de Pesquisa de Restaurantes!", statusMessage: "OK"})
  .status(200)
})
