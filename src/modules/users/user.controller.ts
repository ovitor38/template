import { Request, Response } from "express";
import { IUserService, UserService } from "./user.service";

export class UserController {
  private userService: IUserService
  constructor( userService: IUserService) {
    this.userService = userService
  }
  
  public async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const request = { name, email };
    const user = await this.userService.create(request);
    res.status(200).json(user);
  }

  public async getUser(req: Request, res: Response){
    const {id} = req.params
    const user = await this.userService.get(+id)
    res.status(200).json(user)
  }
}

