import { User } from "@prisma/client";
import { prisma } from "..";
import { UserModel } from "../modules/users/model/user.model";

export interface IUserRepo {
  create(user: UserModel): Promise<any>;
  getUser(id:number): Promise<User>
}

export class UserRepository implements IUserRepo {
  constructor() {}
  async create(data: UserModel) {
    const createUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
      select: {
        name: true,
        email: true,
      },
    });
    return createUser;
  }

  async getUser(id: number): Promise<User> {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id,
      },
    });

    return user;
  }
}
