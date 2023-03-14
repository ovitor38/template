import { PrismaClient } from "@prisma/client";
import { NotFoundError } from "./helpers/api-errors";
import { USER_NOT_FOUND } from "./helpers/constants/http-codes";
export const prisma = new PrismaClient({
  errorFormat: "minimal",
  log: ["error", "info", "warn"],
  rejectOnNotFound: {
    findFirst: {
      User: (err) => new NotFoundError(USER_NOT_FOUND),
    },
    findUnique: {
      User: (err) => new NotFoundError(USER_NOT_FOUND),
    },
  },
});
