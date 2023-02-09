import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../modules/users/entities/user.entity";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "postgres",
  database: process.env.DB_NAME || "test",
  entities: [`${__dirname}/src/modules/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/src/db/migrations/*.{ts,js}`],
});
