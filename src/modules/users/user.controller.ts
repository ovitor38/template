import { Request, Response } from "express";
import { userService } from "./user.service";
export class UserController {
  async createUser(req: Request, res: Response): Promise<void | object> {
    const { name, email } = req.body;
    const user = await userService.createService(name, email);
    res.status(201).json(user);
  }

  async getOneUser(req: Request, res: Response) {
    const { id } = req.params;
    const user = await userService.getOneService(Number(id));
    res.status(200).json(user);
  }

  async getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    res.status(200).json(users);
  }

  async deleteUser(req: Request, res: Response){
    const {id} = req.params
    const deleteUser = await userService.deleteUserService(+id)
    res.status(200).json(deleteUser)
  }

  async updateUser(req: Request, res:Response){
    const{id} = req.params
    const{name, email} = req.body
    const updateUser = await userService.updateuserService(+id, name, email)
    res.status(200).json(updateUser)
  }
}
export const userController = new UserController();
