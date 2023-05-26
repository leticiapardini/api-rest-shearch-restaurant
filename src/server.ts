import express from "express";
import { router } from "./routes/routes";

const server = () => {
  try {
    const app = express();
    app.use(express.json());
    app.use(router);
    app.listen(8080, () => console.log("Server Running!"));
  } catch (error) {
    console.log(error);
  }
};

server();
