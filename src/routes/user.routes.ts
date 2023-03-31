import { Router } from "express";
import { createUserFactory } from "../modules/users/factory";

const routes = Router();
routes.post("/create", async (req, res) => {
  await createUserFactory.handle(req, res);
});

export const userRoutes = routes;
