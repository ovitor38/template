import { Router } from "express";
import { userRoutes } from "./user.routes";

const routes = Router();
const apiRoutes = Router();

apiRoutes.use("/api", routes);
routes.use("/user", userRoutes);


export default apiRoutes;
