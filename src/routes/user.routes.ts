import { Router } from "express";
import { userController } from "../modules/users/user.controller";

const routes = Router();

routes.post("/create", userController.createUser);
routes.get("/:id", userController.getOneUser);
routes.patch("/:id", userController.updateUser);
routes.get("/", userController.getUsers);
routes.delete("/:id", userController.deleteUser);

export const userRoutes = routes;