import { Router } from "express";
import { userCreateController } from "../modules/users/factory";

const routes = Router();

routes.post("/create", userCreateController.createUser);
// routes.get("/:id", userController.getOneUser);
// routes.patch("/:id", userController.updateUser);
// routes.get("/", userController.getUsers);
// routes.delete("/:id", userController.deleteUser);

export const userRoutes = routes;
