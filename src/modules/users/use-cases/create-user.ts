import { prisma } from "../../..";
import { UserModel } from "../model/user.model";

class CreateUser {
  public async run(rawData: UserModel) {
    const user = await prisma.user.create({
      data: {
        name: rawData.name,
        email: rawData.email,
      },
      select: {
        name: true,
        email: true,
      },
    });
    return [user, { success: true, errors: null }];
  }
}
export const createUser = new CreateUser();
