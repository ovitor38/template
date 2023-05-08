import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error";
import apiRoutes from "./routes";
import { prisma } from ".";
dotenv.config();

async function main() {
  try {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(apiRoutes);
    app.use(errorMiddleware);
     await prisma.$connect()
     console.log('Database Connected')

    app.listen(process.env.PORT, () =>
      console.log(`Server Running on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
}

main();
