import { Router } from "express";
import { ApiError, BadRequestError } from "./helpers/api-errors";

const routes = Router();

routes.get("/", async (req, res) => {
  throw new BadRequestError("novo erro");
});

export default routes;
