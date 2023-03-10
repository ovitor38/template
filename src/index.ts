import { AppDataSource } from "./db/data-source";
import express from "express";
import 'express-async-errors'
import dotenv from 'dotenv'
import routes from "./routes";
import { errorMiddleware } from "./middlewares/error";
dotenv.config()

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database Connected");

    const app = express();

    app.use(express.json());

    app.use(routes)
    app.use(errorMiddleware)
    app.listen(process.env.PORT, () =>
    console.log(`Server Running on port ${process.env.PORT}`))
  } catch (error) {
    console.log(error);
  }
}

main();
