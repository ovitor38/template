import { z } from "zod";
import { userUpdateDto } from "../dto";
import { userDto } from "../dto/create-user.dto";

export type UserModel = z.infer<typeof userDto>;
export type UserUpadateModel = z.infer<typeof userUpdateDto>;
