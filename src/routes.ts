import { Router } from "express";
import {  UnauthorizedError } from "./helpers/api-errors";
import { UNAUTHORIZED_ERROR } from "./helpers/constants/http-codes";

const routes = Router();

routes.get("/", async (req, res) => {
  throw new UnauthorizedError(UNAUTHORIZED_ERROR);
});

export default routes;
