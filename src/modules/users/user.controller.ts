import { Request, Response } from "express";
import { BadRequestError } from "../../helpers/api-errors";
import { PARAM_TYPE_ERROR } from "../../helpers/constants/http-codes";
import { userService } from "./user.service";
export class UserController {
  async createUser(req: Request, res: Response): Promise<void | object> {
    const user = await userService.createService(req.body);
    res.status(201).json(user);
  }

  async getOneUser(req: Request, res: Response) {
    if (typeof req.params.id !== "number") {
      throw new BadRequestError(PARAM_TYPE_ERROR);
    }
    const { id } = req.params;
    const user = await userService.getOneService(Number(id));
    res.status(200).json(user);
  }

  async getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    res.status(200).json(users);
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    if (typeof id !== "number") {
      throw new BadRequestError(PARAM_TYPE_ERROR.replace('%PARAM%', id));
  }
    const deleteUser = await userService.deleteUserService(+id);
    res.status(200).json(deleteUser);
  }

  async updateUser(req: Request, res: Response) {
    if (typeof req.params.id !== "number") {
      throw new BadRequestError(PARAM_TYPE_ERROR);
    }
    const id = Number(req.params.id);
    const { name, email } = req.body;
    const rawData = { id, name, email };
    const updateUser = await userService.updateuserService(rawData);
    res.status(200).json(updateUser);
  }
}
export const userController = new UserController();
