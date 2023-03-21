import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  constructor(private readonly userService: UserService) {}
  public async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const request = { name, email };
    const user = await this.userService.create(request);
    res.status(200).json(user);
  }
}

