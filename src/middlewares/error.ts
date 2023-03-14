import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { ApiError } from "../helpers/api-errors";

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = error.statusCode ?? 500;

  if (error instanceof z.ZodError) {
    return res.status(400).json({ error: error.issues });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2025") {
      return res.status(404).json({ errorMessage: "Record not found" });
    } else {
      return res.status(400).json({
        errorCode: error.code,
        errorMessage: error.message,
        errorField: error.meta,
      });
    }
  }
  const message = error.statusCode ? error.message : "Internal Server Error";
  return res.status(statusCode).json({ message });
};
