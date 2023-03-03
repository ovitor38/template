import { Request, Response } from "express";
import { database } from "../..";

export class UserController {
  async createUser(req: Request, res: Response): Promise<void|object> {
    const {name, email} = req.body
    const user = await database.user.create({
        data:{
            name,
            email
        }
    })
    return res.json(user)
  }
}
export const userController = new UserController();
