import express from "express";
import { router } from "./routes/routes";
import cors from 'cors'

const server = () => {
  try {
    const app = express();
    app.use(cors())
    app.use(express.json());
    app.use(router);
    app.listen(8080, () => console.log("Server Running!"));
  } catch (error) {
    console.log(error);
  }
};

server();
