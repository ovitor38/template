import { prisma } from "../../..";
import { getOneuser } from "./get-one-user";

class UpdateUser {
  public async run(id: number, name?: string, email?: string) {
    await getOneuser.run(id);

    return prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    });
  }
}
export const updateUser = new UpdateUser();
