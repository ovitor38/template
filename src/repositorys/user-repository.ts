import { prisma } from "..";
import { UserModel } from "../modules/users/model/user.model";


export interface UserRepositoryInterface {
  create(user: UserModel): Promise<UserModel>;
}

export class UserRepository implements UserRepositoryInterface {
  async create(data: UserModel): Promise<UserModel> {
    const createdUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
      select: {
        name: true,
        email: true,
      },
    });
    return createdUser;
  }
}
