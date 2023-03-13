import { Request, Response, NextFunction } from "express";
import { ApiError } from "../helpers/api-errors";

export const errorMiddleware = (error: Error & Partial<ApiError>, req: Request, res: Response, next: NextFunction) =>{
  const statusCode = error.statusCode ?? 500
  const errorMessage = error.message
  const message = error.statusCode ? error.message : 'Internal Server Error'
  return res.status(statusCode).json({message, errorMessage})
}