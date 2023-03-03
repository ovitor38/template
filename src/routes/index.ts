import { Router } from "express";
import { userController } from "../modules/users/user.controller";

const routes = Router();

routes.post("/user/create", userController.createUser)

export default routes;
